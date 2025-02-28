import React from "react";
import "./CaseStudy.css";
import img1 from "../../Imges/asset 26.png";
import img2 from "../../Imges/asset 27.png";
import img3 from "../../Imges/asset 28.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function CaseStudy(props) {
  return (
    <div className={`caseStudy ${props.langs}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="itme">
              <div className="img">
                <img src={img1} alt="..." />
              </div>
              <div className="text">
                <Link className={`link ${props.langs}`}>
                  {props.langs === "en" ? "إبداعي" : "Creative"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? " 24 مارس 2024" : "MARCH 24, 2024 "}
                </p>
              </div>
              <Link className={`title ${props.langs}`}>
                {props.langs === "en"
                  ? "تحويل التحديات إلى"
                  : "Transforming Challenges into "}
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <div className="itme">
              <div className="img">
                <img src={img2} alt="..." />
              </div>
              <div className="text">
                <Link className={`link ${props.langs}`}>
                  {props.langs === "en" ? "إبداعي" : "Creative"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? " 24 مارس 2024" : "MARCH 24, 2024 "}
                </p>
              </div>
              <Link className={`title ${props.langs}`}>
                {props.langs === "en"
                  ? "تحويل التحديات إلى"
                  : "Transforming Challenges into "}
              </Link>
            </div>
          </div>
          <div className="col-12  col-md-6">
            {" "}
            <div className="itme">
              <div className="img">
                <img src={img3} alt="..." />
              </div>
              <div className="text">
                <Link className={`link ${props.langs}`}>
                  {props.langs === "en" ? "إبداعي" : "Creative"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? " 24 مارس 2024" : "MARCH 24, 2024 "}
                </p>
              </div>
              <Link className={`title ${props.langs}`}>
                {props.langs === "en"
                  ? "تحويل التحديات إلى"
                  : "Transforming Challenges into "}
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="itme">
              <div className="img">
                <img src={img1} alt="..." />
              </div>
              <div className="text">
                <Link className={`link ${props.langs}`}>
                  {props.langs === "en" ? "إبداعي" : "Creative"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? " 24 مارس 2024" : "MARCH 24, 2024 "}
                </p>
              </div>
              <Link className={`title ${props.langs}`}>
                {props.langs === "en"
                  ? "تحويل التحديات إلى"
                  : "Transforming Challenges into "}
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <div className="itme">
              <div className="img">
                <img src={img2} alt="..." />
              </div>
              <div className="text">
                <Link className={`link ${props.langs}`}>
                  {props.langs === "en" ? "إبداعي" : "Creative"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? " 24 مارس 2024" : "MARCH 24, 2024 "}
                </p>
              </div>
              <Link className={`title ${props.langs}`}>
                {props.langs === "en"
                  ? "تحويل التحديات إلى"
                  : "Transforming Challenges into "}
              </Link>
            </div>
          </div>
          <div className="col-12  col-md-6">
            {" "}
            <div className="itme">
              <div className="img">
                <img src={img3} alt="..." />
              </div>
              <div className="text">
                <Link className={`link ${props.langs}`}>
                  {props.langs === "en" ? "إبداعي" : "Creative"}{" "}
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </Link>
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? " 24 مارس 2024" : "MARCH 24, 2024 "}
                </p>
              </div>
              <Link className={`title ${props.langs}`}>
                {props.langs === "en"
                  ? "تحويل التحديات إلى"
                  : "Transforming Challenges into "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
