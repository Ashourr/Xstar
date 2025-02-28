import React from "react";
import img from "../../Imges/New folder/asset 6.png";
import "./Slider.css";
function Slider(props) {
  return (
    <div className={`slider `}>
      <div className="mycustom-marque">
        <div className="scrolling-wrap">
          <div className="comm">
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "وكالة إبداعية" : "Creatives AGENCY"}
              </h3>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "وكالة برمجيات" : "software agency"}
              </h3>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "وكالة رقمية" : "Digital Agency"}
              </h3>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {" "}
                {props.langs === "en" ? "تصميم المنتجات" : "products design"}
              </h3>
            </div>
          </div>
          <div className="comm">
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "وكالة إبداعية" : "Creatives AGENCY "}
              </h3>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "وكالة رقمية" : "Digital Agency"}
              </h3>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "وكالة رقمية" : "Digital Agency"}
              </h3>
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div className={`cmn-textslide ${props.langs}`}>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "products design"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
