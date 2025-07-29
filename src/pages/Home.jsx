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
<div className="my-10 h-screen relative">

  {/* Masaüstü versiyonu - sadece md ve üstü görünür */}
  <div className="desktop-only hidden md:block h-full  items-center justify-center overflow-hidden bg-[#131212] backdrop-brightness-75 relative">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bgbg.jpeg')", opacity: 0.05 }}
    />
    <div className="ml-24 absolute left-12 top-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-3xl overflow-hidden z-10 shadow-lg">
      <img
        src="/img/firstpageleft.jpeg"
        alt="Oda"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="absolute top-[55%] left-[850px] z-20">
      <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl px-20 py-12 shadow-2xl w-[700px] h-[300px]">
        <p className="text-sm uppercase tracking-widest text-white/80 mb-2 text-start">
          {t("hero.reserveRoom")}
        </p>
        <h2 className="text-3xl font-bold text-white mb-6 text-start font-mono">
          {t("hero.mainTitle")}
        </h2>

        <button
          onClick={() => navigate("/reservation")}
          className="mx-auto block relative px-12 py-5 bg-white text-black font-helvetica font-semibold text-lg rounded-md overflow-hidden border border-black group"
        >
          <span className="relative z-20 transition-colors duration-700 group-hover:text-white">
            {t("hero.reserveButton")}
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
    </div>

    <div className="absolute right-20 top-1/2 -translate-y-1/2 text-white text-right z-10">
      <h3 className="text-5xl font-bold leading-tight">
        TUNCELİ OVACIK DC<br /> HOTEL&RESTAURANT
      </h3>
    </div>
  </div>

  {/* Mobil versiyonu - md altı görünür */}
  <div className="mobile-only flex flex-col items-center justify-center space-y-6 p-4 md:hidden">
    <div className="w-full rounded-3xl overflow-hidden shadow-lg h-60">
      <img
        src="/img/firstpageleft.jpeg"
        alt="Oda"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-2xl w-full max-w-md">
      <p className="text-sm uppercase tracking-widest text-white/80 mb-2 text-center">
        {t("hero.reserveRoom")}
      </p>
      <h2 className="text-3xl font-bold text-white mb-6 text-center font-mono">
        {t("hero.mainTitle")}
      </h2>
      <button
        onClick={() => navigate("/reservation")}
        className="mx-auto block px-12 py-5 bg-white text-black font-semibold rounded-md border border-black hover:bg-gray-200 transition"
      >
        {t("hero.reserveButton")}
      </button>
    </div>

    <h3 className="text-3xl font-bold text-white text-center max-w-md mx-auto">
      D&C <br /> HOTEL&RESTAURANT
    </h3>
  </div>
</div>



{/* --------------------- */}

<section className="w-full bg-white px-6 md:px-20 py-16">

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
  <div className="flex flex-col md:hidden max-w-screen-md mx-auto space-y-8 px-4">

    {/* Sol Metin Alanı */}
    <div>
      <h2 className="text-3xl font-serif font-semibold text-[#1b1b1b] leading-tight mb-4 text-center">
        {t("intro.title")}
      </h2>
      <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">
        {t("intro.description")}
      </p>
      <button className="w-full max-w-xs mx-auto block px-8 py-4 bg-white text-black font-bold rounded-md border border-black group overflow-hidden relative">
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
    <div className="flex flex-col items-center gap-8">

      <div className="w-full max-w-xs">
        <Card
          title="MODERN STAY"
          subtitle="Lüks ve konforun buluşma noktası."
          description="Şehrin merkezinde huzurlu bir kaçamak için ideal seçim."
          bgImage="/img/kart1.jpeg"
          comments={10}
          date="21.08.2025"
        />
      </div>

      <div className="w-full max-w-xs">
        <Card
          title="NATURE ROOM"
          subtitle="Doğayla iç içe huzurlu bir oda."
          description="Aydınlık, minimalist tasarımıyla ruhunuzu dinlendirin."
          bgImage="/img/kart3.jpg"
          comments={4}
          date="10.04.2025"
        />
      </div>

      <div className="w-full max-w-xs">
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




<section className="relative w-full min-h-screen bg-[#131212] py-32 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-48">
  <div className="flex flex-col gap-24 items-center justify-center">

    {/* Üst Kart + Sağındaki 2 Görsel */}
    <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl items-stretch">
      
      {/* Kart */}
      <div className="flex-1 border border-black rounded-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-[400px]">
            <img src="/img/iskin.jpg" alt="Işkın" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("features.iskinTitle")}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t("features.iskinDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Sağdaki 2 Görsel */}
      <div className="hidden lg:flex flex-col gap-6 ">
        <img src="/img/iskin2.jpeg" alt="Sağ Görsel 1" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
        <img src="/img/iskin3.jpeg" alt="Sağ Görsel 2" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
      </div>
    </div>

    {/* Alt Kart + Solundaki 2 Görsel */}
    <div className="flex flex-col lg:flex-row-reverse gap-10 w-full max-w-7xl items-stretch">
      
      {/* Kart */}
      <div className="flex-1 border border-black rounded-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-[400px]">
            <img src="/img/resto.jpg" alt="Restaurant" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("features.restaurantTitle")}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t("features.restaurantDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Soldaki 2 Görsel */}
      <div className="hidden lg:flex flex-col gap-6">
        <img src="/img/yemek1.jpeg" alt="Sol Görsel 1" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
        <img src="/img/yemek2.jpeg" alt="Sol Görsel 2" className="w-[260px] h-[190px] object-cover rounded-2xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-[1.02] bg-white" />
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
