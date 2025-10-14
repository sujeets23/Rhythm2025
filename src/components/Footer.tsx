import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import rhythmLogo from "@/assets/rhythm-logo.png";

export const Footer = () => {
  const eventCategories = [
    { name: "Dance", path: "/events/nritya-kala" },
    { name: "Music", path: "/events/sur-tattva" },
    { name: "Debate", path: "/events/vakya-yuddha" },
    { name: "Arts", path: "/events/kala-pradarshan" },
    { name: "Photography", path: "/events/chitraloka" },
    { name: "Fashion", path: "/events/rupotsavah" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground paper-texture">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={rhythmLogo} 
              alt="Rhythm 2k25 logo" 
              className="h-16 w-auto"
            />
            <p className="text-sm opacity-90">
              Karma • Dharma — action with purpose, tradition with a modern pulse.
            </p>
            <div className="text-sm opacity-90 space-y-1">
              <p className="font-semibold text-accent">KLE Society's College of BCA</p>
              <p>R.L. Science Institute (Autonomous)</p>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>College Road, Belagavi, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-sm hover:text-accent transition-colors">Events</Link></li>
              <li><Link to="/schedule" className="text-sm hover:text-accent transition-colors">Schedule</Link></li>
              <li><Link to="/register" className="text-sm hover:text-accent transition-colors">Register</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Events</h3>
            <ul className="space-y-2">
              {eventCategories.map((event) => (
                <li key={event.path}>
                  <Link 
                    to={event.path} 
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact & Venue</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>R.L. Science Institute (BCA Department)</li>
              <li>College Road, Belagavi, Karnataka</li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Visit Contact Page</a></li>
            </ul>
          </div>
        </div>

        <div className="gold-hairline my-8" />

        <div className="text-center text-sm opacity-90">
          <p>© 2025 Rythm Festival. All rights reserved.</p>
          <p className="mt-2">
            Designed with love by <span className="text-accent font-medium">The Media Tribe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
