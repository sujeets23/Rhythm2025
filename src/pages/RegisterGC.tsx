import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ChevronLeft, Trophy, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

export default function RegisterGC() {
  const coordinator = {
    name: "Surbhi S",
    phone: "8971641807"
  };

  const getWhatsAppLink = () => {
    const message = `Hello ${coordinator.name}, I'd like to register for General Championship at Rythm 2025.

Name: [Your Name]
Institute: [Your College]
Course/Year: [Your Year]
Events Participating: [List events]
Questions: [If any]`;
    
    return `https://wa.me/91${coordinator.phone}?text=${encodeURIComponent(message)}`;
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

        {/* Contact Actions */}
        <div className="bg-card border-b border-border sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp {coordinator.name}
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
              >
                <a href={`tel:+91${coordinator.phone}`}>
                  <Phone className="mr-2" size={18} />
                  Call {coordinator.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Trophy className="text-accent" />
                    Overview
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The General Championship (GC) is the ultimate accolade at Rythm 2025. Colleges compete across all events, and points are awarded based on rankings in each competition. The institution with the highest cumulative score wins the General Championship trophy.
                    </p>
                    <p>
                      This is more than individual glory — it's about your college's collective excellence across dance, music, debate, arts, sports, and cultural events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Format */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Award className="text-accent" />
                    Format
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Point System</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 1st Place in any event: <strong>10 points</strong></li>
                        <li>• 2nd Place in any event: <strong>7 points</strong></li>
                        <li>• 3rd Place in any event: <strong>5 points</strong></li>
                        <li>• Participation (no podium finish): <strong>2 points</strong></li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground">
                      Points from all 11 events are tallied. The college with the highest total wins the General Championship.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Users className="text-accent" />
                    Eligibility
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Open to all recognized PUC/Pre-University colleges in Karnataka</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Students must be currently enrolled (valid ID card required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>A single college can participate in all 11 events</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Each student can participate in maximum 3 events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Calendar className="text-accent" />
                    Rules
                  </h2>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>Colleges must register for GC at least 7 days before the event</li>
                    <li>Minimum 5 events participation required to qualify for GC</li>
                    <li>All participants must carry valid college ID cards</li>
                    <li>Each event has individual registration deadlines — check event pages</li>
                    <li>Points are non-transferable between colleges</li>
                    <li>Jury decisions on event rankings are final</li>
                    <li>Tie-breaker: College with more 1st place finishes wins</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Judging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                    Judging
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The GC winner is determined purely by cumulative points. Each event has its own expert jury panel that awards placements (1st, 2nd, 3rd), which translate to GC points.
                    </p>
                    <p className="font-semibold text-foreground">
                      Transparency: Live scoreboard will be displayed throughout the festival showing GC standings after each event conclusion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-accent/50">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                    Important Notes
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">→</span>
                      <span><strong>Registration Deadline:</strong> October 28, 2025 at 11:59 PM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">→</span>
                      <span><strong>GC Trophy:</strong> A grand trophy will be awarded at the closing ceremony</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">→</span>
                      <span><strong>Certificates:</strong> All GC participating colleges receive participation certificates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">→</span>
                      <span><strong>Contact:</strong> For GC queries, reach out to {coordinator.name} at {coordinator.phone}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">→</span>
                      <span><strong>Team Spirit:</strong> GC is about collective excellence — support all your college participants!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
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
