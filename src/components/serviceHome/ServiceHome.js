import React from "react";
import "./serviceHome.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../Imges/asset 14.png";
import img2 from "../../Imges/asset 15.png";
import img3 from "../../Imges/asset 16.png";
function ServiceHome(props) {
  return (
    <div className={`serviceHome ${props.langs}`}>
      <div className="container">
        <div className="content">
          <h6>{props.langs === "en" ? " ماذا نقدم" : "WHAT WE OFFER"}</h6>
          <div className="title">
            <div>
              {props.langs === "en" ? (
                <h2 className={`${props.langs}`}>ما يمكننا فعله لعملائنا</h2>
              ) : (
                <h2>
                  <span className="span1">What</span> We Can Do for <br />
                  <span className="span2">Our Clients</span>
                </h2>
              )}
            </div>
            <div>
              <Link to={"/service"} className={`${props.langs}`}>
                {props.langs === "en" ? "عرض جميع الخدمات" : "view all service"}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
}

export default ServiceHome;
