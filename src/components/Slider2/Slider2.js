import React from "react";
import "./Slider2.css";
import img from "../../Imges/New folder/asset 6.png";
function Slider2(props) {
  return (
    <div className={`slider2 `}>
      <div className="digital-solution testi-italic">
        <div className="mycustom-marque">
          <div className="scrolling-wrap">
            <div className="comm">
              <div className="cmn-textslide">
                <h3 className={`cmn-textslide ${props.langs}`}>
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
              <div>
                <img src={img} alt="img" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                <h3
                  className={`cmn-textslide text-custom-storke ${props.langs}`}
                >
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
              <div className="cmn-textslide">
                {" "}
                <h3 className={`cmn-textslide ${props.langs}`}>
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
              <div>
                <img src={img} alt="img" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                <h3
                  className={`cmn-textslide text-custom-storke ${props.langs}`}
                >
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
            </div>
            <div className="comm">
              <div className="cmn-textslide">
                {" "}
                <h3 className={`cmn-textslide ${props.langs}`}>
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
              <div>
                <img src={img} alt="img" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                <h3
                  className={`cmn-textslide text-custom-storke ${props.langs}`}
                >
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
              <div className="cmn-textslide">
                <h3 className={`cmn-textslide ${props.langs}`}>
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
              <div>
                <img src={img} alt="img" />
              </div>
              <div className="cmn-textslide text-custom-storke">
                <h3
                  className={`cmn-textslide text-custom-storke ${props.langs}`}
                >
                  {props.langs === "en"
                    ? "الحلول الرقمية"
                    : "DIGITAL solutions"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
