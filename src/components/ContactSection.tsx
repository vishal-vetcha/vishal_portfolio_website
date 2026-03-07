import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Github, label: "GitHub", href: "https://github.com/vishal-vetcha", desc: "View repositories" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-vetcha-97649a293", desc: "Connect professionally" },
    { icon: Mail, label: "Email", href: "mailto:vishal8451973398@gmail.com", desc: "Get in touch" },
    { icon: FileDown, label: "Resume", href: "#", desc: "Download CV" },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="neon-text">Connect</span>
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Interested in AI research collaboration, engineering roles, or innovative projects?
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {links.map(({ icon: Icon, label, href, desc }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-panel-hover p-6 text-center block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <Icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-display font-semibold text-foreground mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-24 pt-8 border-t border-border/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 Vishal Vetcha. Built with intelligence.
          </p>
          <div className="flex gap-4">
            {["about", "skills", "projects", "research", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono capitalize"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
