import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ContactCard = ({ title, icon, value, href, delay }: { title: string, icon: React.ReactNode, value: string, href?: string, delay: number }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <FadeIn delay={delay}>
      <a 
        href={href || "#"} 
        className="block p-6 bg-spark-dark border border-white/5 rounded-2xl hover:border-spark-primary/50 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={handleCopy} className="p-2 bg-white/10 rounded-full hover:bg-spark-primary hover:text-white transition-colors">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-spark-primary/10 text-spark-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <p className="text-lg font-semibold text-white group-hover:text-spark-primary transition-colors">{value}</p>
          </div>
        </div>
      </a>
    </FadeIn>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-black relative overflow-hidden min-h-screen">
      {/* Animated blobs */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-spark-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-spark-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Parliamo del tuo progetto
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hai un'idea? Un problema da risolvere? O vuoi semplicemente capire come l'IA può aiutare il tuo business?
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-spark-primary rounded-full"></span>
                Contatti Diretti
              </h3>
              <div className="space-y-4">
                <ContactCard 
                  delay={100}
                  title="Co-Founder & Tech Lead"
                  value="mauropantano99@gmail.com"
                  icon={<Mail size={24} />}
                  href="mailto:mauropantano99@gmail.com"
                />
                <ContactCard 
                  delay={200}
                  title="Telefono / WhatsApp"
                  value="+39 327 205 4009"
                  icon={<Phone size={24} />}
                  href="tel:+393272054009"
                />
                <ContactCard 
                  delay={300}
                  title="Sede Operativa"
                  value="Remote First / Italia"
                  icon={<MapPin size={24} />}
                />
              </div>
            </div>
            
            <FadeIn delay={400}>
              <div className="p-6 bg-spark-dark/50 border border-white/5 rounded-2xl backdrop-blur-sm">
                 <h4 className="text-white font-semibold mb-2">Orari di Reperibilità</h4>
                 <p className="text-gray-400 text-sm mb-4">Solitamente rispondiamo entro poche ore lavorative.</p>
                 <div className="flex items-center gap-2 text-spark-secondary text-sm">
                   <div className="w-2 h-2 bg-spark-secondary rounded-full animate-pulse"></div>
                   Attualmente accettiamo nuovi progetti
                 </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <FadeIn delay={200} className="h-full">
            <div className="bg-spark-dark border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-spark-primary/10 blur-3xl rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Inviaci un messaggio</h3>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Messaggio inviato! (Simulazione)'); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Nome</label>
                    <input type="text" placeholder="Mario Rossi" className="w-full bg-spark-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-spark-primary focus:ring-1 focus:ring-spark-primary transition-all placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                    <input type="email" placeholder="mario@email.com" className="w-full bg-spark-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-spark-primary focus:ring-1 focus:ring-spark-primary transition-all placeholder:text-gray-600" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Oggetto</label>
                  <select className="w-full bg-spark-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-spark-primary focus:ring-1 focus:ring-spark-primary transition-all appearance-none cursor-pointer">
                    <option>Richiesta Preventivo</option>
                    <option>Sviluppo App / Web</option>
                    <option>Consulenza IT</option>
                    <option>Altro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Messaggio</label>
                  <textarea rows={4} placeholder="Raccontaci la tua idea..." className="w-full bg-spark-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-spark-primary focus:ring-1 focus:ring-spark-primary transition-all placeholder:text-gray-600 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-spark-primary to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  <Send size={18} /> Invia Messaggio
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  I tuoi dati sono al sicuro. Non facciamo spam.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;