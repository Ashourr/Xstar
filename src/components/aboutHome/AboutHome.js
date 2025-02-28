import React from "react";
import "./aboutHome.css";
import img1 from "../../Imges/New folder/asset 3.png";
import img2 from "../../Imges/New folder/asset 4.png";
import img3 from "../../Imges/New folder/asset 5.png";
function AboutHome(props) {
  return (
    <div className={`aboutHome ${props.langs}`}>
      <div className="spans">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="imgs">
                {/* data-aos="zoom-in" */}
                <div className="img1">
                  <img src={img1} alt="..." />
                </div>
                {/* data-aos="zoom-in" */}
                <div className="img2">
                  <img src={img2} alt="..." />
                </div>
              </div>
              <img className="logo" src={img3} alt="..." />
            </div>
            <div className="col-12 col-lg-6">
              <div className="cont">
                <h6 className={`${props.langs}`}>
                  {props.langs === "en" ? "عن Xstar" : "ABOUT XSTAR"}
                </h6>
                <div className="title">
                  <div>
                    {/* data-aos="zoom-in-up" */}
                    <img src={img3} alt="..." />
                  </div>
                  <div>
                    {/* data-aos="zoom-in-up" */}
                    <h4 className={`${props.langs}`}>
                      {props.langs === "en"
                        ? "لخلق تصميمات فنية وإبداعية"
                        : "To Create Artistic & Creative Design"}
                    </h4>
                  </div>
                </div>
                {/* data-aos="zoom-in-up" */}
                <p className={`p ${props.langs}`}>
                  {props.langs === "en"
                    ? " تقديم استراتيجيات بقاء رابحة لضمان الهيمنة الاستباقية. في نهاية اليوم، نمضي قدمًا نحو وضع طبيعي جديد تطور من الأجيال على المدرج المتجه نحو سحابة مدمجة"
                    : "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation on the runway heading towards a streamlined cloud."}
                </p>
                {/* data-aos="zoom-in-up" */}
                <div className="numbars">
                  <div>
                    <div className="num">
                      <span className={`${props.langs}`}>
                        {props.langs === "en"
                          ? "تصميم العلامة التجارية"
                          : "Branding Design"}
                      </span>
                      <span>88%</span>
                    </div>
                    <div>
                      <div className="spa"></div>
                    </div>
                  </div>
                  <div>
                    <div className="num">
                      <span>
                        {props.langs === "en" ? "الأعمال" : "Business"}
                      </span>
                      <span>96%</span>
                    </div>
                    <div>
                      <div className="spa"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
