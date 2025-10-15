import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  subtitle: string;
  category: string;
  teamSize?: string;
  image: string;
  slug: string;
  delay?: number;
}

export const EventCard = ({ title, subtitle, category, teamSize, image, slug, delay = 0 }: EventCardProps) => {
  // Import images dynamically
  const getImage = () => {
    try {
      // Prefer new EVENT logos directory
      return new URL(`../assets/EVENT logos/${image}.png`, import.meta.url).href;
    } catch {
      try {
        // Fallback to legacy events directory
        return new URL(`../assets/events/${image}.png`, import.meta.url).href;
      } catch {
        return "";
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 bg-card paper-texture border-2 border-accent/20">
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square">
            <img
              src={getImage()}
              alt={`${title} badge with decorative mandala border`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>

            {/* Category Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                {category === "Solo" ? <User size={12} /> : <Users size={12} />}
                {category}
              </span>
              {teamSize && (
                <span className="text-xs text-muted-foreground">{teamSize}</span>
              )}
            </div>

            {/* CTA */}
            <Button 
              asChild 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Link to={`/events/${slug}`}>
                View Details
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
