import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./section.css";
import img1 from "../../../Imges/asset 27.png";

function Section(props) {
  return (
    <div className="section">
      <div className="team-staft-slidewrap">
        <div className="digital-marketing mb-lg-0 mb-10">
          <div className="comm">
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                01
                <span span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>
              {props.langs === "en" ? "تصميم المنتج" : "Product Design"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                02
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>
              {props.langs === "en"
                ? "تجربة المستخدم وواجهة المستخدم (UI/UX)"
                : "UI/UX Experience"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                03
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>
              {props.langs === "en" ? " التسويق الرقمي" : "Digital Marketing"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
          </div>
          <div className="comm">
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                04
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>
              {props.langs === "en" ? "تصميم المنتج" : "Product Design"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                05
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>
              {props.langs === "en"
                ? "تجربة المستخدم وواجهة المستخدم (UI/UX)"
                : "UI/UX Experience"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                06
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en" ? " التسويق الرقمي" : " Digital Marketing"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
          </div>
        </div>
        <div className="digital-marketing text-slie-reverse">
          <div className="comm">
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                01
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en"
                ? "حلول التجارة الإلكترونية"
                : "Ecommerce Solutions"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                02
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en" ? "الحلول المخصصة" : "Custom Solutions"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                03
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en" ? "التجارة الإلكترونية" : "Ecommerce"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
          </div>
          <div className="comm">
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex justify-content-center serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                04
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en" ? "الحلول المخصصة" : "Custom Solutions"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                05
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en" ? "تطبيقات الهواتف المحمولة" : "Mobile app"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
            <div
              className={`cmn-textslide d-grid position-relative ${props.langs}`}
            >
              <span className="d-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                06
                <span className="rot60 d-inline-block theme-clr">
                  <FontAwesomeIcon className="i" icon={faArrowRight} />
                </span>
              </span>

              {props.langs === "en" ? "التصميم الإبداعي" : " Creative Design"}
              <span className="digital-thumb">
                <img src={img1} alt="img" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
