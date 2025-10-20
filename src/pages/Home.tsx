import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Trophy, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { EventCard } from "@/components/EventCard";
import { eventsData } from "@/lib/eventsData";
import heroBg from "@/assets/hero-dharma-bg.png";
import heroVideo from "@/assets/Rhythm logo reveal anima.mp4";

export default function Home() {
  const floatingParticles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      <SEO 
        title="Rhythm 2025 — Karma • Dharma" 
        description="Inter PUC Fest at R.L. Science Institute (BCA), Belagavi • Nov 4-5, 2025 • Celebrating talent, tradition & purpose since 1999"
        path="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background video with fallback poster */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={heroVideo}
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Floating particles */}
        {floatingParticles.map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 max-w-4xl mx-auto"
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40"
            >
              <span className="text-white font-serif text-lg md:text-xl">॥</span>
              <span className="mx-3 text-white text-sm md:text-base tracking-widest font-bold">NOVEMBER 4-5, 2025</span>
              <span className="text-white font-serif text-lg md:text-xl">॥</span>
            </motion.div>
            
            <p className="font-serif text-2xl md:text-3xl text-white drop-shadow-lg">
              Kurukshetra
            </p>

            <p className="text-lg md:text-xl text-background/90 max-w-2xl mx-auto">
              Inter PUC Fest celebrating talent, tradition, and purpose
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow font-semibold"
              >
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-background hover:bg-background/90 text-primary border-2 border-background font-semibold"
              >
                <Link to="/register-gc">Register for GC</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-background hover:bg-background/90 text-primary border-2 border-background font-semibold"
              >
                <Link to="/schedule">See Schedule</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-background rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 text-center"
          >
            <div>
              <div className="text-4xl font-serif font-bold text-accent">2</div>
              <div className="text-sm uppercase tracking-wider">Days</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-accent/30" />
            <div>
              <div className="text-4xl font-serif font-bold text-accent">14</div>
              <div className="text-sm uppercase tracking-wider">Events</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Theme Block */}
      <section className="py-20 bg-background paper-texture">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="rangoli-divider mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Karma • Dharma
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Karma is action; Dharma is the compass. At Rhythm 2025, every step, beat, stroke, and word 
              aligns passion with purpose. Join us in celebrating the harmony of tradition and modernity.
            </p>
            <div className="rangoli-divider mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Featured Events Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore 14 thrilling competitions across dance, music, arts, debate, and more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventsData.map((event, index) => (
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/events">View All Events</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Attend section removed per request */}

      {/* Logistics Callout */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold">Event Details</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-2">
                  <Calendar className="w-8 h-8 text-accent mx-auto" />
                  <h3 className="font-serif text-xl font-semibold">Dates</h3>
                  <p className="text-sm opacity-90">November 4-5, 2025</p>
                </div>
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-accent mx-auto" />
                  <h3 className="font-serif text-xl font-semibold">Venue</h3>
                  <p className="text-sm opacity-90">R.L. Science Institute (BCA)<br />College Road, Belagavi</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center pt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/events">View Events</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
