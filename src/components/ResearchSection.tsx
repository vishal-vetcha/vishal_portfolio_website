import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Atom, HeartPulse, Satellite, Leaf, FlaskConical } from "lucide-react";

const interests = [
  { icon: FlaskConical, title: "Scientific Machine Learning", desc: "Physics-informed neural networks and scientific computing" },
  { icon: Atom, title: "Biomolecular AI", desc: "Protein and RNA structure prediction using deep learning" },
  { icon: HeartPulse, title: "Medical Imaging AI", desc: "Novel architectures for clinical diagnostic systems" },
  { icon: Satellite, title: "Climate Intelligence", desc: "Earth observation, geospatial AI, and disaster modeling" },
  { icon: Leaf, title: "AI for Sustainability", desc: "Renewable energy detection and agricultural optimization" },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Research</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
            Research <span className="neon-text">Interests</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass-panel-hover p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/50">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
