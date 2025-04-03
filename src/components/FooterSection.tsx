'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
    // Add actual implementation for newsletter subscription
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Idan Barbershop" 
                width={150} 
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              מספרת אידן - המקום המושלם לעיצוב שיער ברמה הגבוהה ביותר. אנו מתמחים בתספורות גברים, עיצוב זקן וטיפולי שיער מתקדמים.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  השירותים שלנו
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  גלריה
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-gray-400 hover:text-primary transition-colors">
                  מחירון
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">פרטי התקשרות</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-primary ml-2" />
                <span className="text-gray-400">רחוב הראשי 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary ml-2" />
                <a href="tel:+972501234567" className="text-gray-400 hover:text-primary transition-colors">
                  050-123-4567
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary ml-2" />
                <a href="mailto:info@idanbarbershop.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@idanbarbershop.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-secondary">שעות פעילות:</h4>
              <p className="text-gray-400">ראשון - חמישי: 9:00 - 20:00</p>
              <p className="text-gray-400">שישי: 9:00 - 15:00</p>
              <p className="text-gray-400">שבת: סגור</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">הישארו מעודכנים</h3>
            <p className="text-gray-400 mb-4">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים מיוחדים ואירועים
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הזינו את האימייל שלכם"
                  required
                  className="py-2 px-4 w-full text-gray-800 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="rtl"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-l-md transition-colors"
                >
                  הרשמה
                </button>
              </div>
              <p className="text-xs text-gray-500">
                * לא נשתף את המידע שלך עם אף גורם שלישי
              </p>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} מספרת אידן. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-4 space-x-reverse text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;