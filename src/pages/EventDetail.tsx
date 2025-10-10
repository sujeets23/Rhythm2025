import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle, ExternalLink, Users, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getEventBySlug, getWhatsAppMessage } from "@/lib/eventsData";

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = getEventBySlug(slug || "");

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Event Not Found</h1>
          <Link to="/events" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const getImage = () => {
    try {
      return new URL(`../assets/events/${event.image}.png`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "format", label: "Format" },
    { id: "eligibility", label: "Eligibility" },
    { id: "rules", label: "Rules" },
    { id: "judging", label: "Judging" },
    { id: "notes", label: "Important Notes" },
  ];

  return (
    <>
      <SEO 
        title={`${event.title} — Rythm 2025`}
        description={`${event.overview.substring(0, 150)}...`}
        path={`/events/${event.slug}`}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/events" className="text-primary hover:underline">Events</Link>
              <ChevronRight size={16} className="text-muted-foreground" />
              <span className="text-foreground">{event.title}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={getImage()} 
                  alt={`${event.title} decorative badge`}
                  className="w-full max-w-md mx-auto rounded-lg shadow-elegant"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                    {event.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">{event.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                    {event.category}
                  </span>
                  {event.teamSize && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium border border-secondary/20">
                      <Users size={16} />
                      {event.teamSize}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground font-medium">
                    <Clock size={16} />
                    {event.timeLimit}
                  </span>
                </div>

                {/* CTA Actions */}
                <Card className="bg-card/50 border-2 border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-serif text-lg font-semibold">Ready to participate?</h3>
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={event.formUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={18} />
                        Register for {event.title}
                      </a>
                    </Button>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3">Event Coordinators:</p>
                      <div className="space-y-2">
                        {event.coordinators.map((coordinator) => (
                          <div key={coordinator.phone} className="flex items-center justify-between">
                            <span className="font-medium">{coordinator.name}</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" asChild>
                                <a href={`tel:${coordinator.phone}`}>
                                  <Phone size={16} className="mr-1" />
                                  Call
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <a 
                                  href={`https://wa.me/${coordinator.phone.replace(/[^0-9]/g, '')}?text=${getWhatsAppMessage(event.title, coordinator.name)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <MessageCircle size={16} className="mr-1" />
                                  WhatsApp
                                </a>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* In-page Navigation */}
        <div className="sticky top-16 z-40 bg-card border-y border-border shadow-sm">
          <div className="container mx-auto px-4">
            <nav className="flex gap-6 overflow-x-auto py-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary whitespace-nowrap transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Overview</h2>
              <p className="text-lg text-foreground leading-relaxed">{event.overview}</p>
            </section>

            {/* Categories/Format */}
            {event.categories && (
              <section id="format" className="scroll-mt-32">
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">Categories & Format</h2>
                <ul className="space-y-2">
                  {event.categories.map((cat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-foreground">{cat}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Eligibility */}
            <section id="eligibility" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Eligibility</h2>
              <ul className="space-y-2">
                {event.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Rules & Requirements */}
            <section id="rules" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Rules & Requirements</h2>
              <ul className="space-y-3">
                {event.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-foreground pt-0.5">{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Judging Criteria */}
            <section id="judging" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Judging Criteria</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {event.judging.map((criterion, i) => (
                  <Card key={i} className="border-2 border-accent/20">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{criterion.criterion}</h4>
                        <span className="text-accent font-bold text-lg">{criterion.weight}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Important Notes */}
            <section id="notes" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Important Notes</h2>
              <Card className="bg-accent/5 border-2 border-accent/30">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {event.importantNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-1">⚠</span>
                        <span className="text-foreground">{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Technical Requirements (if any) */}
            {event.technicalRequirements && (
              <section className="scroll-mt-32">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Technical Requirements</h3>
                <ul className="space-y-2">
                  {event.technicalRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">▸</span>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Bottom CTA */}
            <div className="text-center pt-8 border-t border-border">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={event.formUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={18} />
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
