import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Users, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "AI Division",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Technical Project Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Users,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours that fit your lifestyle.",
  },
  {
    icon: Globe,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge and come back refreshed.",
  },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4"
            >
              Join Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Build the <span className="text-gradient">Future</span> With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Join a team of passionate innovators working on cutting-edge technology 
              that shapes the future of industries worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium text-primary">Our Culture</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Where <span className="text-gradient">Innovation</span> Thrives
              </h2>
              <p className="text-muted-foreground mb-6">
                At NexaTech, we believe that great work comes from great people. We've built 
                a culture that celebrates creativity, encourages experimentation, and values 
                every team member's unique perspective.
              </p>
              <ul className="space-y-3">
                {[
                  "Collaborative and inclusive environment",
                  "Cutting-edge projects with real impact",
                  "Continuous learning opportunities",
                  "Work-life balance that works",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="glass-hover rounded-xl p-4"
                >
                  <benefit.icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Open Positions"
            title="Join Our Team"
            description="Explore our current openings and find your next opportunity."
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-hover rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="shrink-0">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for talented people.
            </p>
            <Button variant="outline">
              Send Open Application
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
