import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import arpiecaLogo from "@assets/240871454_588027879041722_576747084793897900_n (1)_1754632817174.png";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  emailAddress: z.string().email("Please enter a valid email address"),
  mobilePhone: z.string().optional(),
  contactReason: z.string().min(1, "Please select a contact reason"),
  message: z.string().min(10, "Message must be at least 10 characters").max(200, "Message must be less than 200 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      mobilePhone: "",
      contactReason: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll respond within 3-5 business days.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const remainingChars = 200 - (form.watch("message")?.length || 0);

  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary-green hover:text-green-700 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.contact.backToHome}
          </Link>
          
          {/* Prominent Logo Section */}
          <div className="text-center mb-12">
            <img 
              src={arpiecaLogo} 
              alt="ARPIECA Official Logo" 
              className="h-40 w-40 mx-auto object-contain mb-6"
            />
            <h2 className="text-xl font-semibold text-primary-green mb-4">Association pour la Renaissance du Patrimoine Islamique et de l'Expansion de la Culture Arabe</h2>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-accent-red mb-6 text-center">{t.contact.title}</h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        FIRST NAME<span className="text-accent-red">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="border-gray-300 focus:border-primary-green focus:ring-primary-green"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        LAST NAME<span className="text-accent-red">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="border-gray-300 focus:border-primary-green focus:ring-primary-green"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        EMAIL ADDRESS<span className="text-accent-red">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="border-gray-300 focus:border-primary-green focus:ring-primary-green"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mobile Phone */}
                <FormField
                  control={form.control}
                  name="mobilePhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        MOBILE PHONE (OPTIONAL)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          className="border-gray-300 focus:border-primary-green focus:ring-primary-green"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contact Reason */}
                <FormField
                  control={form.control}
                  name="contactReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        CONTACT REASON<span className="text-accent-red">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-primary-green focus:ring-primary-green">
                            <SelectValue placeholder="Choose an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                          <SelectItem value="donation-support">Donation Support</SelectItem>
                          <SelectItem value="volunteer-opportunities">Volunteer Opportunities</SelectItem>
                          <SelectItem value="partnership-inquiry">Partnership Inquiry</SelectItem>
                          <SelectItem value="project-information">Project Information</SelectItem>
                          <SelectItem value="media-press">Media & Press</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        MESSAGE<span className="text-accent-red">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          maxLength={200}
                          className="border-gray-300 focus:border-primary-green focus:ring-primary-green resize-none"
                        />
                      </FormControl>
                      <div className="text-sm text-gray-500 mt-1">
                        {remainingChars} characters max ({remainingChars} remaining)
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary-green text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>

                {/* Footer Note */}
                <div className="pt-4 text-sm text-gray-600 italic">
                  Once you submit your message, a member of our email team will respond within 3-5 business days, typically sooner.
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}