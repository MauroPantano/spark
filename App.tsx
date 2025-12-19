import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-spark-darker text-gray-100 selection:bg-spark-primary selection:text-white overflow-x-hidden flex flex-col">
        
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Copyright */}
        <footer className="bg-black py-8 border-t border-white/5 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © {new Date().getFullYear()} S.P.A.R.K. — Maurizio Pantano & Mattia Sebastiano Lacanna.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <div className="flex gap-4 ml-4">
                <a href="#" className="hover:text-white transition-colors"><Github size={16} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;