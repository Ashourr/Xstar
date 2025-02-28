import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./header2.css";
import imgheader2 from "../../Imges/asset 8.png";
import img11 from "../../Imges/asset 11.png";
import img12 from "../../Imges/asset 12.png";
import img13 from "../../Imges/asset 13.png";
import video from "../../Imges/bn1-circle.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modli from "../Modli/Modli";
import AOS from "aos";
import "aos/dist/aos.css";

function Header2(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  let [show, setshow] = useState("");
  function notshow() {
    if (show) {
      setshow("");
    } else {
    }
  }
  return (
    <div className={`header2 ${props.langs} `} onClick={notshow}>
      <div className="container">
        {props.langs === "en" ? (
          <h2 className={`h1 en`}> الجيل القادم</h2>
        ) : (
          <h2 className={`h1`}>Next Generation</h2>
        )}

        {props.langs === "en" ? (
          // data-aos="zoom-in-right"
          <h2 className={`h2 en`}>
            <span className="span1">وكالة</span>
            <span className="span1" data-text="Agency">
              مبدع
            </span>
          </h2>
        ) : (
          // data-aos="zoom-in-right"
          <h2 className={`h2 ${props.langs}`}>
            <span  className="span fst-italic">Creative</span>
            <span className="span2" data-text="Agency">
              Agency
            </span>
          </h2>
        )}
        {}
        <div className={`video ${props.langs} `}>
          <FontAwesomeIcon
            onClick={() => {
              setshow("show");
            }}
            className="i"
            icon={faPlay}
          />
          <img src={video} alt="..." />
        </div>
        <div className="img">
          <img width={"110px"} src={imgheader2} alt="..." />
        </div>
        <div className="imgs">
          <div>
            <img src={img11} alt="..." />
          </div>
          <div>
            <img src={img12} alt="..." />
          </div>
          <div>
            <img src={img13} alt="..." />
          </div>
        </div>
        <h5>
          1k + Brands Trust Us <span></span>
        </h5>
        <div className={`header-button ${props.langs} `}>
          <div className="header-button-content">
            <div>
              <h6>12+</h6>
              <p className={`${props.langs}`}>
                {props.langs === "en" ? "سنوات الخبرة" : "years of experience"}
              </p>
            </div>
            <div>
              <h6 className={`${props.langs}`}>25K+</h6>
              <p className={`${props.langs}`}>
                {" "}
                {props.langs === "en"
                  ? "المشاريع المكتملة"
                  : "completed projects"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modli show={show} />
    </div>
  );
}

export default Header2;
