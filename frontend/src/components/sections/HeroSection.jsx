import React from "react";
// Import your images
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";

const images = [
  s1,
  s2,
  s3,
  s4,
  s5,
  ];

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-gray-100 overflow-hidden flex items-center justify-center">
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/50"></div>

      {/* Scrolling images */}
      <div className="relative w-full h-full">
        <div className="mt-26 h-10 flex animate-scroll gap-6">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`s ${idx}`}
              className="h-100 w-auto rounded-lg shadow-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Hero Text */}
      {/* <div className="absolute z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-2">
          Explore Our Campus
        </h1>
        <p className="text-lg md:text-xl font-roboto">
          Discover student life, programs, and research opportunities.
        </p>
      </div> */}

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
