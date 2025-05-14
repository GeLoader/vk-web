import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7709304/pexels-photo-7709304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
        }}
      >
        <div className="absolute inset-0 bg-navy bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Highest Standard in Kosher Certification
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Ensuring the integrity of kosher products through rigorous inspection, thorough analysis, and unwavering commitment to Jewish dietary laws.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a 
              href="#services" 
              className="bg-gold text-navy font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 text-center"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 text-center"
            >
              Get Certified
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>Globally recognized certification</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>Rigorous inspection process</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>30+ years of expertise</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-gold mr-2" />
              <span>Thousands of certified products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;