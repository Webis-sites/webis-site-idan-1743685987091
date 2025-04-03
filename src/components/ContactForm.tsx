'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section dir="rtl" className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">צור קשר</h2>
          <p className="text-lg text-gray-600">
            מעוניינים בתספורת חדשה או יש לכם שאלה? השאירו פרטים ונחזור אליכם בהקדם.
            במספרת עידן אנחנו מחויבים לשירות מקצועי ואישי.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                שם מלא
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  id="name"
                  type="text"
                  {...register("name", { required: "שדה חובה" })}
                  className={`block w-full pr-10 py-3 text-right border-gray-300 rounded-md focus:ring-primary focus:border-primary ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="ישראל ישראלי"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                טלפון
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  id="phone"
                  type="tel"
                  {...register("phone", { 
                    required: "שדה חובה",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "נא להזין מספר טלפון תקין (10 ספרות)"
                    }
                  })}
                  className={`block w-full pr-10 py-3 text-right border-gray-300 rounded-md focus:ring-primary focus:border-primary ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="050-1234567"
                  dir="ltr"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              אימייל
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                id="email"
                type="email"
                {...register("email", { 
                  required: "שדה חובה",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "כתובת אימייל לא תקינה"
                  }
                })}
                className={`block w-full pr-10 py-3 text-right border-gray-300 rounded-md focus:ring-primary focus:border-primary ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="your@email.com"
                dir="ltr"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              הודעה
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute top-3 right-0 pr-3 flex items-start pointer-events-none">
                <FiMessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                id="message"
                rows={4}
                {...register("message", { required: "שדה חובה" })}
                className={`block w-full pr-10 py-3 text-right border-gray-300 rounded-md focus:ring-primary focus:border-primary ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder="כתוב את ההודעה שלך כאן..."
              />
            </div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 disabled:opacity-70"
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <FiSend className="ml-2" />
              )}
              {isSubmitting ? 'שולח...' : 'שלח הודעה'}
            </motion.button>
          </div>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-50 text-green-700 rounded-md text-center"
            >
              תודה! ההודעה נשלחה בהצלחה. נחזור אליך בהקדם.
            </motion.div>
          )}
        </form>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            ניתן גם ליצור קשר ישירות בטלפון: <span dir="ltr" className="font-medium">050-1234567</span>
          </p>
          <p className="text-sm mt-1">
            שעות פעילות: א'-ה' 9:00-20:00, ו' 9:00-14:00
          </p>
        </div>
      </div>
    </section>
  );
}