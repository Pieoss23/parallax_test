import React, { useRef } from "react";
// import { useParallax } from "react-scroll-parallax";
import "./App.css";
const HeroSection = () => {
  const target = useRef(null);
  return (
    <>
      <div
        ref={target}
        style={{
          backgroundImage: "url('./img/snow.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "3000px",
        }}
        className="h-screen"
      >
        <div className="fixed top-10 left-40">
          <img alt="bunny" src="./img/bunny.png" height={120} width={120} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
