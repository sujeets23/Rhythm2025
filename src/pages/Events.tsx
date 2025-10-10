import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { EventCard } from "@/components/EventCard";
import { eventsData } from "@/lib/eventsData";
import { Button } from "@/components/ui/button";

export default function Events() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [dayFilter, setDayFilter] = useState<string>("all");

  const filteredEvents = eventsData.filter((event) => {
    const typeMatch = typeFilter === "all" || event.category.includes(typeFilter);
    // For simplicity, we're not tracking days in data, so day filter is cosmetic
    const dayMatch = dayFilter === "all";
    return typeMatch && dayMatch;
  });

  return (
    <>
      <SEO 
        title="Events — Rythm 2025" 
        description="Explore 11 exciting competitions at Rythm 2025 including dance, music, debate, arts, fashion, and more"
        path="/events"
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
                Events
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover competitions spanning dance, music, arts, debate, fashion, gaming, and more. 
                Choose your arena and let your talent shine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-medium">Type:</span>
                {["all", "Solo", "Team", "Solo/Team"].map((type) => (
                  <Button
                    key={type}
                    size="sm"
                    variant={typeFilter === type ? "default" : "outline"}
                    onClick={() => setTypeFilter(type)}
                    className={typeFilter === type ? "bg-primary" : ""}
                  >
                    {type === "all" ? "All" : type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No events match your filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    subtitle={event.subtitle}
                    category={event.category}
                    teamSize={event.teamSize}
                    image={event.image}
                    slug={event.slug}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
