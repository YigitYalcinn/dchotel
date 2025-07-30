import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import ReservationPage from '../components/ReservationPage';
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  return (
    <>
   {/* Hero Section */}
<div className="my-10 h-screen relative bg-[#131212] overflow-hidden">

  {/* Arka plan transparan görsel */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/img/bgbg.jpeg')", opacity: 0.05 }}
  />

  {/* Soldaki oda görseli - sadece md ve üstü */}
  <div className="hidden md:block absolute top-1/2 left-[6%] -translate-y-1/2 w-[750px] h-[500px] rounded-3xl overflow-hidden shadow-lg z-10">
    <img
      src="/img/firstpageleft.jpeg"
      alt="Oda"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Sağdaki Slogan Yazı - sadece md ve üstü */}
  <div className="hidden md:block absolute right-[2%] top-[40%] -translate-y-1/2 text-white text-right z-20">
    <img 
      src="/img/logo1.png" 
      alt="DC& HOTEL" 
      className="w-[500px] h-auto transform rotate-90"
    />
  </div>

  {/* Ortada ama sola yakın rezervasyon kutusu - sadece md ve üstü */}
  <div className="hidden md:block absolute top-[62%] left-[52%] z-30 w-[600px] h-[280px] bg-black/30 backdrop-blur-lg border border-white/20 rounded-xl px-12 py-10 shadow-2xl">
    <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
      Odanızı Ayırın
    </p>
    <h2 className="text-2xl font-bold text-white mb-6 font-mono leading-snug">
      Eşsiz maceranız sizi bekliyor, <br /> rezervasyonunuzu yaptırın
    </h2>

    <button
      onClick={() => navigate("/reservation")}
      className="px-10 py-4 bg-white text-black text-lg font-semibold rounded-md relative overflow-hidden border border-black group"
    >
      <span className="relative z-20 group-hover:text-white transition-colors duration-700">
        HEMEN YERİNİZİ AYIRIN
      </span>
      <span className="absolute inset-0 bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 z-10"></span>
      <span className="absolute inset-0 rounded-md border border-black pointer-events-none z-30"></span>
    </button>
  </div>



  {/* Mobil versiyonu - md altı görünür */}
  <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 md:hidden">
    <div className="w-full rounded-2xl overflow-hidden shadow-lg h-40">
      <img
        src="/img/firstpageleft.jpeg"
        alt="Oda"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-2xl w-full max-w-sm">
      <p className="text-xs uppercase tracking-widest text-white/80 mb-2 text-center">
        {t("hero.reserveRoom")}
      </p>
      <h2 className="text-lg font-bold text-white mb-4 text-center font-mono leading-tight">
        {t("hero.mainTitle")}
      </h2>
      <button
        onClick={() => navigate("/reservation")}
        className="mx-auto block px-6 py-3 bg-white text-black text-sm font-semibold rounded-md border border-black hover:bg-gray-200 transition"
      >
        {t("hero.reserveButton")}
      </button>
    </div>

    <img 
      src="/img/logo1.png" 
      alt="DC& HOTEL" 
      className="h-16 w-auto mt-4"
    />
  </div>
</div>



{/* --------------------- */}

<section className="w-full bg-white px-4 sm:px-6 md:px-20 py-12 sm:py-16">

  {/* Masaüstü versiyonu - md ve üstü görünür */}
  <div className="hidden md:flex max-w-screen-xl mx-auto flex-col lg:flex-row items-center gap-12">
    
    {/* Sol Metin Alanı */}
    <div className="w-full lg:w-1/2 max-w-lg">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1b1b1b] leading-tight mb-6">
        {t("intro.title")}
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
        {t("intro.description")}
      </p>
      <button className="relative px-12 py-5 bg-white text-black font-helvetica font-bold text-lg rounded-md overflow-hidden border border-black/ group">
        <span className="relative z-20 transition-colors duration-700 group-hover:text-white ">
          {t("intro.button")}
        </span>

        <span className="absolute inset-0 bg-[#131212] origin-left scale-x-0 transition-transform duration-1000 ease-in-out group-hover:scale-x-100 z-10"></span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-md border border-black z-30"
        ></span>

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none rounded-md z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 180 50"
        >
          <rect
            x="1"
            y="1"
            width="178"
            height="48"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="356"
            strokeDashoffset="0"
            style={{ animation: 'dashmove 5s linear infinite' }}
          />
        </svg>

        <style jsx>{`
          @keyframes dashmove {
            100% {
              stroke-dashoffset: -356;
            }
          }
        `}</style>
      </button>
    </div>

    {/* Sağ Kartlar Alanı */}
    <div className="w-full lg:w-1/2 flex items-center gap-6 translate-x-16">
      {/* Büyük Kart */}
      <div className="w-[300px] md:w-[350px]">
        <Card
          title="MODERN STAY"
          subtitle="Lüks ve konforun buluşma noktası."
          description="Şehrin merkezinde huzurlu bir kaçamak için ideal seçim."
          bgImage="/img/kart1.jpeg"
          comments={10}
          date="21.08.2025"
        />
      </div>

      {/* İki Küçük Kart */}
      <div className="flex flex-col gap-6 translate-x-20">
        <div className="w-[250px] md:w-[280px]">
          <Card
            title="NATURE ROOM"
            subtitle="Doğayla iç içe huzurlu bir oda."
            description="Aydınlık, minimalist tasarımıyla ruhunuzu dinlendirin."
            bgImage="/img/kart3.jpg"
            comments={4}
            date="10.04.2025"
          />
        </div>
        <div className="w-[250px] md:w-[280px]">
          <Card
            title="WARM LOFT"
            subtitle="Sıcak ve zarif detaylarla donatılmış."
            description="Rustik dokunuşlarla modern yaşam alanı."
            bgImage="/img/kart2.jpeg"
            comments={6}
            date="30.09.2025"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Mobil versiyonu - sadece md altı görünür */}
  <div className="flex flex-col md:hidden max-w-screen-md mx-auto space-y-6 px-4">

    {/* Sol Metin Alanı */}
    <div>
      <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#1b1b1b] leading-tight mb-3 text-center">
        {t("intro.title")}
      </h2>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 text-center">
        {t("intro.description")}
      </p>
      <button className="w-full max-w-xs mx-auto block px-6 py-3 bg-white text-black text-sm font-bold rounded-md border border-black group overflow-hidden relative">
        <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
          {t("intro.button")}
        </span>
        <span className="absolute inset-0 bg-[#131212] origin-left scale-x-0 transition-transform duration-1000 ease-in-out group-hover:scale-x-100 z-10"></span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-md border border-black z-30"
        ></span>
      </button>
    </div>

    {/* Kartlar dikey, tam genişlik */}
    <div className="flex flex-col items-center gap-4 sm:gap-6">

      <div className="w-full max-w-sm">
        <Card
          title="MODERN STAY"
          subtitle="Lüks ve konforun buluşma noktası."
          description="Şehrin merkezinde huzurlu bir kaçamak için ideal seçim."
          bgImage="/img/kart1.jpeg"
          comments={10}
          date="21.08.2025"
        />
      </div>

      <div className="w-full max-w-sm">
        <Card
          title="NATURE ROOM"
          subtitle="Doğayla iç içe huzurlu bir oda."
          description="Aydınlık, minimalist tasarımıyla ruhunuzu dinlendirin."
          bgImage="/img/kart3.jpg"
          comments={4}
          date="10.04.2025"
        />
      </div>

      <div className="w-full max-w-sm">
        <Card
          title="WARM LOFT"
          subtitle="Sıcak ve zarif detaylarla donatılmış."
          description="Rustik dokunuşlarla modern yaşam alanı."
          bgImage="/img/kart2.jpeg"
          comments={6}
          date="30.09.2025"
        />
      </div>

    </div>
  </div>
