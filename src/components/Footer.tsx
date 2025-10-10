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
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <span>Sanskriti Auditorium, Jaipur</span>
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
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <a href="tel:+919876511111" className="hover:text-accent transition-colors">
                  +91-98765-11111
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <a href="mailto:hello@rythmfest.in" className="hover:text-accent transition-colors">
                  hello@rythmfest.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <a 
                  href={`https://wa.me/919876511111?text=${encodeURIComponent("Hello! I have a question about Rythm 2025.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp Helpdesk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-hairline my-8" />

        <div className="text-center text-sm opacity-90">
          <p>© 2025 Rythm Festival. All rights reserved.</p>
          <p className="mt-2">
            Designed with love by <span className="text-accent font-medium">Nextverse</span> and{" "}
            <span className="text-accent font-medium">Dotlabs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
