import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from '@/lib/queryClient';
import { validateEmail, validatePhone } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

interface LeadFormProps {
  simplified?: boolean;
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  message?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ simplified = false, className = '' }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({
    name: false,
    phone: false,
    email: false,
    address: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched({ ...touched, [name]: true });
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
    
    // Live validation feedback for better UX
    validateField(name as keyof FormData, value);
  };

  const validateField = (name: keyof FormData, value: string) => {
    const newErrors = { ...errors };
    
    switch(name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(value)) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'email':
        // Email is now optional, but must be valid if provided
        if (value.trim() && !validateEmail(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'address':
        if (!value.trim()) {
          newErrors.address = 'Property address is required';
        } else {
          delete newErrors.address;
        }
        break;
    }
    
    setErrors(newErrors);
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Email is optional, but if provided must be valid
    if (formData.email.trim() && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required';
    }
    
    setErrors(newErrors);
    // Mark all fields as touched during form submission
    setTouched({
      name: true,
      phone: true,
      email: true,
      address: true,
      message: true
    });
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Email is optional, but if provided must be valid
    if (formData.email.trim() && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required';
    }
    
    setErrors(newErrors);
    // Mark all fields as touched during form submission
    setTouched({
      name: true,
      phone: true,
      email: true,
      address: true,
      message: true
    });
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) return;
    
    setIsSubmitting(true);
    
    try {
      // Clean up empty email if user didn't enter one
      const submitData = {
        ...formData,
        email: formData.email.trim() || 'no-email-provided@example.com' // Provide fallback for backend validation
      };
      
      const response = await apiRequest('POST', '/api/leads', submitData);
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: '',
        });
        
        // Reset touched state
        setTouched({
          name: false,
          phone: false,
          email: false,
          address: false,
          message: false
        });
        
        toast({
          title: "Success!",
          description: "We've received your information. We'll be in touch soon!",
          variant: "default",
        });
        
        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't process your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate form completion percentage
  const getFormCompletionPercentage = () => {
    const requiredFields = ['name', 'phone', 'address'];
    let completedCount = 0;
    
    requiredFields.forEach(field => {
      const key = field as keyof FormData;
      const value = formData[key];
      const error = errors[key];
      
      if (value && value.trim() && !error) {
        completedCount++;
      }
    });
    
    return Math.round((completedCount / requiredFields.length) * 100);
  };

  return (
    <div className={`bg-secondary p-6 md:p-8 rounded-xl shadow-2xl ${className}`}>
      <h2 className="font-montserrat font-semibold text-2xl mb-4 text-center">
        Get Your <span className="text-primary">Cash Offer</span>
      </h2>
      
      {!simplified && (
        <div className="mb-4">
          <div className="h-2 bg-background/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${getFormCompletionPercentage()}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>Step 1</span>
            <span>Complete Profile</span>
          </div>
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`bg-background/80 border focus:border-primary text-foreground ${
              touched.name && errors.name ? 'border-destructive' : ''
            }`}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby="name-error"
            required
          />
          {touched.name && errors.name && (
            <p id="name-error" className="text-destructive text-xs mt-1">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={`bg-background/80 border focus:border-primary text-foreground ${
              touched.phone && errors.phone ? 'border-destructive' : ''
            }`}
            aria-invalid={Boolean(touched.phone && errors.phone)}
            aria-describedby="phone-error"
            required
          />
          {touched.phone && errors.phone && (
            <p id="phone-error" className="text-destructive text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
            Email Address
            <Badge variant="outline" className="ml-2 text-xs font-normal">Optional</Badge>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`bg-background/80 border focus:border-primary text-foreground ${
              touched.email && errors.email ? 'border-destructive' : ''
            }`}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby="email-error"
          />
          {touched.email && errors.email && (
            <p id="email-error" className="text-destructive text-xs mt-1">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Property Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, York, PA"
            className={`bg-background/80 border focus:border-primary text-foreground ${
              touched.address && errors.address ? 'border-destructive' : ''
            }`}
            aria-invalid={Boolean(touched.address && errors.address)}
            aria-describedby="address-error"
            required
          />
          {touched.address && errors.address && (
            <p id="address-error" className="text-destructive text-xs mt-1">{errors.address}</p>
          )}
        </div>
        
        {!simplified && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 flex items-center">
              Additional Information
              <Badge variant="outline" className="ml-2 text-xs font-normal">Optional</Badge>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your property and your timeline for selling..."
              className="bg-background/80 border border-muted focus:border-primary text-foreground resize-none"
              rows={4}
            />
          </div>
        )}
        
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-medium bg-primary hover:bg-primary/90 text-primary-foreground py-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
              isSuccess ? 'bg-green-500 hover:bg-green-600' : ''
            } btn-pulse`}
            aria-live="polite"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                Request Submitted
              </span>
            ) : (
              <span className="flex items-center justify-center text-lg">
                Get Your Cash Offer
              </span>
            )}
          </Button>
        </div>
        
        <div className="text-xs text-center text-muted-foreground">
          We respect your privacy. Your information will never be shared.
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
