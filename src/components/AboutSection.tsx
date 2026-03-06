import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Cpu, Microscope } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const focuses = [
    { icon: Brain, label: "Deep Learning & AI" },
    { icon: Microscope, label: "Scientific Computing" },
    { icon: Globe, label: "Climate Intelligence" },
    { icon: Cpu, label: "Systems Engineering" },
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">About</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            Building <span className="neon-text">Intelligent Systems</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-foreground/70 leading-relaxed">
                I am an AI/ML engineer and researcher who builds production-grade intelligent systems
                that solve real-world problems across medicine, climate science, gaming interfaces,
                and sustainable energy.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                My work spans scientific machine learning, computer vision, and deep learning —
                from predicting RNA molecular structures to detecting solar panels from satellite imagery.
                I thrive at the intersection of cutting-edge research and systems engineering.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Recognized as a Kaggle Bronze Medalist and Smart India Hackathon Grand Finalist,
                I bring both competitive rigor and engineering depth to every project.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {focuses.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="glass-panel-hover p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <Icon className="mx-auto mb-3 text-primary" size={28} />
                  <p className="text-sm font-medium text-foreground/80">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
