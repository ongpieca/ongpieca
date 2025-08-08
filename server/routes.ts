import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint with n8n webhook forwarding
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, emailAddress, mobilePhone, contactReason, message } = req.body;
      
      // Log the contact form submission
      console.log('Contact form submission:', { firstName, lastName, emailAddress, mobilePhone, contactReason, message });
      
      // Try to forward to n8n webhook
      try {
        const webhookResponse = await fetch('https://ongpieca.app.n8n.cloud/webhook-test/78d78c5b-140e-4b6e-8dbe-23de25138af9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName, lastName, emailAddress, mobilePhone, contactReason, message }),
        });
        
        if (webhookResponse.ok) {
          console.log('Successfully forwarded to n8n webhook');
        } else {
          console.log('n8n webhook failed:', webhookResponse.status, await webhookResponse.text());
        }
      } catch (webhookError) {
        console.log('n8n webhook error:', webhookError);
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. We will get back to you soon!" 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  // Donation endpoint
  app.post("/api/donate", async (req, res) => {
    try {
      const { 
        amount, 
        currency, 
        donationType, 
        dedication, 
        dedicationName, 
        designation,
        comment 
      } = req.body;
      
      // Here you would integrate with a payment processor like Stripe, PayPal, etc.
      // For now, we'll just log the donation attempt
      console.log('Donation submission:', { 
        amount, 
        currency, 
        donationType, 
        dedication, 
        dedicationName, 
        designation,
        comment 
      });
      
      res.json({ 
        success: true, 
        message: "Thank you for your generous donation! You will be redirected to complete the payment." 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to process donation. Please try again later." 
      });
    }
  });

  // Newsletter signup endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      // Here you would typically add the email to your newsletter service
      console.log('Newsletter signup:', email);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to our newsletter!" 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to subscribe. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
