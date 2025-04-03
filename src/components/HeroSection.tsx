'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-right overflow-hidden min-h-[90vh] flex items-center" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20" />
        <div className="h-full w-full bg-[url('/patterns/barber-pattern.svg')] bg-repeat opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                <span className="text-primary">idan</span> - מספרה מוביל בישראל
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                חווית לקוח מושלמת בכל ביקור. אנו מתמחים בעיצוב שיער מקצועי, תספורות אופנתיות וטיפולי שיער מתקדמים.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg"
                onClick={() => console.log('Appointment button clicked')}
              >
                קבע תור עכשיו
              </motion.button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/barbershop-hero.jpg"
                alt="idan מספרה"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 right-6 bg-white/90 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-primary text-lg">idan</p>
                <p className="text-gray-700">מספרה מקצועית</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center md:justify-between mt-16 gap-6"
        >
          {['תספורות מודרניות', 'עיצוב זקן', 'טיפולי שיער', 'אווירה נעימה'].map((feature, index) => (
            <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 rounded-full bg-primary mr-3" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;