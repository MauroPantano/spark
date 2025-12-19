
import React, { useState } from 'react';
import { 
  Clock, DollarSign, PenTool, Search, 
  Code, Rocket, ShieldAlert, ChevronDown, 
  Minus, Plus, Laptop, Wrench 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

// --- Components ---

// Fixed: Defined WorkflowStep as React.FC to handle implicit props
const WorkflowStep: React.FC<{ number: string, title: string, desc: string, icon: React.ReactNode, delay: number }> = ({ number, title, desc, icon, delay }) => (
  <FadeIn delay={delay} className="relative flex-1">
    <div className="bg-spark-dark border border-white/5 p-6 rounded-2xl relative group hover:border-spark-primary/40 hover:-translate-y-2 transition-all duration-300 h-full">
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-spark-primary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-spark-primary/30 z-10">
        {number}
      </div>
      <div className="mb-4 text-spark-secondary group-hover:scale-110 transition-transform origin-left">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </FadeIn>
);

// Fixed: Defined AccordionItem as React.FC to allow 'key' prop when used in lists
const AccordionItem: React.FC<{ question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-spark-primary' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`ml-4 p-2 rounded-full border transition-all ${isOpen ? 'border-spark-primary bg-spark-primary/10 text-spark-primary rotate-180' : 'border-white/10 text-gray-400 group-hover:border-white/30'}`}>
          <ChevronDown size={20} />
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

// --- Data ---

const faqs = [
  {
    question: "Quanto costa sviluppare un sito web o un'app?",
    answer: "Non esiste un prezzo unico perché ogni progetto è diverso. Un sito vetrina semplice parte da cifre contenute, mentre un e-commerce complesso o un'app personalizzata richiedono un budget più alto. Contattaci per una stima gratuita: siamo trasparenti e moduliamo l'offerta in base al tuo budget."
  },
  {
    question: "Quali sono le tempistiche di realizzazione?",
    answer: "Per una Landing Page o un sito vetrina standard, solitamente impieghiamo 2-3 settimane. Per software complessi, e-commerce o App Mobile, i tempi variano da 1 a 3 mesi in base alle funzionalità richieste. Definiamo sempre una roadmap chiara all'inizio del progetto."
  },
  {
    question: "Vi occupate anche del mantenimento post-lancio?",
    answer: "Assolutamente sì. Offriamo pacchetti di manutenzione mensile o annuale che includono aggiornamenti di sicurezza, backup, monitoraggio server e piccoli interventi di modifica. Non ti lasciamo solo dopo la consegna."
  },
  {
    question: "Che tecnologie utilizzate?",
    answer: (
      <span>
        Siamo specializzati in stack moderni per garantire velocità e scalabilità. 
        Lato Web usiamo principalmente <strong>React, Next.js, Tailwind CSS</strong>. 
        Per il Backend utilizziamo <strong>Node.js, Python (per l'AI)</strong> e database come PostgreSQL o MongoDB. 
        Per le App Mobile sviluppiamo in <strong>React Native</strong>.
      </span>
    )
  },
  {
    question: "Potete aggiornare un sito o un software già esistente?",
    answer: "Dipende dalla tecnologia con cui è stato costruito. Facciamo sempre un'analisi tecnica (audit) iniziale. Se il codice è obsoleto o instabile, potremmo consigliare un rifacimento (refactoring) per risparmiare costi di manutenzione futuri."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-32 pb-24 bg-spark-darker min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Domande <span className="text-spark-secondary">Frequenti</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Chiarezza e trasparenza sono alla base del nostro lavoro. Ecco come operiamo e cosa devi sapere prima di iniziare.
            </p>
          </div>
        </FadeIn>

        {/* Workflow Section */}
        <div className="mb-24">
          <FadeIn>
             <h2 className="text-2xl font-bold text-white mb-10 text-center">Il Metodo S.P.A.R.K.</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
             {/* Connector Line (Desktop only) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-spark-primary/0 via-spark-primary/30 to-spark-primary/0 -translate-y-1/2 z-0"></div>

             <WorkflowStep 
                delay={100}
                number="01"
                title="Analisi"
                desc="Ascoltiamo la tua idea, studiamo i competitor e definiamo gli obiettivi tecnici e di business."
                icon={<Search size={32} />}
             />
             <WorkflowStep 
                delay={200}
                number="02"
                title="Proposta"
                desc="Ti presentiamo un piano dettagliato, wireframe grafici e un preventivo chiaro senza sorprese."
                icon={<PenTool size={32} />}
             />
             <WorkflowStep 
                delay={300}
                number="03"
                title="Sviluppo"
                desc="Scriviamo il codice. Riceverai aggiornamenti costanti e potrai vedere il progetto crescere."
                icon={<Code size={32} />}
             />
             <WorkflowStep 
                delay={400}
                number="04"
                title="Lancio"
                desc="Test finali, messa online e formazione su come utilizzare il tuo nuovo strumento digitale."
                icon={<Rocket size={32} />}
             />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <FadeIn delay={200}>
              <div className="bg-white/5 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <DollarSign className="text-spark-primary" /> Dubbi e Curiosità
                </h3>
                <div>
                  {faqs.map((faq, idx) => (
                    <AccordionItem 
                      key={idx}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === idx}
                      onClick={() => toggleFAQ(idx)}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar: What we DON'T do */}
          <div className="lg:col-span-1">
             <FadeIn delay={400} className="h-full">
               <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 h-full relative overflow-hidden">
                 <div className="absolute -right-10 -top-10 text-red-500/10">
                   <ShieldAlert size={150} />
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                   <ShieldAlert className="text-red-400" /> Cosa <span className="text-red-400 underline decoration-red-400/30">NON</span> facciamo
                 </h3>
                 
                 <ul className="space-y-6 relative z-10">
                   <li className="flex gap-3 text-gray-400">
                     <Wrench className="shrink-0 text-red-400 mt-1" size={20} />
                     <div>
                       <strong className="text-gray-200 block">Riparazione Hardware</strong>
                       Non ripariamo PC, stampanti o smartphone rotti. Siamo un'azienda software.
                     </div>
                   </li>
                   <li className="flex gap-3 text-gray-400">
                     <Laptop className="shrink-0 text-red-400 mt-1" size={20} />
                     <div>
                       <strong className="text-gray-200 block">Assistenza Tecnica Domestica</strong>
                       Non interveniamo a domicilio per configurare WiFi, TV o installare Windows.
                     </div>
                   </li>
                   <li className="flex gap-3 text-gray-400">
                     <Minus className="shrink-0 text-red-400 mt-1" size={20} />
                     <div>
                       <strong className="text-gray-200 block">Social Media Manager</strong>
                       Realizziamo le grafiche e i template, ma non gestiamo la pubblicazione quotidiana dei post sui social.
                     </div>
                   </li>
                 </ul>

                 <div className="mt-8 pt-8 border-t border-red-500/20 relative z-10">
                   <p className="text-sm text-gray-400 mb-4">Hai ancora dubbi su cosa possiamo fare per te?</p>
                   <Link to="/contact" className="text-white text-sm font-semibold hover:text-red-400 transition-colors flex items-center gap-1">
                     Scrivici comunque <span className="text-lg">→</span>
                   </Link>
                 </div>
               </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
