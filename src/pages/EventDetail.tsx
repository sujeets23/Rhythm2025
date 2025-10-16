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
      // Use EVENT logos directory
      return new URL(`../assets/EVENT logos/${event.image}.png`, import.meta.url).href;
    } catch {
      try {
        // Fallback to legacy events directory
        return new URL(`../assets/events/${event.image}.png`, import.meta.url).href;
      } catch {
        return "";
      }
    }
  };

  // EventDetail now displays only core fields: title, subtitle, category, teamSize, timeLimit (if present), coordinators, technicalRequirements, and CTA.

  return (
    <>
      <SEO 
        title={`${event.title} — Rhythm 2025`} 
        description={event.subtitle}
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
                    {event.categories ? (
                      <div className="flex flex-col gap-3">
                        {event.categories.map((cat, idx) => (
                          <Button key={idx} asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            <a href={cat.formUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2" size={18} />
                              Register — {cat.label} {cat.teamSize ? `(${cat.teamSize})` : ""}
                            </a>
                          </Button>
                        ))}
                      </div>
                    ) : (
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
                    )}

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

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">About</h2>
              <p className="text-lg text-foreground leading-relaxed">{event.subtitle}</p>
            </div>

            {/* Basic details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Category</div>
                <div className="font-medium">{event.category}</div>
              </div>
              {event.teamSize && (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Team Size</div>
                  <div className="font-medium">{event.teamSize}</div>
                </div>
              )}
            </div>

            {event.technicalRequirements && (
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Technical Requirements</h3>
                <ul className="space-y-2">
                  {event.technicalRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">▸</span>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.rules && (
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">Rules & Regulations</h3>
                <div className="prose prose-gray max-w-none">
                  <div 
                    className="text-foreground leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ 
                      __html: event.rules
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-primary mt-6 mb-3">$1</h3>')
                        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-primary mt-8 mb-4">$1</h2>')
                        .replace(/^\- (.*$)/gim, '<li class="flex items-start gap-2 mb-2"><span class="text-accent mt-1">•</span><span>$1</span></li>')
                        .replace(/\n\n/g, '</p><p class="mb-4">')
                        .replace(/^(?!<[h|l])(.*$)/gim, '<p class="mb-2">$1</p>')
                    }}
                  />
                </div>
              </div>
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
