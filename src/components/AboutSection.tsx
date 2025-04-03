'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaScissors, FaGraduationCap } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-secondary-light" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 relative"
          >
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary rounded-full opacity-20"></div>
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg border-r-4 border-primary">
              <div className="flex items-center mb-6">
                <FaScissors className="text-primary text-3xl ml-4" />
                <h2 className="text-3xl font-bold text-gray-800">מי אנחנו</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                אנחנו מספרה מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <div className="flex items-center">
                <FaGraduationCap className="text-primary text-2xl ml-2" />
                <span className="text-gray-600 font-medium">מומחים בתחום החינוך</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-40">
                <span className="text-4xl font-bold mb-2">+15</span>
                <span className="text-center">שנות ניסיון</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-40 border border-secondary">
                <span className="text-4xl font-bold mb-2 text-primary">100%</span>
                <span className="text-center text-gray-700">שביעות רצון</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-40 border border-secondary">
                <span className="text-4xl font-bold mb-2 text-primary">+500</span>
                <span className="text-center text-gray-700">לקוחות קבועים</span>
              </div>
              <div className="bg-secondary text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-40">
                <span className="text-4xl font-bold mb-2">24/7</span>
                <span className="text-center">תמיכה ושירות</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;