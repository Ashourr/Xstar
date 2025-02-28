import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./heder.css";
import imgHeder from "../../Imges/New folder/asset 5.png";
function Heder(props) {
  return (
    <div className={`heder ${props.langs}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {props.langs === "en" ? (
              <h2 className={`${props.langs === "en"&& "en"}`}>
                استوديو
                <span>
                  تصميم
                  <br />
                  ذو
                </span>
                خبرة
              </h2>
            ) : (
              <h2>
                Design
                <span>
                  Studio
                  <br />
                  With
                </span>
                Experience
              </h2>
            )}
            <p className={`${props.langs === "en" && "ar"}`}>
              {props.langs === "ar"
                ? "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal"
                : "تقديم استراتيجيات بقاء رابحة لضمان الهيمنة الاستباقية. في نهاية اليوم، المضي قدمًا نحو وضع طبيعي جديد"}
            </p>
            <div style={{width:"fit-content"}}>
              {" "}
              <Link className={`${props.langs === "en" && "ar"}`}>
                {props.langs === "ar" ? "Explore More" : "استكشاف المزيد"}
                <FontAwesomeIcon className="heder-icon" icon={faArrowRight} />
                <span></span>
              </Link>
            </div>
            {props.langs === "en" ? (
              <img className={`imgen`} src={imgHeder} alt="..." />
            ) : (
              <img className={`imgar`} src={imgHeder} alt="..." />
            )}
            <div className="links">
              <Link className={`${props.langs === "en" && "ar"}`}>
                {props.langs === "en" ? "فيسبوك" : "FaceBook"}
              </Link>
              <Link className={`${props.langs === "en" && "ar"}`}>
                {props.langs === "en" ? "تويتر" : "Twitter"}
              </Link>
              <Link className={`${props.langs === "en" && "ar"}`}>
                {props.langs === "en" ? "انستغرام" : "Instagram"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heder;
