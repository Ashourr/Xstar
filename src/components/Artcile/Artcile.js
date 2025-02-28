import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Artcile.css";
import img1 from "../../Imges/asset 26.png";
import img2 from "../../Imges/asset 27.png";
import img3 from "../../Imges/asset 28.png";

function Artcile(props) {
  return (
    <div className={`artcile ${props.langs}`}>
      <div style={{ position: "relative", zIndex: "99" }} className="container">
        <div className="content">
          <h6> {props.langs === "en" ? "دراسة حالة" : "Case Study"}</h6>
          <div className="title">
            <div>
              {props.langs === "en" ? (
                <h2 className={`${props.langs}`}>
                  تحقق من قصة شركتنا الداخلية
                </h2>
              ) : (
                <h2>
                  <span className="span1"> Check Our </span>Company <br />
                  <span className="span2">Inside Story</span> <br />
                </h2>
              )}
            </div>
            <div>
              <Link className="link" to="/blog">
                {props.langs === "en"
                  ? "عرض جميع المقالات"
                  : "View all Artcile"}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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

export default Artcile;
