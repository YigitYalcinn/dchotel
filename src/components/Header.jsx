import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false); // mobilde menü kapansın dil değişince
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false); // sayfa değişince mobil menüyü kapat
  }, [location.pathname]);

  const handleNavigate = (to) => {
    if (location.pathname !== to) {
      navigate(to);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleScrollNavigate = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 600,
          offset: -100,
        });
      }, 400);
    } else {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 600,
        offset: -100,
      });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { to: "/", label: t("header.menu.home"), type: "route" },
    { to: "/reservation", label: t("header.menu.rooms"), type: "route" },
    { to: "iletisim", label: t("header.menu.contact"), type: "scroll" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white text-black shadow-md h-[7vh]"
          : "bg-[#131212] text-white h-[9vh]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-full flex items-center justify-between transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div
          className={`font-bold tracking-wide transition-all duration-300 ease-in-out ${
            scrolled ? "text-2xl text-black" : "text-4xl text-white"
          }`}
        >
          <button
            onClick={() => handleNavigate("/")}
            className="block focus:outline-none"
          >
            <img 
              src={scrolled ? "/img/logo2.png" : "/img/logo1.png"}
              alt="DC& HOTEL" 
              className={scrolled ? "h-14 w-auto" : "h-10 w-auto"}
            />
          </button>
        </div>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex pr-12 gap-8 text-lg font-semibold">
          {menuItems.map(({ to, label, type }, i) =>
            type === "route" ? (
              <button
                key={i}
                onClick={() => handleNavigate(to)}
                className={`
                  relative px-3 py-1 transition-all duration-300 ease-in-out
                  ${scrolled ? "text-black hover:text-gray-700" : "text-gray-300 hover:text-white"}
                  hover:scale-[1.05]
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:h-[2px] after:w-0 hover:after:w-full
                  ${scrolled ? "after:bg-black" : "after:bg-white"}
                  after:transition-all after:duration-300 after:ease-in-out
                `}
              >
                {label}
              </button>
            ) : (
              <button
                key={i}
                onClick={() => handleScrollNavigate(to)}
                className={`
                  cursor-pointer relative px-3 py-1 transition-all duration-300 ease-in-out
                  ${scrolled ? "text-black hover:text-gray-700" : "text-gray-300 hover:text-white"}
                  hover:scale-[1.05]
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:h-[2px] after:w-0 hover:after:w-full
                  ${scrolled ? "after:bg-black" : "after:bg-white"}
                  after:transition-all after:duration-300 after:ease-in-out
                `}
              >
                {label}
              </button>
            )
          )}
        </nav>

        {/* Bayraklar - masaüstü */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { src: "/img/turkey.png", alt: "TR", code: "tr" },
            { src: "/img/united-kingdom.png", alt: "EN", code: "en" },
            { src: "/img/germany.png", alt: "DE", code: "de" },
            { src: "/img/russia.png", alt: "RU", code: "ru" },
          ].map(({ src, alt, code }, i) => (
            <button key={i} onClick={() => changeLanguage(code)}>
              <img
                src={src}
                alt={alt}
                className="w-10 h-10 object-cover rounded-sm"
              />
            </button>
          ))}
        </div>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Mobil Menü Aç/Kapat"
        >
          {mobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobil Menü Açılır Kısım */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-lg absolute top-full left-0 w-full border-t border-gray-200 z-50">
          <nav className="flex flex-col p-4 gap-4">
            {menuItems.map(({ to, label, type }, i) =>
              type === "route" ? (
                <button
                  key={i}
                  onClick={() => handleNavigate(to)}
                  className="text-left px-4 py-2 font-semibold hover:bg-gray-100 rounded"
                >
                  {label}
                </button>
              ) : (
                <button
                  key={i}
                  onClick={() => handleScrollNavigate(to)}
                  className="text-left px-4 py-2 font-semibold hover:bg-gray-100 rounded"
                >
                  {label}
                </button>
              )
            )}
            {/* Mobil Bayraklar */}
            <div className="flex justify-center gap-6 mt-4">
              {[
                { src: "/img/turkey.png", alt: "TR", code: "tr" },
                { src: "/img/united-kingdom.png", alt: "EN", code: "en" },
                { src: "/img/germany.png", alt: "DE", code: "de" },
                { src: "/img/russia.png", alt: "RU", code: "ru" },
              ].map(({ src, alt, code }, i) => (
                <button
                  key={i}
                  onClick={() => changeLanguage(code)}
                  className="focus:outline-none"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-8 h-8 object-cover rounded-sm"
                  />
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
