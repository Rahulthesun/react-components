import React from 'react';
import { Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-transparent border-b border-green-500/20 pt-4 pb-2 relative overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          
          {/* Left side - Social Icons & Phone */}
          <div className="flex items-center space-x-6">
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a 
                href="#" 
                className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
              >
                <Facebook size={12} />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
              >
                <Instagram size={12} />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
              >
                <Twitter size={12} />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
              >
                <Youtube size={12} />
              </a>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-2 text-green-400">
              <Phone size={10} />
              <span className="text-sm font-medium">+91 9999999999</span>
            </div>
          </div>

          {/* Right side - Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400 border border-green-500/50 rounded-full hover:bg-green-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30">
              Join Franchise
            </button>
            <button className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-900 bg-gradient-to-r from-green-500 to-green-400 border border-green-500 rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/40">
              Book Service
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Top row - Social Icons & Phone */}
          <div className="flex items-center justify-between mb-2">
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a 
                href="#" 
                className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300"
              >
                <Facebook size={10} />
              </a>
              <a 
                href="#" 
                className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300"
              >
                <Instagram size={10} />
              </a>
              <a 
                href="#" 
                className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300"
              >
                <Twitter size={10} />
              </a>
              <a 
                href="#" 
                className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all duration-300"
              >
                <Youtube size={10} />
              </a>
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-1.5 text-green-400">
              <Phone size={12} />
              <span className="text-xs font-medium">+91 9999999999</span>
            </div>
          </div>

          {/* Bottom row - Action Buttons */}
          <div className="flex items-center justify-center space-x-2">
            <button className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400 border border-green-500/50 rounded-full hover:bg-green-500 hover:text-gray-900 transition-all duration-300">
              Franchise
            </button>
            <button className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-900 bg-gradient-to-r from-green-500 to-green-400 border border-green-500 rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300">
              Book Service
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Topbar;  