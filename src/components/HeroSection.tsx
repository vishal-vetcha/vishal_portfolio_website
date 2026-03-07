import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import { useEffect, useState } from "react";

const roles = [
  "AI Engineer",
  "ML Researcher",
  "Computer Vision Engineer",
  "Systems Developer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const codeSnippets = [
    "model.train(epochs=100)",
    "loss = F.cross_entropy(pred, target)",
    "torch.cuda.is_available()",
    "np.fft.fft2(image)",
    "optimizer.step()",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />
      
      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block font-mono text-xs text-muted-foreground/30 select-none"
          style={{
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.p
            className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Portfolio
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Vishal</span>{" "}
            <span className="neon-text">Vetcha</span>
          </h1>

          {/* Typing role */}
          <div className="h-8 mb-8">
            <span className="font-mono text-lg text-primary typing-cursor">
              {displayText}
            </span>
          </div>

          {/* Main headline */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-display text-foreground/80 max-w-4xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Engineering Intelligence Across Artificial Intelligence, Data Science, Software Systems, Biology,{" "}
            <span className="neon-text">Earth Systems</span>, and Human Interfaces.
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            AI Engineer specializing in scientific machine learning, computer vision, and intelligent systems.
          </motion.p>

          {/* Achievement badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {[
              "🥉 Kaggle Bronze — Stanford RNA 3D Folding",
              "🏆 SIH Grand Finalist — Top 5 National",
              "🧠 AI Systems: Healthcare · Climate · Gaming",
            ].map((badge, i) => (
              <span
                key={i}
                className="glass-panel px-4 py-2 text-xs md:text-sm font-mono text-foreground/70"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vishal@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(217 91% 60% / 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-muted-foreground/50" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
