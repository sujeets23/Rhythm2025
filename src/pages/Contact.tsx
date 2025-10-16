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
// Resolve logo image URLs from assets (handles spaces in filenames reliably)
const kleLogoSrc = new URL("../assets/kle logo.PNG", import.meta.url).href;
const clgLogoSrc = new URL("../assets/clg logo.png", import.meta.url).href;

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
        title="Contact — Rhythm 2025" 
        description="Get in touch with Team Rhythm 2025. Located at R.L. Science Institute (BCA), Belagavi"
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

              {/* Contact & Venue Callout */}
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-accent">Contact & Venue</h3>
                  <div className="text-sm md:text-base">
                    <p className="text-primary font-semibold">R.L. Science Institute (BCA Department)</p>
                    <p className="text-muted-foreground">College Road, Belagavi, Karnataka</p>
                  </div>
                  <div className="pt-2">
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href="#map">View on Map</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Primary contact info is surfaced in the Reach our team section at the right. */}
                <p className="text-muted-foreground">For quick assistance, use the contacts on the right or the venue map below.</p>
              </div>

              {/* Embedded Map */}
              <div id="map" className="rounded-lg overflow-hidden border-2 border-accent/40 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.834358832274!2d74.5069079!3d15.865300800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66af3b639213%3A0xef0ad5fed0ce676c!2sKLE&#39;S%20College%20of%20BCA%2C%20RLSI!5e0!3m2!1sen!2sin!4v1760425642871!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KLE's College of BCA, RLSI"
                />
              </div>
            </motion.div>

            {/* Instead of a message form, show highlighted contacts for quick help */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-primary">Reach our team</h2>
                <p className="text-muted-foreground">For registration help and event queries, contact the following coordinators directly on WhatsApp or by phone.</p>

                <div className="grid grid-cols-1 gap-4">
                  {/* Joey */}
                  <Card className="border-2 border-accent/20 hover:border-accent/40">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Joey — Registration Coordinator</h4>
                        <p className="text-sm text-muted-foreground">Available for event & registration queries</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <a
                          className="inline-flex items-center px-3 py-1.5 rounded-md bg-green-600 text-white text-sm"
                          href={`https://wa.me/917406165866?text=${encodeURIComponent("Hello Joey, I need help regarding Rhythm 2025.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                        <a className="text-sm text-primary hover:underline" href="tel:+917406165866">Call +91 74061 65866</a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* R K Aditya */}
                  <Card className="border-2 border-accent/20 hover:border-accent/40">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">R K Aditya — Event Head</h4>
                        <p className="text-sm text-muted-foreground">Coordinator for overall event logistics</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <a
                          className="inline-flex items-center px-3 py-1.5 rounded-md bg-green-600 text-white text-sm"
                          href={`https://wa.me/918919419327?text=${encodeURIComponent("Hello Aditya, I need help regarding Rhythm 2025.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                        <a className="text-sm text-primary hover:underline" href="tel:+918919419327">Call +91 89194 19327</a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
