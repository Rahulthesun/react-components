import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Topbar from '../components/TopBar';


// Navigation link interface
interface NavLink {
  href: string;
  label: string;
}

// Navigation component props
interface NavigationProps {
  links?: NavLink[];
  logoSrc?: string;
  logoAlt?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#franchise', label: 'Franchise' },
  ],
  logoSrc = 'assets/images/logo-v2.png',
  logoAlt = 'Mr.Gloss Ceramic Coating Logo'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#001a00] backdrop-blur-md border-b border-white/10">
      <Topbar />
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="max-w-[180px] h-auto flex items-center">
            <img
              className="w-full max-h-16 object-contain"
              src={logoSrc}
              alt={logoAlt}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-400 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;