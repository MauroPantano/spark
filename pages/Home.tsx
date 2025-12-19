import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Lightbulb, Smartphone, Shield, ArrowRight, User, Layers, ShieldCheck, Zap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { Founder, ServiceItem } from '../types';

const founders: Founder[] = [
  {
    name: "Maurizio Pantano",
    role: "Co-Founder & Tech Lead",
    bio: "La mente analitica dietro l'architettura. Specializzato in soluzioni scalabili e problem solving complesso.",
    skills: ["Full Stack Dev", "System Architecture", "React/Node", "Cloud"]
  },
  {
    name: "Mattia Sebastiano Lacanna",
    role: "Co-Founder & Product Lead",
    bio: "Il ponte tra codice e utente. Appassionato di UX/UI, sviluppo mobile e creazione di prodotti digitali innovativi.",
    skills: ["Mobile Dev", "UI/UX", "E-commerce", "Frontend Magic"]
  }
];

const services: ServiceItem[] = [
  {
    id: 's',
    title: 'Software',
    description: 'Sviluppo di piattaforme web personalizzate, gestionali aziendali e dashboard interattive.',
    icon: <Code2 className="w-8 h-8 text-blue-400" />
  },
  {
    id: 'p',
    title: 'Problem Solving',
    description: 'Analisi tecnica e risoluzione di colli di bottiglia digitali. Ottimizzazione di processi esistenti.',
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'a',
    title: 'Apps',
    description: 'Applicazioni mobile native e cross-platform (iOS & Android) per portare il tuo business ovunque.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />
  },
  {
    id: 'rk',
    title: 'Research & Knowledge',
    description: 'R&D costante su nuove tecnologie, cybersecurity e infrastrutture cloud all\'avanguardia.',
    icon: <Shield className="w-8 h-8 text-emerald-400" />
  }
];

