import { Request, Response } from 'express';
import { storage } from '../storage';
import { insertLeadSchema, type Lead } from '@shared/schema';
import { ZodError } from 'zod';

export async function handleSubmitLead(req: Request, res: Response) {
  try {
    // Validate the request body against the schema
    const validatedData = insertLeadSchema.parse(req.body);
    
    // Store the lead in our storage
    const lead: Lead = await storage.createLead(validatedData);
    
    // Send an email notification (in a real implementation)
    // This would be implemented with a service like Nodemailer
    
    // Return success response
    return res.status(200).json({ 
      success: true,
      message: "Lead successfully submitted",
      id: lead.id
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    if (error instanceof ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid form data",
        errors: error.errors
      });
    }
    
    return res.status(500).json({
      success: false,
      message: "An error occurred while submitting your information. Please try again later."
    });
  }
}
