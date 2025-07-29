import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            {t('contact.header.title')}
          </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t('contact.header.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
          {/* Left Side - Contact Information */}
          <div className="space-y-10 sm:space-y-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-8 tracking-wide">
                {t('contact.infoSection.title')}
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4 sm:space-x-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 sm:mb-3 text-base sm:text-lg">{t('contact.infoSection.address.title')}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-lg font-light">
                      {t('contact.infoSection.address.text')}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 sm:space-x-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 sm:mb-3 text-base sm:text-lg">{t('contact.infoSection.phone.title')}</h3>
                    <p className="text-gray-300 text-sm sm:text-lg font-light">{t('contact.infoSection.phone.text')}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 sm:space-x-6 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                    <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 sm:mb-3 text-base sm:text-lg">{t('contact.infoSection.hours.title')}</h3>
                    <p className="text-gray-300 font-light text-sm sm:text-lg">{t('contact.infoSection.hours.text')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white text-black rounded-3xl p-6 sm:p-10 hover:bg-gray-100 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-light mb-4 tracking-wide">{t('contact.quickContact.title')}</h3>
              <p className="mb-6 sm:mb-8 text-gray-700 font-light text-sm sm:text-lg leading-relaxed">{t('contact.quickContact.description')}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+0428 502 8282"
                  className="bg-black hover:bg-gray-800 text-white transition-colors duration-300 px-6 sm:px-8 py-3 rounded-2xl font-light text-base inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {t('contact.quickContact.call')}
                </a>
                <a
                  href="https://wa.me/905378992165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 text-black transition-colors duration-300 px-6 sm:px-8 py-3 rounded-2xl font-light text-base inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  {t('contact.quickContact.whatsapp')}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="p-6 sm:p-8 border-b border-white/10">
                <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide">{t('contact.location.title')}</h2>
                <p className="text-gray-300 mt-3 font-light text-sm sm:text-lg">{t('contact.location.description')}</p>
              </div>

              {/* Google Maps Embed */}
              <div className="relative h-64 sm:h-80 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.3968565289347!2d39.21277837651828!3d39.3570116716296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40709312623a4ed7%3A0x1845da7b0551ac0b!2sDC%20Hotel!5e1!3m2!1str!2str!4v1753803089712!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DC Hotel Konumu"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 bg-white/5"></div>
            </div>
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 tracking-wide">{t('contact.socialMedia.title')}</h3>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-12"></div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/905378992165"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 sm:space-x-4 bg-white hover:bg-gray-100 text-black px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-light text-lg sm:text-xl tracking-wide">{t('contact.quickContact.whatsapp')}</span>
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/dchotelovacik?igsh=NXFxYWJ5cDJkdDM4"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 sm:space-x-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 sm:px-12 py-4 sm:py-6 rounded-full backdrop-blur-sm transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-light text-lg sm:text-xl tracking-wide">Instagram</span>
            </a>
          </div>

          <p className="text-gray-400 mt-10 sm:mt-12 font-light text-base sm:text-lg max-w-xl mx-auto">
            {t('contact.socialMedia.news')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
