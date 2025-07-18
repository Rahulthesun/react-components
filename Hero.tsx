import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url('/assets/images/Car-Hero.jpg')` }}
    >
      {/* Overlay */}
      <div className="h-auto absolute inset-0 bg-black/40 z-0"/>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl">

        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="block text-white">PREMIUM</span>
          <span className="block text-green-400">PROTECTION</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Experience the ultimate in automotive protection with our comprehensive ceramic coating and detailing solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Join Franchise
          </button>
          <button className="border border-green-400 hover:bg-green-700 text-green-400 font-bold py-3 px-6 rounded-full transition duration-300">
            Book Service
          </button>
        </div>

        <p className="mt-10 text-green-400 text-sm animate-bounce">
          ↓ Scroll down to explore our services
        </p>
      </div>
    </section>
  );
};

export default Hero;
