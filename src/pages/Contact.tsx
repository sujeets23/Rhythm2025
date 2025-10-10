import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  institute: string;
  message: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // In production, this would send to backend
    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <SEO 
        title="Contact — Rythm 2025" 
        description="Get in touch with Team Rythm 2025. Located at RLS BCA Campus, Belgaum"
        path="/contact"
      />

      <div className="min-h-screen bg-background paper-texture">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have questions? We're here to help. Reach out and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have questions about registration, events, or need support, 
                  our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Helpdesk</h3>
                      <a 
                        href="tel:+919876511111" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91-98765-11111
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:hello@rythmfest.in" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@rythmfest.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a 
                        href={`https://wa.me/919876511111?text=${encodeURIComponent("Hello! I have a question about Rythm 2025.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Venue</h3>
                      <p className="text-muted-foreground">
                        RLS BCA Campus<br />
                        Belgaum, Karnataka
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden border-2 border-accent/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.8!2d74.5!3d15.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUxJzAwLjAiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RLS BCA Campus, Belgaum"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-primary">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { 
                            required: "Name is required",
                            maxLength: { value: 100, message: "Name must be less than 100 characters" }
                          })}
                          placeholder="Your full name"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          placeholder="your.email@example.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone", { 
                            required: "Phone is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Please enter a valid 10-digit phone number"
                            }
                          })}
                          placeholder="10-digit mobile number"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="institute">Institute *</Label>
                        <Input
                          id="institute"
                          {...register("institute", { 
                            required: "Institute name is required",
                            maxLength: { value: 150, message: "Institute name must be less than 150 characters" }
                          })}
                          placeholder="Your college/institution"
                          className={errors.institute ? "border-destructive" : ""}
                        />
                        {errors.institute && (
                          <p className="text-sm text-destructive mt-1">{errors.institute.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          {...register("message", { 
                            required: "Message is required",
                            maxLength: { value: 1000, message: "Message must be less than 1000 characters" }
                          })}
                          placeholder="How can we help you?"
                          rows={5}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
