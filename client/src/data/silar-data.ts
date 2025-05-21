import { imageUrls } from '@/lib/utils';

export const companyInfo = {
  name: "Silar Enterprises LLC",
  email: "Silarenterprisesllc@gmail.com",
  phone: "(123) 456-7890",
  location: "York, Pennsylvania",
  socialMedia: {
    facebook: "https://www.facebook.com/share/p/15T6sHRgsf/",
    instagram: "#",
    linkedin: "#"
  },
  hours: {
    weekdays: "Monday - Friday: 9am - 6pm",
    weekends: "Weekends: By appointment"
  }
};

export const homepageData = {
  benefits: [
    {
      title: "Fast Closing",
      description: "Close in as little as 7 days or on your timeframe. No waiting for buyer financing or inspections."
    },
    {
      title: "No Repairs Needed",
      description: "Sell your house as-is. We handle all repairs, renovations, and cleaning. You take what you want and leave the rest."
    },
    {
      title: "No Fees or Commissions",
      description: "Zero real estate agent commissions, closing costs, or hidden fees. The offer you accept is the amount you receive."
    }
  ],
  
  process: [
    {
      title: "Contact Us",
      description: "Fill out our simple form or give us a call. We'll ask a few basic questions about your property to prepare our offer."
    },
    {
      title: "Receive Your Offer",
      description: "We'll present you with a fair, no-obligation cash offer within 24 hours. No pressure, take your time to decide."
    },
    {
      title: "Close On Your Timeline",
      description: "Accept the offer and close when it works for you. Get cash in your hand in as little as 7 days."
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "Oakland Ave Kitchen Renovation",
      description: "Complete kitchen transformation with new cabinets, countertops, and appliances.",
      location: "York, PA",
      timeframe: "3 weeks turnaround",
      before: imageUrls.project1.before,
      after: imageUrls.project1.after
    },
    {
      id: 2,
      title: "Spring Garden Full Home Rehab",
      description: "Complete interior renovation including new flooring, paint, and modernized layout.",
      location: "York, PA",
      timeframe: "4 weeks turnaround",
      before: imageUrls.project2.before,
      after: imageUrls.project2.after
    },
    {
      id: 3,
      title: "Market Street Bathroom Remodel",
      description: "Luxury bathroom renovation with custom tile work and modern fixtures.",
      location: "York, PA",
      timeframe: "2 weeks turnaround",
      before: imageUrls.project3.before,
      after: imageUrls.project3.after
    }
  ],
  
  testimonials: [
    {
      id: 1,
      text: "I needed to sell my house quickly after getting a job offer in another state. Silar Enterprises made me a fair offer, and we closed in just 9 days. The process couldn't have been easier!",
      author: "Michael S.",
      location: "West York, PA",
      rating: 5
    },
    {
      id: 2,
      text: "My inherited property needed a lot of work that I couldn't afford. Silar Enterprises bought it as-is with no questions asked. They were honest, transparent, and made the process simple.",
      author: "Jennifer T.",
      location: "East York, PA",
      rating: 5
    },
    {
      id: 3,
      text: "After trying to sell with a realtor for 6 months, I reached out to Silar Enterprises. They offered a fair price, worked around my schedule, and I didn't have to pay any commissions or fees. I highly recommend them!",
      author: "David R.",
      location: "North York, PA",
      rating: 5
    }
  ],
  
  faqs: [
    {
      id: "faq-1",
      question: "How quickly can you close on my house?",
      answer: "We can close in as little as 7 days, or on your timeline. Since we buy with cash, there's no waiting for bank financing, inspections, or appraisals. You decide when you want to close based on your needs."
    },
    {
      id: "faq-2",
      question: "Do I need to make repairs before selling?",
      answer: "No, you don't need to make any repairs. We buy houses in any condition, and we'll handle all repairs, cleaning, and renovations after purchase. You can leave the property exactly as it is."
    },
    {
      id: "faq-3",
      question: "Are there any fees or commissions?",
      answer: "None whatsoever. Unlike selling with a real estate agent (which typically costs 5-6% in commissions), we charge no fees or commissions. The price we offer is the amount you receive at closing."
    },
    {
      id: "faq-4",
      question: "How is the offer amount determined?",
      answer: "We consider the location, condition, and current market value of your property, then subtract the estimated cost of repairs and renovations needed. Our goal is to provide a fair offer that works for both parties while allowing us to renovate and resell the property."
    }
  ],
  
  serviceAreas: [
    "York, PA",
    "West York, PA",
    "East York, PA",
    "North York, PA",
    "All York County"
  ]
};
