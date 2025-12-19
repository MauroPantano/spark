import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Chiude il menu quando cambia la rotta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleScrollToAbout = () => {
    setIsOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Servizi', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-spark-darker/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer flex items-center">
              S.P.A.R.K.<span className="text-spark-primary animate-pulse">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <button 
                onClick={handleScrollToAbout}
                className="text-gray-300 hover:text-spark-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 bg-transparent border-none cursor-pointer"
              >
                Chi Siamo
              </button>
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? 'text-white bg-white/10' : 'text-gray-300 hover:text-spark-secondary hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className={`ml-4 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 ${isActive('/contact') ? 'bg-spark-primary text-white' : 'bg-white/10 hover:bg-spark-primary hover:text-white'}`}
              >
                Contattaci
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-spark-darker/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          <button 
            onClick={handleScrollToAbout}
            className="w-full text-left text-gray-300 hover:text-spark-primary px-4 py-4 rounded-xl text-lg font-medium transition-colors flex justify-between items-center"
          >
            Chi Siamo <ArrowRight size={18} className="text-gray-600" />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all flex justify-between items-center ${
                isActive(link.path) 
                  ? 'text-spark-primary bg-spark-primary/10' 
                  : 'text-gray-300 hover:text-spark-primary hover:bg-white/5'
              }`}
            >
              {link.name}
              <ArrowRight size={18} className={isActive(link.path) ? 'text-spark-primary' : 'text-gray-600'} />
            </Link>
          ))}
          
          <div className="pt-4 px-2">
            <Link
              to="/contact"
              className="block w-full text-center bg-spark-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              Contattaci Subito
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
