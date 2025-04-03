'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaScissors, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

// Define the types for our haircut styles
type HaircutStyle = 'all' | 'fade' | 'pompadour' | 'crew' | 'undercut' | 'classic';

// Define the type for our portfolio items
interface PortfolioItem {
  id: number;
  image: string;
  style: HaircutStyle;
  title: string;
}

const PortfolioGallery: React.FC = () => {
  // Sample portfolio data - replace with your actual data
  const portfolioData: PortfolioItem[] = [
    { id: 1, image: '/haircuts/fade1.jpg', style: 'fade', title: 'פיידינג קלאסי' },
    { id: 2, image: '/haircuts/pompadour1.jpg', style: 'pompadour', title: 'פומפדור מודרני' },
    { id: 3, image: '/haircuts/crew1.jpg', style: 'crew', title: 'קרו קאט מדויק' },
    { id: 4, image: '/haircuts/undercut1.jpg', style: 'undercut', title: 'אנדרקאט עם פן' },
    { id: 5, image: '/haircuts/classic1.jpg', style: 'classic', title: 'תספורת קלאסית' },
    { id: 6, image: '/haircuts/fade2.jpg', style: 'fade', title: 'היי פיידינג' },
    { id: 7, image: '/haircuts/pompadour2.jpg', style: 'pompadour', title: 'פומפדור גבוה' },
    { id: 8, image: '/haircuts/classic2.jpg', style: 'classic', title: 'תספורת אלגנטית' },
  ];

  // State for filtered items and active filter
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioData);
  const [activeFilter, setActiveFilter] = useState<HaircutStyle>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter categories
  const filterCategories: { value: HaircutStyle; label: string }[] = [
    { value: 'all', label: 'הכל' },
    { value: 'fade', label: 'פיידינג' },
    { value: 'pompadour', label: 'פומפדור' },
    { value: 'crew', label: 'קרו קאט' },
    { value: 'undercut', label: 'אנדרקאט' },
    { value: 'classic', label: 'קלאסי' },
  ];

  // Filter function
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(portfolioData);
    } else {
      const filtered = portfolioData.filter(item => item.style === activeFilter);
      setFilteredItems(filtered);
    }
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (style: HaircutStyle) => {
    setActiveFilter(style);
    setIsFilterOpen(false);
  };

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="portfolio-gallery rtl bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הגלריה שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            הצצה לעבודות האחרונות שלנו. אנו מתמחים במגוון סגנונות תספורת, מהקלאסי ועד למודרני ביותר.
          </p>
        </div>

        {/* Filter Section - Mobile */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <span className="flex items-center">
              <FaFilter className="ml-2 text-primary" />
              <span>סנן לפי: {filterCategories.find(cat => cat.value === activeFilter)?.label}</span>
            </span>
            <span className={`transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {isFilterOpen && (
            <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              {filterCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleFilterChange(category.value)}
                  className={`block w-full text-right px-4 py-3 hover:bg-gray-50 transition-colors ${
                    activeFilter === category.value ? 'bg-primary/10 text-primary font-medium' : ''
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter Section - Desktop */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleFilterChange(category.value)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.value
                    ? 'bg-primary text-white font-medium'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="gallery-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x300?text=תמונה+לא+זמינה';
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <div className="flex items-center text-primary">
                      <FaScissors className="text-sm" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-secondary/20 text-secondary text-xs px-3 py-1 rounded-full">
                      {filterCategories.find(cat => cat.value === item.style)?.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">לא נמצאו תוצאות עבור הסינון הנוכחי.</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                הצג הכל
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioGallery;