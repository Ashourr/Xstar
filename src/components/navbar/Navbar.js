import {
  faArrowRight,
  faBars,
  faPhoneVolume,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import imgNav from "../../Imges/asset 0.png";
import "./navbar.css";
function Navbar(props) {
  let [opne, setopne] = useState(false);
  let [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    let handlScroll = () => {
      if (window.scrollY > 70) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);
  return (
    <div
      className={`nav-bar  fixed-top w-100 ${props.langs} ${
        scrolled && "backriund"
      }`}
    >
      <div className="container  pe-3 ps-3 p-lg-0 ">
        <nav className={`navbar  navbar-expand-lg ${scrolled && "backriund"}`}>
          <Link to={"/"} className="navbar-brand" href="index.html">
            <img src={imgNav} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mian"
            aria-controls="mian"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => (opne ? setopne(false) : setopne(true))}
          >
            {opne ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div className="collapse navbar-collapse" id="mian">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/"}
                  className={`nav-link ${props.langs}`}
                  aria-current="page"
                  href="#home"
                >
                  <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
                  {props.langs === "ar" ? "Home" : "الرئيسيه"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/about"}
                  className={`nav-link ${props.langs}`}
                  href="#Contact"
                >
                  <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
                  {props.langs === "ar" ? " About Us" : "معلومات عنا"}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/study"}
                  className={`nav-link ${props.langs}`}
                  href="#Protfolio"
                >
                  <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
                  {props.langs === "ar" ? "Protfolio" : "الملف الشخصي"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/blog"}
                  className={`nav-link ${props.langs}`}
                  href="#Contact"
                >
                  <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
                  {props.langs === "ar" ? "Blog" : "مدونة"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/service"}
                  className={`nav-link ${props.langs}`}
                  href="#about"
                >
                  <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
                  {props.langs === "ar" ? "Services" : "خدمات"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to={"/contact"}
                  className={`nav-link ${props.langs}`}
                  href="#Contact"
                >
                  <FontAwesomeIcon className="link-icon" icon={faArrowRight} />
                  {props.langs === "ar" ? "Contact Us" : "اتصل بنا"}
                </NavLink>
              </li>
            </ul>
            <div className="register">
              <div className="nav-phone">
                <div>
                  <FontAwesomeIcon
                    className="phone-icon"
                    icon={faPhoneVolume}
                  />
                </div>
                <p>+208-555-0112</p>
              </div>
              <button className="but-lang" onClick={props.lang}>
                {props.langs === "en" ? "en" : "ar"}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
