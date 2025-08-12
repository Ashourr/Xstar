import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faAnglesRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import imgFooter from "../../Imges/let-arrow.png";
function Footer(props) {
  return (
    <footer className={`footer ${props.langs}`}>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about">
              <h4>
                {props.langs === "ar" ? "About Xstar" : "معلومات عن Xstar"}
              </h4>
              <span className="span-footer"></span>
              <p>
                {props.langs === "en"
                  ? "فاسيليس ألتريسيز عليقم فولوطپات أولامكورپير لاوريت نيكوي، ألاسينيا كورابيتور لاكينيا موليس"
                  : "Phasellus ultricies aliquam volutpat ullamcorper laoreet neque,a lacinia curabitur lacinia mollis"}
              </p>
              <div className="Links">
                <div>
                  <FontAwesomeIcon className="i" icon={faFacebook} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faYoutube} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faLinkedin} />
                </div>
                <div>
                  <FontAwesomeIcon className="i" icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <div>
              <h4>{props.langs === "ar" ? "Quick Links" : "روابط سريعة"}</h4>
              <span className="span-footer"></span>
              <ul>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link to={"/about"}>
                    {props.langs === "en" ? "عن Xstar" : "About Xstar"}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link to={"/service"}>
                    {props.langs === "ar" ? "Our Services" : "خدماتنا"}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link to={"/blog"}>
                    {props.langs === "ar" ? "Our Blogs" : "مدوناتنا"}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link to={"/contact"}>
                    {props.langs === "ar" ? "Contact Us" : "اتصل بنا"}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link to={"/*"}>{props.langs === "ar" ? "404" : "404"}</Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link to={"/faq"}>
                    {props.langs === "ar" ? "FAQ’S" : "الأسئلة المتكررة"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div>
              <h4>{props.langs === "ar" ? "Services" : "خدماتنا"}</h4>
              <span className="span-footer"></span>
              <ul>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link>
                    {props.langs === "ar" ? "UI/UX Design" : "تصميم UI/UX"}
                  </Link>{" "}
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link>
                    {props.langs === "ar" ? "Web Development" : "تطوير الويب"}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link>
                    {props.langs === "ar"
                      ? "Product Design"
                      : "تصميم المنتجات "}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="i" icon={faAnglesRight} />
                  <Link>
                    {props.langs === "ar"
                      ? "SEO Optimization"
                      : "تحسين محركات البحث (SEO)"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="newsletter">
              <h4>{props.langs === "ar" ? "Newsletter" : "النشرة البريدية"}</h4>
              <span className="span-footer"></span>
              <p>
                {props.langs === "ar"
                  ? "Sign up to seargin weekly newsletter to get the latest updates."
                  : "اشترك في النشرة الإخبارية الأسبوعية من سيرجن للحصول على آخر التحديثات"}
              </p>
              <div className="input">
                <input
                  type="email"
                  placeholder={
                    props.langs === "ar"
                      ? "Enter Email Address"
                      : "ادخل عنوان الالكتروني"
                  }
                />
                <div>
                  <FontAwesomeIcon className="i" icon={faPaperPlane} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copy-right">
            <p>Copyright 2025 &copy; All Right Reserved</p>
            <div className="dev">
              <p>front end : </p>
              <a
                href="https://www.facebook.com/profile.php?id=100005869890293"
                target="_blank"
              >
                Ashour
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
