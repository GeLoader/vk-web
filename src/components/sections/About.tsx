import React from 'react';
import { Clock, Users, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">About Kosher Trust</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            A legacy of excellence in kosher certification since 1985.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Kosher Trust, our mission is to uphold the highest standards of kosher certification, ensuring that consumers can confidently make choices aligned with Jewish dietary laws. We combine traditional knowledge with modern expertise to serve the global kosher community.
            </p>
            
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our History</h3>
            <p className="text-gray-600 mb-6">
              Founded in 1985 by Rabbi Joseph Goldberg, Kosher Trust began as a small local certification agency in Brooklyn. Over the decades, we have grown into a globally recognized authority in kosher certification, serving thousands of companies across six continents.
            </p>
            
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Approach</h3>
            <p className="text-gray-600">
              We believe in a collaborative approach to kosher certification. Our team works closely with manufacturers to implement kosher systems that maintain the highest level of integrity while being practical and sustainable for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">30+ Years</h4>
              <p className="text-gray-300">Three decades of excellence in kosher certification</p>
            </div>
            
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">Global Team</h4>
              <p className="text-gray-300">Expert rabbis and food specialists worldwide</p>
            </div>
            
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">5,000+ Products</h4>
              <p className="text-gray-300">Thousands of certified products globally</p>
            </div>
            
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">Trusted Authority</h4>
              <p className="text-gray-300">Recognized by Jewish communities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;