import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

interface ScheduleItem {
  time: string;
  title: string;
  venue: string;
}

export default function Schedule() {
  const day1: ScheduleItem[] = [
    { time: "09:30 AM", title: "Inauguration & Aarti", venue: "Main Stage" },
    { time: "10:15 AM", title: "Debate Prelims", venue: "Seminar Hall" },
    { time: "10:30 AM", title: "Arts Check-in", venue: "Art Lawn" },
    { time: "11:00 AM", title: "Music Solo/Duet Heats", venue: "Stage B" },
    { time: "01:30 PM", title: "Street Play Heats", venue: "Quadrangle" },
    { time: "03:30 PM", title: "Gaming Qualifiers", venue: "E-Arena" },
    { time: "05:00 PM", title: "Photography Brief Release", venue: "Gallery" },
    { time: "06:30 PM", title: "Classical/Folk Dance", venue: "Main Stage" },
  ];

  const day2: ScheduleItem[] = [
    { time: "09:30 AM", title: "Treasure Hunt Flag-off", venue: "Campus-wide" },
    { time: "10:00 AM", title: "Music Bands Finals", venue: "Main Stage" },
    { time: "12:30 PM", title: "Debate Finals", venue: "Seminar Hall" },
    { time: "02:00 PM", title: "Special Round Reveal", venue: "Main Stage" },
    { time: "04:00 PM", title: "Fashion Show", venue: "Runway Pavilion" },
    { time: "06:00 PM", title: "Mr & Miss Rythm", venue: "Main Stage" },
    { time: "08:00 PM", title: "Awards & Closing Aarti", venue: "Main Stage" },
  ];

  const TimelineItem = ({ item, index }: { item: ScheduleItem; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
          <Clock size={20} className="text-accent-foreground" />
        </div>
        {index < day1.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-accent to-accent/20 min-h-[3rem]" />
        )}
      </div>
      
      <Card className="flex-1 mb-6 border-l-4 border-l-accent hover:shadow-gold transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-between items-start mb-2">
            <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
            <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
              {item.time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">{item.venue}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Schedule — Rythm 2025" 
        description="Two-day festival schedule for Rythm 2025 featuring dance, music, debate, arts, fashion, and more at Sanskriti Auditorium"
        path="/schedule"
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
                Event Schedule
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Two days of non-stop cultural celebration, competition, and connection
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>Sanskriti Auditorium & Grounds, Aryavarta College, Jaipur</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Day 1 */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-block">
                  <h2 className="font-serif text-4xl font-bold text-primary mb-2">
                    Day 1
                  </h2>
                  <p className="text-muted-foreground">Tuesday, November 4, 2025</p>
                </div>
                <div className="rangoli-divider mt-4" />
              </motion.div>

              <div className="space-y-0">
                {day1.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </section>

            {/* Day 2 */}
            <section>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-block">
                  <h2 className="font-serif text-4xl font-bold text-primary mb-2">
                    Day 2
                  </h2>
                  <p className="text-muted-foreground">Wednesday, November 5, 2025</p>
                </div>
                <div className="rangoli-divider mt-4" />
              </motion.div>

              <div className="space-y-0">
                {day2.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </section>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Card className="bg-accent/5 border-2 border-accent/30">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Event timings are approximate and subject to change. 
                    Participants will be notified of any adjustments. Please arrive 30 minutes before your scheduled event.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
