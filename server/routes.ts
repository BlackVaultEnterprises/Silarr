import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { handleSubmitLead } from './api/leads';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/leads', handleSubmitLead);
  
  // For debugging/testing
  app.get('/api/leads', async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.status(200).json(leads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      res.status(500).json({ error: 'An error occurred while fetching leads' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
