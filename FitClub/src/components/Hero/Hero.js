import React from "react";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import "./Hero.css";
const Hero = () => {
  const transition = {type : 'spring', duration: 3};
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* {the best Add} */}
        <div className="the-best-add">
          <motion.div 
          initial = {{left :'238px'}}
          whileInView = {{left: '8px'}}
          transition = {{...transition,type:'tween'}}
          ></motion.div>
          <span>The best fitness club in the city</span>
        </div>

        {/* {Hero Text} */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your idea body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* {Figures} */}
        <div className="figures">
          <div>
            <span><NumberCounter start={100} end={140} preFix="+" delay='4'/></span>
            <span>Experct coaches</span>
          </div>
          <div>
            <span><NumberCounter start={100} end={978} preFix="+" delay='4'/></span>
            <span>members joinined</span>
          </div>
          <div>
            <span><NumberCounter start={0} end={50} preFix="+" delay='4'/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* {Hero button} */}
        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className="bth">Join Now </button>

        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* {Hero Images} */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />
        {/* {Calories} */}
        <motion.div 
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
