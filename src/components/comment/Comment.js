import React from "react";
import "./Comment.css";
import Slider from "react-slick";
import img1 from "../../Imges/asset 23.png";
import img2 from "../../Imges/asset 8.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgcommen from "../../Imges/svg.svg";
import img3 from "../../Imges/asset 24.png";
import img4 from "../../Imges/asset 25.png";
function Comment(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pausehOnHover: true,
  };
  return (
    <div className={`comment ${props.langs}`}>
      <div style={{ position: "relative", zIndex: "9" }} className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
          {/* data-aos="zoom-in" */}
            <div  className="img">
              <img src={img1} alt="...." />
              <img className="img2" src={img2} alt="...." />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7">
            <div className="slider-comment">
              <Slider {...settings}>
                <div className="itme">
                  <div className="starsandimg">
                    <div className="stars">
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                    </div>
                    <div className="img1">
                      <img
                        className="img1"
                        width={"50px"}
                        src={imgcommen}
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "بوروس، التراسييس أوت أورسي إيغيت، أكومسان ديجنسيم تورتور. كويكوي ساجيتيس، ماسا أك لوكتوس فاسيليسيس، دوى ديام إيجيستاس سيم، أكونجي كوام نيكيه آي ديكتوس. فيزيلوس فيل إمبيرديت إيرات. بروين موليس، ليغولا موليس تيمبوس كونديمينتوم، أورنا موريس بريتيوم تيلوس، يو"
                      : "Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque sagittis, massa ac luctus facilisis, dui diam egestas sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin mollis, ligula mollis tempus condimentum, urna mauris pretium tellus, eu."}
                  </p>
                  <div className="img3">
                    <img src={img3} alt="..." />
                  </div>
                  <div className="into">
                    <div>
                      <img
                        className="img4"
                        width={"50px"}
                        src={img4}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h4 className={`${props.langs}`}>
                        {props.langs === "en" ? "دانيال سميث" : "Daniel Smith"}
                      </h4>
                      <h6 className={`${props.langs}`}>
                        {props.langs === "en" ? "مهندس أول" : "Senior engineer"}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="itme">
                  <div className="starsandimg">
                    <div className="stars">
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                    </div>
                    <div className="img1">
                      <img
                        className="img1"
                        width={"50px"}
                        src={imgcommen}
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "بوروس، التراسييس أوت أورسي إيغيت، أكومسان ديجنسيم تورتور. كويكوي ساجيتيس، ماسا أك لوكتوس فاسيليسيس، دوى ديام إيجيستاس سيم، أكونجي كوام نيكيه آي ديكتوس. فيزيلوس فيل إمبيرديت إيرات. بروين موليس، ليغولا موليس تيمبوس كونديمينتوم، أورنا موريس بريتيوم تيلوس، يو"
                      : "Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque sagittis, massa ac luctus facilisis, dui diam egestas sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin mollis, ligula mollis tempus condimentum, urna mauris pretium tellus, eu."}
                  </p>
                  <div className="img3">
                    <img src={img3} alt="..." />
                  </div>
                  <div className="into">
                    <div>
                      <img
                        className="img4"
                        width={"50px"}
                        src={img4}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h4 className={`${props.langs}`}>
                        {props.langs === "en" ? "دانيال سميث" : "Daniel Smith"}
                      </h4>
                      <h6 className={`${props.langs}`}>
                        {props.langs === "en" ? "مهندس أول" : "Senior engineer"}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="itme">
                  <div className="starsandimg">
                    <div className="stars">
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                    </div>
                    <div className="img1">
                      <img
                        className="img1"
                        width={"50px"}
                        src={imgcommen}
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "بوروس، التراسييس أوت أورسي إيغيت، أكومسان ديجنسيم تورتور. كويكوي ساجيتيس، ماسا أك لوكتوس فاسيليسيس، دوى ديام إيجيستاس سيم، أكونجي كوام نيكيه آي ديكتوس. فيزيلوس فيل إمبيرديت إيرات. بروين موليس، ليغولا موليس تيمبوس كونديمينتوم، أورنا موريس بريتيوم تيلوس، يو"
                      : "Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque sagittis, massa ac luctus facilisis, dui diam egestas sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin mollis, ligula mollis tempus condimentum, urna mauris pretium tellus, eu."}
                  </p>
                  <div className="img3">
                    <img src={img3} alt="..." />
                  </div>
                  <div className="into">
                    <div>
                      <img
                        className="img4"
                        width={"50px"}
                        src={img4}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h4 className={`${props.langs}`}>
                        {props.langs === "en" ? "دانيال سميث" : "Daniel Smith"}
                      </h4>
                      <h6 className={`${props.langs}`}>
                        {props.langs === "en" ? "مهندس أول" : "Senior engineer"}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="itme">
                  <div className="starsandimg">
                    <div className="stars">
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                    </div>
                    <div className="img1">
                      <img
                        className="img1"
                        width={"50px"}
                        src={imgcommen}
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "بوروس، التراسييس أوت أورسي إيغيت، أكومسان ديجنسيم تورتور. كويكوي ساجيتيس، ماسا أك لوكتوس فاسيليسيس، دوى ديام إيجيستاس سيم، أكونجي كوام نيكيه آي ديكتوس. فيزيلوس فيل إمبيرديت إيرات. بروين موليس، ليغولا موليس تيمبوس كونديمينتوم، أورنا موريس بريتيوم تيلوس، يو"
                      : "Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque sagittis, massa ac luctus facilisis, dui diam egestas sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin mollis, ligula mollis tempus condimentum, urna mauris pretium tellus, eu."}
                  </p>
                  <div className="img3">
                    <img src={img3} alt="..." />
                  </div>
                  <div className="into">
                    <div>
                      <img
                        className="img4"
                        width={"50px"}
                        src={img4}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h4 className={`${props.langs}`}>
                        {props.langs === "en" ? "دانيال سميث" : "Daniel Smith"}
                      </h4>
                      <h6 className={`${props.langs}`}>
                        {props.langs === "en" ? "مهندس أول" : "Senior engineer"}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="itme">
                  <div className="starsandimg">
                    <div className="stars">
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                    </div>
                    <div className="img1">
                      <img
                        className="img1"
                        width={"50px"}
                        src={imgcommen}
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "بوروس، التراسييس أوت أورسي إيغيت، أكومسان ديجنسيم تورتور. كويكوي ساجيتيس، ماسا أك لوكتوس فاسيليسيس، دوى ديام إيجيستاس سيم، أكونجي كوام نيكيه آي ديكتوس. فيزيلوس فيل إمبيرديت إيرات. بروين موليس، ليغولا موليس تيمبوس كونديمينتوم، أورنا موريس بريتيوم تيلوس، يو"
                      : "Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque sagittis, massa ac luctus facilisis, dui diam egestas sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin mollis, ligula mollis tempus condimentum, urna mauris pretium tellus, eu."}
                  </p>
                  <div className="img3">
                    <img src={img3} alt="..." />
                  </div>
                  <div className="into">
                    <div>
                      <img
                        className="img4"
                        width={"50px"}
                        src={img4}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h4 className={`${props.langs}`}>
                        {props.langs === "en" ? "دانيال سميث" : "Daniel Smith"}
                      </h4>
                      <h6 className={`${props.langs}`}>
                        {props.langs === "en" ? "مهندس أول" : "Senior engineer"}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="itme">
                  <div className="starsandimg">
                    <div className="stars">
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                      <div>
                        <FontAwesomeIcon className="i" icon={faStar} />
                      </div>
                    </div>
                    <div className="img1">
                      <img
                        className="img1"
                        width={"50px"}
                        src={imgcommen}
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "بوروس، التراسييس أوت أورسي إيغيت، أكومسان ديجنسيم تورتور. كويكوي ساجيتيس، ماسا أك لوكتوس فاسيليسيس، دوى ديام إيجيستاس سيم، أكونجي كوام نيكيه آي ديكتوس. فيزيلوس فيل إمبيرديت إيرات. بروين موليس، ليغولا موليس تيمبوس كونديمينتوم، أورنا موريس بريتيوم تيلوس، يو"
                      : "Purus, ultricies ut orci eget, accumsan dignissim tortor. Quisque sagittis, massa ac luctus facilisis, dui diam egestas sem, a congue quam neque id lectus. Phasellus vel imperdiet erat. Proin mollis, ligula mollis tempus condimentum, urna mauris pretium tellus, eu."}
                  </p>
                  <div className="img3">
                    <img src={img3} alt="..." />
                  </div>
                  <div className="into">
                    <div>
                      <img
                        className="img4"
                        width={"50px"}
                        src={img4}
                        alt="..."
                      />
                    </div>
                    <div>
                      <h4 className={`${props.langs}`}>
                        {props.langs === "en" ? "دانيال سميث" : "Daniel Smith"}
                      </h4>
                      <h6 className={`${props.langs}`}>
                        {props.langs === "en" ? "مهندس أول" : "Senior engineer"}
                      </h6>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
