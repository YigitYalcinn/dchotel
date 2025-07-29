import React from 'react';
import { Wifi, Car, Coffee, Bath, Utensils, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface RoomFeature {
  icon: React.ReactNode;
  text: string;
}

interface Room {
  id: number;
  title: string;
  image: string;
  features: RoomFeature[];
}

export default function ReservationPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const rooms: Room[] = [
    {
      id: 1,
      title: t('rooms.single.title'),
      image: "public/img/tek.jpeg",
      features: [
        { icon: <Wifi className="w-4 h-4" />, text: t('rooms.single.features.wifi') },
        { icon: <Bath className="w-4 h-4" />, text: t('rooms.single.features.jacuzzi') },
        { icon: <Coffee className="w-4 h-4" />, text: t('rooms.single.features.minibar') },
        { icon: <Car className="w-4 h-4" />, text: t('rooms.single.features.valetParking') }
      ]
    },
    {
      id: 2,
      title: t('rooms.double.title'),
      image: "public/img/iki.jpeg",
      features: [
        { icon: <Wifi className="w-4 h-4" />, text: t('rooms.double.features.wifi') },
        { icon: <Utensils className="w-4 h-4" />, text: t('rooms.double.features.roomService') },
        { icon: <Coffee className="w-4 h-4" />, text: t('rooms.double.features.coffeeMaker') },
        { icon: <MapPin className="w-4 h-4" />, text: t('rooms.double.features.cityView') }
      ]
    },
    {
      id: 3,
      title: t('rooms.family.title'),
      image: "public/img/aile.jpeg",
      features: [
        { icon: <Wifi className="w-4 h-4" />, text: t('rooms.family.features.wifi') },
        { icon: <Bath className="w-4 h-4" />, text: t('rooms.family.features.privateBath') },
        { icon: <Coffee className="w-4 h-4" />, text: t('rooms.family.features.teaCoffee') },
        { icon: <Car className="w-4 h-4" />, text: t('rooms.family.features.freeParking') }
      ]
    }
  ];

  const handleReservation = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-4 tracking-wide">
              {t('roomSelection.title')}
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto">
              {t('roomSelection.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white border border-gray-200 hover:border-black transition-all duration-500 overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl rounded-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 sm:h-64 md:h-80 rounded-t-lg">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity duration-300 rounded-t-lg" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light text-black mb-4 sm:mb-6 tracking-wide group-hover:text-gray-700 transition-colors">
                  {room.title.toUpperCase()}
                </h3>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="text-gray-400 group-hover:text-black transition-colors">
                        {feature.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-light tracking-wide">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="flex items-end justify-end border-t border-gray-100 pt-4 sm:pt-6">
                  <button
                    onClick={handleReservation}
                    className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font-light tracking-widest text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-black hover:shadow-lg rounded"
                  >
                    {t('roomSelection.buttonReserve')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 tracking-wide">{t('experience.title')}</h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('experience.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-sm sm:text-base text-gray-400 font-light tracking-wide">
            <span>• {t('experience.services.concierge')}</span>
            <span>• {t('experience.services.freeCancellation')}</span>
            <span>• {t('experience.services.bestPrice')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
