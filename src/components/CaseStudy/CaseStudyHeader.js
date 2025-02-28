import React from "react";
import "./CaseStudy.css";
import img1 from "../../Imges/asset 7.png";
import img2 from "../../Imges/asset 8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function CaseStudyHeader(props) {
  return (
    <div className="caseStudyHeader">
      <div className="container">
        <div className={`cont ${props.langs}`}>
          <h2 className={`${props.langs}`}>
            {props.langs === "ar" ? "Case Study Grid" : "شبكة دراسة الحالة"}
          </h2>
          <div className="link">
            <Link to={'/'} className={`${props.langs}`}>
              {props.langs === "ar" ? "Home" : "الرئيسية"}
              <FontAwesomeIcon className="i" icon={faArrowRight} />
            </Link>
            <h6 className={`${props.langs}`}>
              {props.langs === "ar" ? "Case Study Grid" : "شبكة دراسة الحالة"}
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

export default CaseStudyHeader;
