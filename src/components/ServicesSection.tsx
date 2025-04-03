import React from 'react';
import { FaCut, FaRazor, FaSprayCan, FaChild, FaRegClock, FaUserTie } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-b-4 border-primary">
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCut />,
      title: "תספורת מקצועית",
      description: "תספורת מותאמת אישית לפי מבנה הפנים והסגנון האישי שלך, על ידי הספרים המנוסים שלנו."
    },
    {
      icon: <FaRazor />,
      title: "עיצוב זקן",
      description: "עיצוב וטיפוח זקן מקצועי, כולל גילוח מדויק וטיפול בקווי מתאר."
    },
    {
      icon: <FaSprayCan />,
      title: "צבע ועיצוב שיער",
      description: "שירותי צביעה מקצועיים עם מוצרים איכותיים לשמירה על בריאות השיער."
    },
    {
      icon: <FaChild />,
      title: "תספורות ילדים",
      description: "תספורות ידידותיות לילדים באווירה נעימה ומזמינה."
    },
    {
      icon: <FaRegClock />,
      title: "טיפולים מהירים",
      description: "שירותים מהירים לאנשים עסוקים, ללא פשרות על איכות."
    },
    {
      icon: <FaUserTie />,
      title: "חבילות חתן",
      description: "חבילות מיוחדות לחתנים הכוללות טיפולי פנים, תספורת ועיצוב זקן."
    }
  ];

  return (
    <section className="py-16 bg-light-bg" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            במספרת עידן אנו מציעים מגוון רחב של שירותי ספרות מקצועיים ברמה הגבוהה ביותר, 
            בסביבה נעימה ומזמינה.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;