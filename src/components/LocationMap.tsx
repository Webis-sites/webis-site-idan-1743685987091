import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaDirections } from 'react-icons/fa';

interface LocationMapProps {
  address: string;
  phone: string;
  hours: {
    day: string;
    time: string;
  }[];
  mapUrl?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  address = 'רחוב הרצל 123, תל אביב',
  phone = '03-1234567',
  hours = [
    { day: 'ראשון - חמישי', time: '9:00 - 20:00' },
    { day: 'שישי', time: '9:00 - 14:00' },
    { day: 'שבת', time: 'סגור' }
  ],
  mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=tel+aviv&zoom=13&size=600x300&key=YOUR_API_KEY'
}) => {
  return (
    <section className="location-map-section bg-white py-12 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">המיקום שלנו</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="map-container h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
            {mapUrl ? (
              <img 
                src={mapUrl} 
                alt="מפת המיקום של מספרת עידן" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                <span className="text-primary font-medium">טוען מפה...</span>
              </div>
            )}
          </div>
          
          {/* Info */}
          <div className="info-container bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6">מספרת עידן</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">כתובת</h4>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-3">
                <FaClock className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">שעות פעילות</h4>
                  <ul className="text-gray-600 space-y-1">
                    {hours.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span className="font-medium">{item.day}</span>
                        <span>{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <FaPhone className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">טלפון</h4>
                  <p className="text-gray-600">
                    <a href={`tel:${phone.replace(/-/g, '')}`} className="hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8">
              <a 
                href="https://maps.google.com/?q=tel+aviv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors w-full"
              >
                <FaDirections className="text-lg" />
                <span>הגעה למספרה</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;