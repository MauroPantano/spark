import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Code, Palette, Smartphone, ArrowRight, Server, Terminal, Monitor, PenTool } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageGradient: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

// Progetti Maurizio (Tech Lead - Backend, Architecture, Complex Systems)
const maurizioProjects: Project[] = [
  {
    id: 101,
    title: "Cloud Scalable ERP",
    category: "Backend System",
    description: "Architettura a microservizi per la gestione logistica di una multinazionale. Gestione di +100k richieste/minuto.",
    imageGradient: "from-slate-900 to-blue-900",
    tags: ["Docker", "Kubernetes", "Go", "PostgreSQL"],
    links: { github: "#" }
  },
  {
    id: 102,
    title: "FinTech Trading Bot",
    category: "Algorithmic Trading",
    description: "Bot di trading automatizzato con analisi del sentiment in tempo reale e gestione del rischio integrata.",
    imageGradient: "from-gray-800 to-emerald-900",
    tags: ["Python", "TensorFlow", "Redis", "AWS Lambda"],
    links: { github: "#" }
  },
  {
    id: 103,
    title: "Secure Auth Gateway",
    category: "Cybersecurity",
    description: "Sistema di autenticazione centralizzato OAuth2 personalizzato con 2FA biometrica per un network di aziende.",
    imageGradient: "from-indigo-900 to-slate-800",
    tags: ["Node.js", "Express", "Security", "JWT"],
    links: { github: "#" }
  }
];

// Progetti Mattia (Product Lead - Frontend, Mobile, UX/UI)
const mattiaProjects: Project[] = [
  {
    id: 201,
    title: "Neon Music App",
    category: "Mobile Experience",
    description: "Player musicale futuristico con visualizzazioni audio reattive e un'interfaccia utente basata sui gesti.",
    imageGradient: "from-fuchsia-900 to-purple-600",
    tags: ["React Native", "Skia", "TypeScript", "UX Motion"],
    links: { demo: "#", github: "#" }
  },
  {
    id: 202,
    title: "Luxury Restaurant UI",
    category: "Web Design",
    description: "Sito web immersivo per un ristorante stellato. Animazioni scroll-driven e caricamento 3D dei piatti.",
    imageGradient: "from-amber-900 to-orange-600",
    tags: ["Three.js", "GSAP", "React", "WebGL"],
    links: { demo: "#" }
  },
  {
    id: 203,
    title: "Brand Identity 'Flux'",
    category: "Graphic Design",
    description: "Rebranding completo per una startup energetica: logo dinamico, palette colori e linee guida UI.",
    imageGradient: "from-cyan-900 to-blue-500",
    tags: ["Figma", "Illustrator", "Brand Strategy"],
    links: { demo: "#" }
  }
];

const ProjectCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => (
  <FadeIn delay={delay}>
    <div className="group bg-spark-dark border border-white/5 rounded-3xl overflow-hidden hover:border-spark-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-spark-primary/10 flex flex-col h-full relative">
      
      {/* Image Placeholder Area */}
      <div className={`h-56 w-full bg-gradient-to-br ${project.imageGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white flex items-center gap-2">
          {project.category.includes("Back") && <Server size={14} />}
          {project.category.includes("Mobile") && <Smartphone size={14} />}
          {project.category.includes("Web") && <Monitor size={14} />}
          {project.category.includes("Design") && <PenTool size={14} />}
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-spark-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
          {project.links.demo && (
            <a href={project.links.demo} className="flex items-center gap-2 text-xs font-bold text-white hover:text-spark-secondary transition-colors uppercase tracking-wide">
              <ExternalLink size={14} /> Live Project
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
              <Github size={14} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  </FadeIn>
);

const Portfolio: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-spark-darker min-h-screen relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Global Header */}
        <FadeIn>
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-spark-primary to-spark-secondary">S.P.A.R.K.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Esplora i progetti personali e professionali realizzati dai nostri fondatori. 
              Due approcci diversi, un'unica visione di eccellenza.
            </p>
          </div>
        </FadeIn>

        {/* --- MAURIZIO SECTION --- */}
        <div className="mb-32 relative">
          {/* Decor background for Maurizio */}
          <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

          <FadeIn>
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                <Terminal size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Maurizio Pantano</h2>
                <p className="text-blue-400 font-mono text-sm uppercase tracking-widest">Tech Lead & Systems Architect</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {maurizioProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} delay={idx * 150} />
            ))}
          </div>
        </div>

        {/* --- MATTIA SECTION --- */}
        <div className="mb-20 relative">
          {/* Decor background for Mattia */}
          <div className="absolute -right-20 top-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

          <FadeIn>
            <div className="flex items-center justify-end gap-4 mb-10 border-b border-white/10 pb-4 text-right">
              <div>
                <h2 className="text-3xl font-bold text-white">Mattia Sebastiano Lacanna</h2>
                <p className="text-purple-400 font-mono text-sm uppercase tracking-widest">Product Lead & Creative Director</p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                <Palette size={32} />
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {mattiaProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} delay={idx * 150} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="relative bg-gradient-to-r from-spark-dark to-black border border-white/10 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Vuoi unire Potenza e Design?</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Quando le nostre competenze si uniscono, nascono prodotti digitali completi. 
                Affidati a S.P.A.R.K. per il tuo prossimo progetto.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-xl shadow-white/10"
              >
                Inizia ora <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Portfolio;