</section>




<section className="relative w-full min-h-screen bg-[#131212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 2xl:px-48">
  <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 items-center justify-center">

    {/* Üst Kart + Sağındaki 2 Görsel */}
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl items-stretch">
      
      {/* Kart */}
      <div className="flex-1 border border-black rounded-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px]">
            <img src="/img/iskin.jpg" alt="Işkın" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {t("features.iskinTitle")}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {t("features.iskinDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Sağdaki 2 Görsel - sadece lg ve üstü */}
      <div className="hidden lg:flex flex-col gap-6 ">
        <img src="/img/iskin2.jpeg" alt="Sağ Görsel 1" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
        <img src="/img/iskin3.jpeg" alt="Sağ Görsel 2" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
      </div>

      {/* Tablet için ek görseller */}
      <div className="lg:hidden flex flex-row gap-4 mt-4 sm:mt-6">
        <img src="/img/iskin2.jpeg" alt="Sağ Görsel 1" className="w-1/2 h-24 sm:h-32 object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
        <img src="/img/iskin3.jpeg" alt="Sağ Görsel 2" className="w-1/2 h-24 sm:h-32 object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
      </div>
    </div>

    {/* Alt Kart + Solundaki 2 Görsel */}
    <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl items-stretch">
      
      {/* Kart */}
      <div className="flex-1 border border-black rounded-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px]">
            <img src="/img/resto.jpg" alt="Restaurant" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {t("features.restaurantTitle")}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {t("features.restaurantDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Soldaki 2 Görsel - sadece lg ve üstü */}
      <div className="hidden lg:flex flex-col gap-6">
        <img src="/img/yemek1.jpeg" alt="Sol Görsel 1" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
        <img src="/img/yemek2.jpeg" alt="Sol Görsel 2" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
      </div>

      {/* Tablet için ek görseller */}
      <div className="lg:hidden flex flex-row gap-4 mt-4 sm:mt-6">
        <img src="/img/yemek1.jpeg" alt="Sol Görsel 1" className="w-1/2 h-24 sm:h-32 object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
        <img src="/img/yemek2.jpeg" alt="Sol Görsel 2" className="w-1/2 h-24 sm:h-32 object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
      </div>
    </div>

  </div>
</section>




<div className="">
  <ReservationPage/>
</div>

<div id="iletisim" className="mt-8 scroll-mt-24">
  <Contact />
</div>
    </>
  
  );
};

export default Home;
