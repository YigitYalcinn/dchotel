import React from "react";

const Card = ({ bgImage }) => {
  return (
    <div
      className="blog-card relative w-[350px] h-[500px] rounded-lg overflow-hidden cursor-pointer shadow-[3px_3px_20px_rgba(0,0,0,0.5)] group
        transition-transform duration-300 ease-out
        hover:brightness-110 hover:shadow-[0_-60px_80px_-40px_rgba(255,255,255,0.3)]
        hover:scale-105 hover:translate-x-2 hover:-translate-y-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Renk ve gradient overlayler kalsın */}
      <div className="color-overlay absolute inset-0 bg-[rgba(127,132,133,0.4)] transition-colors duration-300 group-hover:bg-[rgba(186,191,193,0.5)] z-10"></div>
      <div
        className="gradient-overlay absolute left-0 top-[350px] w-full h-[150px] z-15"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 21%)",
        }}
      ></div>
    </div>
  );
};

export default Card;
