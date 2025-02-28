import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./teamHome.css";
import {
  faFacebook,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../Imges/asset 19.png";
import img2 from "../../Imges/asset 20.png";
import img3 from "../../Imges/asset 21.png";
import img4 from "../../Imges/asset 22.png";
function TeamHome(props) {
  return (
    <div className={`teamhome ${props.langs}`}>
      {/* <div className="spans">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className="container" style={{ position: "relative", zIndex: "9" }}>
        <div className="content">
          <h6 className={`${props.langs}`}>
            {props.langs === "en" ? "دراسة حالة" : "Case Study"}
          </h6>
          <div className="title">
            <div>
              {props.langs === "en" ? (
                <h2 className={`${props.langs}`}>تعرف على فريقنا الإبداعي</h2>
              ) : (
                <h2>
                  <span className="span1">Meet our </span>creative{" "}
                  <span>staff</span> <br />
                </h2>
              )}
            </div>
            <div>
              <Link to="team">
                {props.langs === "en" ? "عرض جميع الفرق" : "view all teams"}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="itme">
              <img src={img1} alt="..." />
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? "إيستر هوارد" : "Esther Howard"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "الرئيسة التقنية ومؤسسة الشركة"
                  : "CTO & Founder"}
              </p>
              <span></span>
              <div className="icons">
                <div>
                  <FontAwesomeIcon className="i" icon={faFacebook} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faInstagram} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faTwitter} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faPinterestP} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="itme">
              <img src={img4} alt="..." />
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? "إيستر هوارد" : "Esther Howard"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "الرئيسة التقنية ومؤسسة الشركة"
                  : "CTO & Founder"}
              </p>
              <span></span>
              <div className="icons">
                <div>
                  <FontAwesomeIcon className="i" icon={faFacebook} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faInstagram} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faTwitter} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faPinterestP} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="itme">
              <img src={img3} alt="..." />
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? "إيستر هوارد" : "Esther Howard"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "الرئيسة التقنية ومؤسسة الشركة"
                  : "CTO & Founder"}
              </p>
              <span></span>
              <div className="icons">
                <div>
                  <FontAwesomeIcon className="i" icon={faFacebook} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faInstagram} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faTwitter} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faPinterestP} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="itme">
              <img src={img2} alt="..." />
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? "إيستر هوارد" : "Esther Howard"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "الرئيسة التقنية ومؤسسة الشركة"
                  : "CTO & Founder"}
              </p>
              <span></span>
              <div className="icons">
                <div>
                  <FontAwesomeIcon className="i" icon={faFacebook} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faInstagram} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faTwitter} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faPinterestP} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHome;
