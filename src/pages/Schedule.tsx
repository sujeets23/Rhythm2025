import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

interface ScheduleItem {
  no: number;
  event: string;
  location: string;
}

export default function Schedule() {
  const day1: ScheduleItem[] = [
    { no: 1, event: "Music", location: "JNMC Auditorium" },
    { no: 2, event: "Dance", location: "JNMC Auditorium" },
    { no: 3, event: "Photography", location: "College" },
    { no: 4, event: "Mr & Miss", location: "College" },
    { no: 5, event: "Arts", location: "College" },
    { no: 6, event: "Quiz", location: "College" },
    { no: 7, event: "Debate", location: "College" },
    { no: 8, event: "Gaming", location: "College" },
    { no: 9, event: "Surprise Event", location: "College" },
    { no: 10, event: "Treasure Hunt", location: "College" },
  ];

  const day2: ScheduleItem[] = [
    { no: 1, event: "Fashion Show", location: "JNMC Auditorium" },
    { no: 2, event: "Mr & Miss (Final)", location: "JNMC Auditorium" },
    { no: 3, event: "Street Play", location: "JNMC Auditorium" },
    { no: 4, event: "Gaming", location: "College" },
    { no: 5, event: "Photography", location: "College" },
    { no: 6, event: "Surprise Event", location: "College" },
    { no: 7, event: "Treasure Hunt", location: "College" },
  ];

  const TimelineItem = ({ item, index }: { item: ScheduleItem; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className=""
    >
      <Card className="mb-4">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold">
              {item.no}
            </div>
            <div>
              <div className="font-serif text-lg font-semibold text-primary">{item.event}</div>
              <div className="text-sm text-muted-foreground">{item.location}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Schedule — Rhythm 2025" 
        description="Two-day festival schedule at R.L. Science Institute (BCA), Belagavi • Dance, music, debate, arts & more"
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
                  <span>R.L. Science Institute (BCA), College Road, Belagavi</span>
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
