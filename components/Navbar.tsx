import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleScrollToAbout = () => {
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

  return (
    <nav className="fixed w-full z-40 bg-spark-darker/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer">
              S.P.A.R.K.<span className="text-spark-primary animate-pulse">.</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button 
                onClick={handleScrollToAbout}
                className="text-gray-300 hover:text-spark-secondary transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 bg-transparent border-none cursor-pointer"
              >
                Chi Siamo
              </button>
              <Link 
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/services') ? 'text-white bg-white/10' : 'text-gray-300 hover:text-spark-secondary hover:bg-white/5'}`}
              >
                Servizi
              </Link>
              <Link 
                to="/portfolio"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-white bg-white/10' : 'text-gray-300 hover:text-spark-secondary hover:bg-white/5'}`}
              >
                Portfolio
              </Link>
              <Link 
                to="/faq"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/faq') ? 'text-white bg-white/10' : 'text-gray-300 hover:text-spark-secondary hover:bg-white/5'}`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 ${isActive('/contact') ? 'bg-spark-primary text-white' : 'bg-white/10 hover:bg-spark-primary hover:text-white'}`}
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;