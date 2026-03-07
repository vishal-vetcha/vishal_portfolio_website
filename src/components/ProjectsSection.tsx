import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Stanford RNA 3D Folding — Kaggle Bronze Medal",
    tag: "Biomolecular AI",
    github: "https://github.com/vishal-vetcha/rna_folding_project",
    description:
      "Deep learning system predicting 3D RNA molecular structures using diffusion-based generative modeling and transformer architectures. Leverages the Boltz-1 biomolecular foundation model, achieving AlphaFold-level molecular accuracy.",
    details: [
      "SE(3)-equivariant diffusion framework",
      "Aggressive domain-specific fine-tuning",
      "Constraint-based geometry penalties",
      "Co-evolutionary signal extraction via MSA embeddings",
      "Diffusion trajectory ensembling",
    ],
    tech: ["PyTorch", "Transformers", "Diffusion Models", "MSA Embeddings", "pLDDT Scoring"],
    result: "🥉 Bronze Medal on Kaggle public leaderboard",
  },
  {
    title: "Brain Tumor MRI Classification",
    tag: "Medical AI",
    github: "https://github.com/vishal-vetcha/brain-tumor-classifier",
    description:
      "Deep learning pipeline detecting and classifying brain tumors from MRI scans into glioma, meningioma, pituitary tumor, and no tumor categories. Novel architecture currently under research publication.",
    details: [
      "7,023 MRI scans from multiple sources",
      "Advanced preprocessing: noise reduction, histogram equalization",
      "Custom CNN architectures in PyTorch",
      "Comprehensive evaluation: accuracy, precision, recall, F1",
    ],
    tech: ["PyTorch", "CNNs", "OpenCV", "Medical Imaging"],
    result: "Novel architecture under research publication",
  },
  {
    title: "DynamoBox-KI — AI Gesture Controller",
    tag: "Computer Vision",
    github: "https://github.com/vishal-vetcha/dynamobox-ki",
    description:
      "Computer vision input system controlling fighting games via real-time hand gestures. Processes 21 hand landmarks per frame using MediaPipe skeletal tracking with Euclidean geometry-based gesture recognition.",
    details: [
      "Real-time hand landmark detection",
      "Euclidean geometry gesture classification",
      "Low-latency vision pipeline",
      "Keyboard input emulation for games",
    ],
    tech: ["Python", "MediaPipe", "OpenCV", "NumPy"],
    result: "Controller-free gaming interface for fighting games",
  },
  {
    title: "Solar Rooftop Detection Pipeline",
    tag: "Climate AI",
    github: "https://github.com/vishal-vetcha/solar-rooftop-pv-pipeline",
    description:
      "Production-grade AI pipeline detecting solar photovoltaic installations from satellite imagery using YOLOv8 segmentation. Estimates surface area and generates audit-ready outputs.",
    details: [
      "Multi-zoom satellite inference",
      "Solar panel segmentation & area estimation",
      "Geospatial coordinate processing",
      "Docker containerization & CLI execution",
    ],
    tech: ["YOLOv8", "Docker", "Geospatial AI", "YAML Config"],
    result: "Automated solar detection at scale",
  },
  {
    title: "FreshConnect — Agriculture Marketplace",
    tag: "Sustainable Tech",
    github: "https://github.com/vishal-vetcha/FreshConnect_SIH_GrandFinale",
    description:
      "Mobile ecosystem connecting farmers directly with consumers while enabling agricultural waste recycling for renewable energy generation. Eliminates middlemen in crop sales.",
    details: [
      "Direct farmer-to-consumer marketplace",
      "Bio-waste marketplace for biogas plants",
      "Dynamic pricing models",
      "Real-time database & cloud storage",
    ],
    tech: ["Flutter", "Firebase", "Mobile Commerce"],
    result: "🏆 Smart India Hackathon Grand Finale — Top 5 nationally",
  },
  {
    title: "Oceanic Hazard Intelligence Platform",
    tag: "Disaster AI",
    github: "https://github.com/jyotsna-beep/oceanic-hazard-platform",
    description:
      "Full-stack disaster intelligence platform detecting oceanic hazards using ML and real-time environmental data from weather APIs, ocean sensors, satellite imagery, and social media.",
    details: [
      "Multi-source data ingestion pipelines",
      "ML hazard classification models",
      "Cyclone, flood, storm surge detection",
      "Interactive risk dashboards & alerts",
    ],
    tech: ["Machine Learning", "Data Pipelines", "APIs", "Dashboards"],
    result: "Real-time ocean hazard monitoring system",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="glass-panel-hover p-6 md:p-8 group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
    >
      {/* Tag */}
      <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
        {project.tag}
      </span>

      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-foreground/60 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Key details */}
      <div className="mb-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Key Innovations</p>
        <ul className="space-y-1.5">
          {project.details.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-foreground/50">
              <span className="glow-dot mt-1.5 shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-secondary/60 text-foreground/50 border border-border/30">
            {t}
          </span>
        ))}
      </div>

      {/* Result */}
      <div className="flex items-center justify-between pt-4 border-t border-border/30">
        <p className="text-sm font-medium text-primary/80">{project.result}</p>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <Github size={18} />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
            Featured <span className="neon-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
