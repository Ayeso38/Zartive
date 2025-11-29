import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', value: 'portfolio' },
    { name: 'Pricing', value: 'pricing' },
    { name: 'About', value: 'about' },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#f3f4ef]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="w-8 h-8 bg-ph-orange rounded flex items-center justify-center text-white mr-2 transform group-hover:rotate-12 transition-transform">
              <Camera size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-ph-dark">Lens & Light</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNav(link.value)}
                className={`text-sm font-semibold transition-colors ${
                  currentPage === link.value ? 'text-ph-orange' : 'text-gray-600 hover:text-ph-dark'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNav('booking')}
              className="bg-ph-dark text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-ph-orange transition-colors shadow-sm"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-ph-dark focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#f3f4ef] border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNav(link.value)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.value
                    ? 'text-ph-orange bg-orange-50'
                    : 'text-gray-700 hover:text-ph-dark hover:bg-gray-100'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNav('booking')}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-ph-dark hover:bg-ph-orange mt-4"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
