import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-b-1"></div>
      <div className="blur plans-b-2"></div>
      <div className="programs-headers">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOUNERY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* {Plans Cards} */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="benifits">
              <span>
                See more benifits <img src={RightArrow} alt="" />{" "}
              </span>
            </div>
            <button className="btn">
                Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
