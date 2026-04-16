import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Medal, BookOpen, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Medal,
    title: "Kaggle Bronze Medal",
    subtitle: "Stanford RNA 3D Folding Competition",
    description: "Achieved Bronze Medal placement on the public leaderboard for predicting RNA molecular structures.",
  },
  {
    icon: Award,
    title: "Smart India Hackathon Finalist",
    subtitle: "Grand Finale — Top 5 National Ranking",
    description: "Built FreshConnect, a sustainable agriculture marketplace, reaching the national grand finale.",
  },
  {
    icon: Award,
    title: "Entrepreneurship Award",
    subtitle: "Venture Development Centre — GITAM IdeaBlast 2024",
    description: "Finalist (Top 10) at GITAM IdeaBlast 2024, recognized for innovative venture development.",
  },
  {
    icon: BookOpen,
    title: "Research Publication",
    subtitle: "Pathology-Adaptive Multi-View Attention for Unified Brain Imaging Analysis",
    description: "Developing a novel neural architecture for medical imaging classification, currently under research review.",
  },
  {
    icon: Rocket,
    title: "Large-Scale AI Systems",
    subtitle: "Healthcare · Climate · Gaming · Energy",
    description: "International Conference on Frontiers in Advanced Computing and Emerging Intelligent Technologies (FACEIT), Springer Proceedings, Scopus Indexed. Will be presented at National Institute of Technology Warangal, India, 2026.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Recognition</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
            Key <span className="neon-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />

          <div className="space-y-12">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  className={`relative flex items-center md:justify-${isLeft ? 'start' : 'end'}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 hidden md:block">
                    <div className="glow-dot w-3 h-3" />
                  </div>

                  <div className={`glass-panel-hover p-6 w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary/70 font-mono mb-2">{item.subtitle}</p>
                        <p className="text-sm text-foreground/50">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
