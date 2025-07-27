import React from "react";
import "./Hero.css";
import { Typewriter } from 'react-simple-typewriter';
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Faizytech World 🚀</h1>
        <p>
          <Typewriter
            words={['Frontend Developer', 'React Enthusiast', 'Loves Clean UI ✨']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <p>Building your digital dream with clean code and bold UI.</p>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Hero Visual" />
      </div>
    </section>
  );
};

export default Hero;
