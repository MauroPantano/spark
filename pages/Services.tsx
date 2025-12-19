import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, ShoppingCart, Database, Shield, 
  Palette, CheckCircle2, TrendingUp, Zap, Users, ArrowUpRight, Code 
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

interface CaseStudy {
  client: string;
  title: string;
  category: string;
  result: string;
  description: string;
  techStack: string[];
  imageColor: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Sviluppo Web & E-Commerce",
    description: "La tua presenza online, costruita per convertire. Dal sito vetrina allo shop complesso.",
    icon: <Globe className="w-10 h-10" />,
    color: "text-blue-400",
    features: [
      "Siti Vetrina moderni e veloci (Next.js/React)",
      "E-Commerce scalabili (Shopify, WooCommerce, Custom)",
      "Landing Page ad alta conversione",
      "Ottimizzazione SEO tecnica"
    ]
  },
  {
    title: "Software & Gestionali",
    description: "Digitalizziamo i tuoi processi aziendali. Meno carta, più efficienza.",
    icon: <Database className="w-10 h-10" />,
    color: "text-emerald-400",
    features: [
      "Gestionali aziendali su misura (CRM/ERP)",
      "Dashboard di monitoraggio dati",
      "Automazione flussi di lavoro",
      "Integrazione API e servizi terzi"
    ]
  },
  {
    title: "Cybersecurity & Cloud",
    description: "Proteggiamo i tuoi dati e rendiamo la tua infrastruttura inarrestabile.",
    icon: <Shield className="w-10 h-10" />,
    color: "text-indigo-400",
    features: [
      "Audit di sicurezza e Pen Testing",
      "Migrazione su Cloud (AWS/Azure/GCP)",
      "Sistemi di backup e Disaster Recovery",
      "Monitoraggio proattivo dei server"
    ]
  },
  {
    title: "Graphic Design & Branding",
    description: "L'occhio vuole la sua parte. Curiamo l'immagine del tuo brand a 360 gradi.",
    icon: <Palette className="w-10 h-10" />,
    color: "text-pink-400",
    features: [
      "Realizzazione Loghi e Brand Identity",
      "Grafiche per Social Media & Advertising",
      "Volantini, Biglietti da visita e Brochure",
      "UI/UX Design per App e Web"
    ]
  }
];

const caseStudies: CaseStudy[] = [
  {
    client: "Logistica FastMove Srl",
    title: "Ottimizzazione Flotta",
    category: "Software & Logistics",
    result: "-30% Costi Carburante",
    description: "Abbiamo sviluppato un sistema gestionale con algoritmo di routing che calcola i percorsi ottimali per i 50 furgoni dell'azienda, riducendo drasticamente i tempi di consegna.",
    techStack: ["Node.js", "Google Maps API", "PostgreSQL"],
    imageColor: "from-emerald-900 to-green-600"
  },
  {
    client: "Ristorante 'Il Golfo'",
    title: "Digital Menu & Booking",
    category: "Web App",
    result: "+25% Prenotazioni",
    description: "Sostituzione del vecchio sito con una Web App progressiva (PWA) che permette prenotazioni in tempo reale e ordinazioni al tavolo tramite QR Code.",
    techStack: ["Next.js", "Stripe Payments", "Real-time DB"],
    imageColor: "from-blue-900 to-cyan-600"
  },
  {
    client: "Fashion Brand 'Velvet'",
    title: "E-Commerce Experience",
    category: "E-Commerce",
    result: "2x Tasso Conversione",
    description: "Redesign completo dello shop online con focus su UX mobile-first e un'architettura ottimizzata per le performance su dispositivi mobili.",
    techStack: ["Shopify Plus", "Liquid", "Tailwind CSS"],
    imageColor: "from-purple-900 to-pink-600"
  }
];

const Services: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-spark-darker min-h-screen relative overflow-hidden">
      <div className="absolute top-20 left-0 w-full h-[500px] bg-gradient-to-b from-spark-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Le nostre <span className="text-spark-primary">Competenze</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Dalla scrittura del codice alla creazione del logo, offriamo un servizio completo per lanciare o rinnovare il tuo business.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {serviceCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 150} className="h-full">
              <div className="h-full bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-spark-primary/30 hover:bg-white/[0.07] transition-all duration-300 group">
                <div className={`mb-6 p-4 rounded-2xl bg-black/40 inline-block ${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-400 mb-8 min-h-[50px]">{category.description}</p>
                <ul className="space-y-3">
                  {category.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 ${category.color}`} />
                      <span className="text-sm md:text-base">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mb-32">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">S.P.A.R.K. in Azione</h2>
                <p className="text-gray-400">Come abbiamo trasformato le sfide dei nostri clienti in risultati concreti.</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="group relative bg-spark-dark border border-white/5 rounded-3xl overflow-hidden hover:border-spark-primary/40 transition-all duration-500 flex flex-col h-full">
                  <div className={`h-48 w-full bg-gradient-to-br ${study.imageColor} relative p-6 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="relative z-10">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/10 uppercase tracking-wider">
                        {study.category}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <div className="text-white/80 text-xs font-bold uppercase mb-1">{study.client}</div>
                      <h3 className="text-xl font-bold text-white leading-tight">{study.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-spark-secondary font-bold text-lg mb-3">
                        <Zap size={20} className="fill-current" /> {study.result}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                         {study.techStack.map(tech => (
                           <span key={tech} className="text-[10px] px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">
                             {tech}
                           </span>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={400}>
          <div className="bg-gradient-to-r from-spark-dark to-black border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-white mb-6">Perché scegliere S.P.A.R.K.?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
              <div className="p-4 group">
                <div className="mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                   <Code className="w-8 h-8 mx-auto text-spark-primary" />
                </div>
                <h4 className="font-semibold text-white">Codice Pulito</h4>
              </div>
              <div className="p-4 group">
                 <div className="mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                   <TrendingUp className="w-8 h-8 mx-auto text-spark-secondary" />
                </div>
                <h4 className="font-semibold text-white">Risultati Reali</h4>
              </div>
              <div className="p-4 group">
                 <div className="mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                   <Users className="w-8 h-8 mx-auto text-blue-400" />
                </div>
                <h4 className="font-semibold text-white">Supporto Diretto</h4>
              </div>
              <div className="p-4 group">
                 <div className="mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                   <Shield className="w-8 h-8 mx-auto text-purple-400" />
                </div>
                <h4 className="font-semibold text-white">Sicurezza</h4>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-spark-primary rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Parla con noi <ArrowUpRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;