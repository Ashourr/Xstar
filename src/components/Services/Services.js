import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../Imges/asset 14.png";
import img2 from "../../Imges/asset 15.png";
import img3 from "../../Imges/asset 16.png";
function Services(props) {
  return (
    <div className={`services ${props.langs} `}>
      <div className="container">
        <div className="row">
          <div
            // data-aos="fade-up"
            // data-aos-delay="300"
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="itme">
              <div className="logo">
                <div>
                  <img src={img1} alt="..." />
                </div>
                <div>
                  <p>01</p>
                </div>
              </div>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "product Design"}
              </h3>
              <p className={`pra ${props.langs}`}>
                {props.langs === "en"
                  ? "فيزلوس الديكتوم ماسا يو أولامكوربر فوسيبوس إنتيجر فيل أوديو إن لوريم فاسيليس كونسكتيتور سيد يو نيكوي. كيورابيتور فيرمنتوم يو دولار أك"
                  : "Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis consectetur sed eu neque. Curabitur fermentum eu dolor ac"}
              </p>
              <Link className={`${props.langs}`}>
                {props.langs === "en" ? "استكشاف المزيد" : "Explore More"}{" "}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-delay="300"
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="itme">
              <div className="logo">
                <div>
                  <img src={img2} alt="..." />
                </div>
                <div>
                  <p>02</p>
                </div>
              </div>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "product Design"}
              </h3>
              <p className={`pra ${props.langs}`}>
                {props.langs === "en"
                  ? "فيزلوس الديكتوم ماسا يو أولامكوربر فوسيبوس إنتيجر فيل أوديو إن لوريم فاسيليس كونسكتيتور سيد يو نيكوي. كيورابيتور فيرمنتوم يو دولار أك"
                  : "Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis consectetur sed eu neque. Curabitur fermentum eu dolor ac"}
              </p>
              <Link className={`${props.langs}`}>
                {props.langs === "en" ? "استكشاف المزيد" : "Explore More"}{" "}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-delay="300"
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="itme">
              <div className="logo">
                <div>
                  <img src={img3} alt="..." />
                </div>
                <div>
                  <p>03</p>
                </div>
              </div>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "product Design"}
              </h3>
              <p className={`pra ${props.langs}`}>
                {props.langs === "en"
                  ? "فيزلوس الديكتوم ماسا يو أولامكوربر فوسيبوس إنتيجر فيل أوديو إن لوريم فاسيليس كونسكتيتور سيد يو نيكوي. كيورابيتور فيرمنتوم يو دولار أك"
                  : "Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis consectetur sed eu neque. Curabitur fermentum eu dolor ac"}
              </p>
              <Link className={`${props.langs}`}>
                {props.langs === "en" ? "استكشاف المزيد" : "Explore More"}{" "}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-delay="300"
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="itme">
              <div className="logo">
                <div>
                  <img src={img2} alt="..." />
                </div>
                <div>
                  <p>03</p>
                </div>
              </div>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "product Design"}
              </h3>
              <p className={`pra ${props.langs}`}>
                {props.langs === "en"
                  ? "فيزلوس الديكتوم ماسا يو أولامكوربر فوسيبوس إنتيجر فيل أوديو إن لوريم فاسيليس كونسكتيتور سيد يو نيكوي. كيورابيتور فيرمنتوم يو دولار أك"
                  : "Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis consectetur sed eu neque. Curabitur fermentum eu dolor ac"}
              </p>
              <Link className={`${props.langs}`}>
                {props.langs === "en" ? "استكشاف المزيد" : "Explore More"}{" "}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-delay="300"
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="itme">
              <div className="logo">
                <div>
                  <img src={img3} alt="..." />
                </div>
                <div>
                  <p>04</p>
                </div>
              </div>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "product Design"}
              </h3>
              <p className={`pra ${props.langs}`}>
                {props.langs === "en"
                  ? "فيزلوس الديكتوم ماسا يو أولامكوربر فوسيبوس إنتيجر فيل أوديو إن لوريم فاسيليس كونسكتيتور سيد يو نيكوي. كيورابيتور فيرمنتوم يو دولار أك"
                  : "Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis consectetur sed eu neque. Curabitur fermentum eu dolor ac"}
              </p>
              <Link className={`${props.langs}`}>
                {props.langs === "en" ? "استكشاف المزيد" : "Explore More"}{" "}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-delay="300"
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="itme">
              <div className="logo">
                <div>
                  <img src={img1} alt="..." />
                </div>
                <div>
                  <p>05</p>
                </div>
              </div>
              <h3 className={`${props.langs}`}>
                {props.langs === "en" ? "تصميم المنتجات" : "product Design"}
              </h3>
              <p className={`pra ${props.langs}`}>
                {props.langs === "en"
                  ? "فيزلوس الديكتوم ماسا يو أولامكوربر فوسيبوس إنتيجر فيل أوديو إن لوريم فاسيليس كونسكتيتور سيد يو نيكوي. كيورابيتور فيرمنتوم يو دولار أك"
                  : "Phasellus dictum massa eu ullamcorper faucibus integer vel odio in lorem facilisis consectetur sed eu neque. Curabitur fermentum eu dolor ac"}
              </p>
              <Link className={`${props.langs}`}>
                {props.langs === "en" ? "استكشاف المزيد" : "Explore More"}{" "}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
