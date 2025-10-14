import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ChevronLeft, Trophy, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

export default function RegisterGC() {
  const contacts = [
    { name: "Joey", phone: "7406165866" },
    { name: "R K Aditya", phone: "+918919419327" }
  ];

  const getWhatsAppLink = (phone: string, name: string) => {
    const number = phone.replace(/[^0-9]/g, "");
    const message = `Hello ${name}, I'd like to register for the General Championship at Rythm 2025.\n\nName: [Your Name]\nInstitute: [Your College]\nCourse/Year: [Your Year]\nEvents Participating: [List events]`;
    return `https://wa.me/91${number.replace(/^91/,"")}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO 
        title="Register for General Championship — Rythm 2025" 
        description="Register for the General Championship at Rythm 2025 and compete across multiple events"
        path="/register-gc"
      />

      <div className="min-h-screen bg-background paper-texture">
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center space-y-4"
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-accent text-sm font-medium mb-4">
                <Trophy size={16} />
                <span>General Championship</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                General Championship Registration
              </h1>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Compete across multiple events and win the prestigious General Championship title
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Actions removed from sticky header to avoid repetition; contacts are shown below */}

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Replaced GC details with contact list per request */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="sr-only">Contact Coordinators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contacts.map((c) => (
                  <Card key={c.phone} className="flex flex-col justify-between">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-serif text-xl font-semibold">{c.name}</div>
                          <div className="text-sm text-muted-foreground mt-1">{c.phone}</div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <a href={getWhatsAppLink(c.phone, c.name)} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="mr-2" size={14} />
                              WhatsApp
                            </a>
                          </Button>
                          <Button asChild size="sm" variant="outline">
                            <a href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}>
                              <Phone className="mr-2" size={14} />
                              Call
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center pt-8"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href={getWhatsAppLink(contacts[0].phone, contacts[0].name)} target="_blank" rel="noopener noreferrer">
                  Register Your College for GC
                </a>
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