const Home: React.FC = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-spark-primary/20 blur-[120px] rounded-full -z-10 animate-blob mix-blend-screen"></div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-spark-secondary/10 blur-[120px] rounded-full -z-10 animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-blob animation-delay-4000 mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                Innovazione digitale.
              </span>
              <span className="block mt-2 gradient-text animate-pulse">
                Dall'idea al codice.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
              S.P.A.R.K. è il partner tecnologico che trasforma i problemi in soluzioni. 
              Sviluppiamo software, app e conoscenza per il futuro del tuo business.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="px-8 py-3 rounded-full bg-spark-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:-translate-y-1">
                Scopri i Servizi
              </Link>
              <Link to="/contact" className="px-8 py-3 rounded-full border border-gray-600 hover:border-white hover:bg-white/5 transition-all hover:-translate-y-1">
                Parla con noi
              </Link>
            </div>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {services.map((item, index) => (
              <FadeIn key={item.id} delay={600 + (index * 100)} className="h-full">
                <Link to="/services" className="block h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-spark-primary/50 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-2 hover:shadow-2xl hover:shadow-spark-primary/10">
                  <div className="mb-4 p-3 bg-black/30 rounded-lg inline-block group-hover:scale-110 group-hover:bg-spark-primary/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-spark-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-spark-darker relative border-t border-white/5 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Il Team</h2>
              <p className="text-gray-400">Siamo in 2, ma lavoriamo per 10. Efficienza, passione e competenza verticale.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="h-full bg-gradient-to-b from-spark-dark to-spark-darker border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-spark-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-spark-primary/10">
                  <div className="absolute -top-10 -right-10 p-4 text-white/5 group-hover:text-spark-primary/10 group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 ease-out">
                    <User size={150} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-1 text-white group-hover:text-spark-primary transition-colors">{founder.name}</h3>
                    <p className="text-spark-secondary mb-6 font-mono text-sm uppercase tracking-wider">{founder.role}</p>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {founder.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill, sIdx) => (
                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10 group-hover:border-spark-primary/30 group-hover:bg-spark-primary/10 transition-colors delay-[50ms]" style={{ transitionDelay: `${sIdx * 50}ms` }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      
      {/* NEW SECTION: Vision / Technology Integration */}
      <section className="py-32 relative overflow-hidden bg-black">
        {/* Decorations */}
        <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-spark-primary/5 via-transparent to-spark-secondary/5 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-spark-secondary text-sm font-medium mb-6">
                  <Zap size={16} className="fill-current" />
                  <span>Next-Gen Development</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Tecnologia solida. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Design Immersivo.</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  In S.P.A.R.K. non scriviamo solo codice. Costruiamo ecosistemi digitali dove l'efficienza del backend incontra la bellezza del frontend. 
                  Il risultato? Prodotti che gli utenti amano usare e che il business ama scalare.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                      <Layers size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Architettura Modulare</h4>
                      <p className="text-sm text-gray-400">Sistemi pronti a crescere con te, senza debiti tecnici.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Affidabilità Totale</h4>
                      <p className="text-sm text-gray-400">Sicurezza e performance non sono optional, sono le fondamenta.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Visual Composition (CSS Only Graphic) */}
            <FadeIn delay={200}>
              <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">
                
                {/* Abstract Code Window */}
                <div className="absolute w-3/4 h-3/4 bg-[#0f172a] rounded-xl border border-slate-700 shadow-2xl -rotate-6 translate-x-[-20px] hover:rotate-0 hover:translate-x-0 transition-all duration-700 ease-out z-10 overflow-hidden">
                   {/* Window Header */}
                   <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                     <div className="ml-4 h-4 w-32 bg-slate-700 rounded-full opacity-50"></div>
                   </div>
                   {/* Code Lines */}
                   <div className="p-6 space-y-3 opacity-80 font-mono text-sm">
                      <div className="flex gap-4">
                        <span className="text-slate-600">01</span>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">sparkInitiative</span> = <span className="text-yellow-400">async</span> () ={">"} {"{"}
                      </div>
                      <div className="flex gap-4 pl-4">
                        <span className="text-slate-600">02</span>
                        <span className="text-slate-300">await</span> <span className="text-blue-300">analyzeProblem</span>();
                      </div>
                      <div className="flex gap-4 pl-4">
                        <span className="text-slate-600">03</span>
                        <span className="text-purple-400">return</span> <span className="text-green-400">new Solution</span>({"{ efficiency: 100 }"});
                      </div>
                      <div className="flex gap-4">
                        <span className="text-slate-600">04</span>
                        {"}"}
                      </div>
                      {/* Decoration lines */}
                      <div className="h-2 w-1/2 bg-slate-700/50 rounded mt-8"></div>
                      <div className="h-2 w-3/4 bg-slate-700/30 rounded"></div>
                      <div className="h-2 w-2/3 bg-slate-700/30 rounded"></div>
                   </div>
                   {/* Glow effect */}
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full"></div>
                </div>

                {/* Abstract Mobile Interface */}
                <div className="absolute w-1/2 h-[80%] bg-black rounded-[3rem] border-4 border-slate-800 shadow-[0_0_50px_rgba(59,130,246,0.2)] rotate-3 translate-x-[60px] translate-y-[20px] hover:rotate-0 hover:translate-x-[40px] transition-all duration-700 ease-out z-20 overflow-hidden flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-xl z-30"></div>
                  
                  {/* Screen Content */}
                  <div className="flex-1 bg-gradient-to-b from-slate-900 to-black p-4 pt-12 relative">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    </div>
                    
                    <div className="h-32 w-full bg-gradient-to-r from-spark-primary to-purple-600 rounded-2xl mb-4 relative overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
                    </div>
                    
                    <div className="flex gap-2 mb-4 overflow-hidden">
                      <div className="h-20 w-20 bg-white/5 rounded-xl shrink-0"></div>
                      <div className="h-20 w-20 bg-white/5 rounded-xl shrink-0"></div>
                      <div className="h-20 w-20 bg-white/5 rounded-xl shrink-0"></div>
                    </div>

                    <div className="space-y-2">
                       <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                       <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                    </div>

                    {/* Floating Button */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-spark-secondary rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center">
                       <ArrowRight className="text-black w-5 h-5" />
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;