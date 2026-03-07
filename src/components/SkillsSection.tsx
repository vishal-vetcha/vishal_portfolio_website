import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-primary to-neon-purple",
    skills: ["C", "Python", "Java", "Dart"],
  },
  {
    title: "Data Structures & Algorithms",
    color: "from-neon-purple to-accent",
    skills: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
  },
  {
    title: "AI / ML",
    color: "from-neon-cyan to-primary",
    skills: ["TensorFlow", "PyTorch", "Data Analysis", "Deep Neural Networks"],
  },
  {
    title: "App Development",
    color: "from-primary to-neon-cyan",
    skills: ["Flutter", "Android Studio", "Firebase"],
  },
  {
    title: "DBMS",
    color: "from-accent to-neon-purple",
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "IoT",
    color: "from-neon-purple to-primary",
    skills: ["ROS2", "OpenCV", "Sensor Integration"],
  },
  {
    title: "Soft Skills",
    color: "from-primary to-accent",
    skills: ["Leadership", "Teamwork", "Problem-solving"],
  },
];

const coreTools = [
  "C", "Python", "Java", "Dart", "TensorFlow", "PyTorch", "OpenCV",
  "Flutter", "Android Studio", "Firebase", "MySQL", "SQLite",
  "ROS2", "NumPy", "Pandas", "Docker", "React", "Node.js",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Expertise</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
            Core <span className="neon-text">Capabilities</span>
          </h2>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-panel-hover p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-foreground/70 border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          className="glass-panel p-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wider uppercase">Technologies</p>
          <div className="flex flex-wrap gap-3">
            {coreTools.map((tool, i) => (
              <motion.span
                key={tool}
                className="px-4 py-2 text-sm font-mono rounded-lg bg-secondary/50 text-foreground/60 border border-border/30 hover:border-primary/40 hover:text-primary transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.03 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
