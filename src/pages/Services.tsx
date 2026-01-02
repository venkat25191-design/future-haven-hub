import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Shield, Smartphone, Database, Server, Palette, Cog } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business requirements. We build scalable, maintainable applications using modern technologies.",
    features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services. We help you leverage AWS, Azure, and GCP for optimal performance and cost efficiency.",
    features: ["Cloud Migration", "Infrastructure Design", "DevOps", "Cost Optimization"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.",
    features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Chatbots"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets. We identify vulnerabilities and implement robust security measures.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android. Beautiful, performant apps that users love.",
    features: ["iOS Apps", "Android Apps", "React Native", "Flutter"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights. We build data pipelines, warehouses, and visualization dashboards.",
    features: ["Data Warehousing", "ETL Pipelines", "BI Dashboards", "Real-time Analytics"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust, scalable backend systems that power your applications. We build APIs, microservices, and distributed systems.",
    features: ["Microservices", "REST & GraphQL", "Real-time Systems", "Database Design"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that delights. We create intuitive interfaces and seamless user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Cog,
    title: "IT Consulting",
    description: "Strategic technology consulting to align your IT with business goals. We help you make informed technology decisions.",
    features: ["Tech Strategy", "Digital Transformation", "Process Optimization", "Vendor Selection"],
  },
];

export default function Services() {
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Solutions That <span className="text-gradient">Drive Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Comprehensive technology services designed to accelerate your digital transformation 
              and give you a competitive edge.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group glass-hover rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:neon-border transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="How We Work"
            title="Our Process"
            description="A proven methodology that ensures project success."
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "We understand your needs, goals, and challenges." },
              { step: "02", title: "Strategy", description: "We design a roadmap tailored to your objectives." },
              { step: "03", title: "Execution", description: "We build and iterate with agile methodology." },
              { step: "04", title: "Delivery", description: "We deploy, monitor, and continuously improve." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative glass-hover rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
