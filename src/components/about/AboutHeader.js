import React from "react";
import "./aboutHeader.css";
import { Link } from "react-router-dom";
import img1 from "../../Imges/asset 7.png";
import img2 from "../../Imges/asset 8.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AboutHeader(props) {
  return (
    <div className="about-header">
      <div className="container">
        <div className={`cont ${props.langs}`}>
          <h2 className={`${props.langs}`}>
            {props.langs === "ar" ? "About Agency" : "حول الوكالة"}
          </h2>
          <div className="link">
            <Link to={"/"} className={`${props.langs}`}>
              {props.langs === "ar" ? "Home" : "الرئيسية"}
              <FontAwesomeIcon className="i" icon={faArrowRight} />
            </Link>
            <h6 className={`${props.langs}`}>
              {props.langs === "ar" ? "About Agency" : "حول الوكالة"}
            </h6>
          </div>
          <div className="img1">
            <img src={img1} alt="..." />
          </div>
          <div className="img2">
            <img src={img2} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
