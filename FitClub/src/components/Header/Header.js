import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />

      <ul className="header-menu">
        <li>
          <Link to="home" span={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" span={true} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reasons" span={true} smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" span={true} smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonials" span={true} smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
