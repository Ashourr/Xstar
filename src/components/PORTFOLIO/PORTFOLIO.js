import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PORTFOLIO.css";
import imgg1 from "../../Imges/asset 17.png";
import imgg2 from "../../Imges/asset 18.png";
import imgg3 from "../../Imges/asset 17.png";
import imgg4 from "../../Imges/asset 18.png";

function PORTFOLIO(props) {
  const [img, setImg] = useState("1");
  const [imgSrc, setImgSrc] = useState(imgg1);
  const [activeItem, setActiveItem] = useState("1"); // حالة جديدة لتتبع العنصر النشط

  useEffect(() => {
    switch (img) {
      case "1":
        setImgSrc(imgg1);
        break;
      case "2":
        setImgSrc(imgg2);
        break;
      case "3":
        setImgSrc(imgg3);
        break;
      case "4":
        setImgSrc(imgg4);
        break;
      default:
        setImgSrc(imgg1);
        break;
    }
  }, [img]);

  const handleMouseEnter = (id) => {
    setImg(id);
    setActiveItem(id); // تعيين العنصر النشط
  };

  return (
    <div className={`portfolio ${props.langs}`}>
      <div className="container">
        <div className="content">
          <h6 className={`${props.langs}`}>
            {props.langs === "en" ? "دراسة حالة" : "Case Study"}
          </h6>
          <div className="title">
            <div>
              {props.langs === "en" ? (
                <h2 className={`${props.langs}`}>دراسة الحالة الأخيرة لدينا</h2>
              ) : (
                <h2>
                  <span className="span1">Our Recent</span> Case Study <br />
                </h2>
              )}
            </div>
            <div>
              <Link to="/study">
                {props.langs === "en"
                  ? "عرض جميع الأعمال"
                  : "VIEW ALL PORTFOLIO"}
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-12 col-md-4"
          >
            <div className="imgs">
              <div className="img">
                <img width={"100%"} src={imgSrc} alt="portfolio" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="itmes">
              <div
                className={`${activeItem === "1" ? "item active" : "item"}`}
                onMouseEnter={() => handleMouseEnter("1")}
              >
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? "تطوير" : "Development"}
                </p>
                <div>
                  <h4 className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "حيث تلتقي الرؤية بالتكنولوجيا"
                      : "Where Vision Meets Technology"}
                  </h4>
                  <Link className={`${props.langs}`} to="#">
                    {props.langs === "en" ? "عرض الأعمال" : "VIEW portfolio"}
                    <FontAwesomeIcon className="i" icon={faArrowRight} />
                  </Link>
                </div>
              </div>
              <div
                className={`${activeItem === "2" ? "active" : "item"}`}
                onMouseEnter={() => handleMouseEnter("2")}
              >
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? "تطوير" : "Development"}
                </p>
                <div>
                  <h4 className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "حيث تلتقي الرؤية بالتكنولوجيا"
                      : "Where Vision Meets Technology"}
                  </h4>
                  <Link className={`${props.langs}`} to="#">
                    {props.langs === "en" ? "عرض الأعمال" : "VIEW portfolio"}
                    <FontAwesomeIcon className="i" icon={faArrowRight} />
                  </Link>
                </div>
              </div>
              <div
                className={`${activeItem === "3" ? "active" : "item"}`}
                onMouseEnter={() => handleMouseEnter("3")}
                // onMouseLeave={handleMouseLeave}
              >
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? "تطوير" : "Development"}
                </p>
                <div>
                  <h4 className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "حيث تلتقي الرؤية بالتكنولوجيا"
                      : "Where Vision Meets Technology"}
                  </h4>
                  <Link className={`${props.langs}`} to="#">
                    {props.langs === "en" ? "عرض الأعمال" : "VIEW portfolio"}
                    <FontAwesomeIcon className="i" icon={faArrowRight} />
                  </Link>
                </div>
              </div>
              <div
                className={`${activeItem === "4" ? "active" : "item"}`}
                onMouseEnter={() => handleMouseEnter("4")}
                // onMouseLeave={handleMouseLeave}
              >
                <p className={`${props.langs}`}>
                  {props.langs === "en" ? "تطوير" : "Development"}
                </p>
                <div>
                  <h4 className={`${props.langs}`}>
                    {props.langs === "en"
                      ? "حيث تلتقي الرؤية بالتكنولوجيا"
                      : "Where Vision Meets Technology"}
                  </h4>
                  <Link className={`${props.langs}`} to="#">
                    {props.langs === "en" ? "عرض الأعمال" : "VIEW portfolio"}
                    <FontAwesomeIcon className="i" icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PORTFOLIO;
