import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { eventsData } from "@/lib/eventsData";
import { toast } from "sonner";

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  institute: string;
  course: string;
  year: string;
  eventName: string;
  category: string;
  teamDetails: string;
  technicalNeeds?: string;
  consent: boolean;
}

export default function Register() {
  useEffect(() => {
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSe4ecP2WI2Y7gRGi9e5_pK4LUkpIBPnDGrCRHW--a4gTelEzA/viewform?usp=header";
    // Open in same tab for clear redirect; keeps GC page separate
    window.location.replace(url);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<RegisterFormData>();

  const selectedEvent = watch("eventName");

  const onSubmit = (data: RegisterFormData) => {
    if (!data.consent) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    // In production, this would send to backend and generate PDF
    console.log("Registration submitted:", data);
    setIsSubmitted(true);
    toast.success("Registration successful! Check your email for confirmation.");
    
    // Reset after 10 seconds
    setTimeout(() => setIsSubmitted(false), 10000);
  };

  return (
    <>
      <SEO 
        title="Register — Rhythm 2025" 
        description="Register for Rhythm 2025 inter PUC fest. Compete in dance, music, arts, debate, and more"
        path="/register"
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
                Register for Rhythm 2025
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join us in this celebration of talent, tradition, and purpose. Fill out the form below to secure your spot.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-primary">
                      Registration Successful!
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Thank you for registering for Rhythm 2025. 
                      You'll receive a confirmation email with your registration details and a PDF acknowledgement shortly.
                    </p>
                    <div className="pt-6">
                      <Button onClick={() => setIsSubmitted(false)} className="bg-primary">
                        Register Another Participant
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            {...register("name", { 
                              required: "Name is required",
                              maxLength: { value: 100, message: "Name too long" }
                            })}
                            placeholder="Enter your full name"
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email", { 
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email"
                              }
                            })}
                            placeholder="your.email@example.com"
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone", { 
                              required: "Phone is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter valid 10-digit number"
                              }
                            })}
                            placeholder="10-digit mobile"
                            className={errors.phone ? "border-destructive" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* College Information */}
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                        College Information
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <Label htmlFor="institute">Institute *</Label>
                          <Input
                            id="institute"
                            {...register("institute", { 
                              required: "Institute is required",
                              maxLength: { value: 150, message: "Name too long" }
                            })}
                            placeholder="Your college/institution"
                            className={errors.institute ? "border-destructive" : ""}
                          />
                          {errors.institute && (
                            <p className="text-sm text-destructive mt-1">{errors.institute.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="course">Course *</Label>
                          <Input
                            id="course"
                            {...register("course", { required: "Course is required" })}
                            placeholder="e.g., PUC"
                            className={errors.course ? "border-destructive" : ""}
                          />
                          {errors.course && (
                            <p className="text-sm text-destructive mt-1">{errors.course.message}</p>
                          )}
                        </div>

                        <div className="md:col-span-3">
                          <Label htmlFor="year">Year *</Label>
                          <Input
                            id="year"
                            {...register("year", { required: "Year is required" })}
                            placeholder="e.g., 1st Year"
                            className={errors.year ? "border-destructive" : ""}
                          />
                          {errors.year && (
                            <p className="text-sm text-destructive mt-1">{errors.year.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Event Selection */}
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                        Event Selection
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="eventName">Event *</Label>
                          <Select onValueChange={(value) => setValue("eventName", value)}>
                            <SelectTrigger className={errors.eventName ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select an event" />
                            </SelectTrigger>
                            <SelectContent>
                              {eventsData.map((event) => (
                                <SelectItem key={event.id} value={event.title}>
                                  {event.title} ({event.subtitle})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <input type="hidden" {...register("eventName", { required: "Event is required" })} />
                          {errors.eventName && (
                            <p className="text-sm text-destructive mt-1">{errors.eventName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="category">Category *</Label>
                          <Input
                            id="category"
                            {...register("category", { required: "Category is required" })}
                            placeholder="e.g., Solo, Group, Team"
                            className={errors.category ? "border-destructive" : ""}
                          />
                          {errors.category && (
                            <p className="text-sm text-destructive mt-1">{errors.category.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="teamDetails">Team Details (if applicable)</Label>
                          <Textarea
                            id="teamDetails"
                            {...register("teamDetails")}
                            placeholder="Team member names, roles, etc."
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label htmlFor="technicalNeeds">Technical Requirements (Optional)</Label>
                          <Textarea
                            id="technicalNeeds"
                            {...register("technicalNeeds")}
                            placeholder="Any special equipment, props, or technical needs"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="consent" 
                        onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                      />
                      <div>
                        <Label htmlFor="consent" className="cursor-pointer">
                          I accept the terms and conditions *
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          By registering, you agree to abide by all event rules and regulations.
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Complete Registration
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
