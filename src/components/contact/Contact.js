import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact(props) {
  return (
    <div className={`contact ${props.langs}`}>
      <div className="container">
        <div style={{ marginBottom: "20px" }} className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="itme">
              <div>
                <FontAwesomeIcon className="i" icon={faPhone} />
              </div>
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? "الهاتف والفاكس" : "Phone & Fax"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "الهاتف : +197 -90 - 56 - 780"
                  : "Mobile : +197 -90 - 56 - 780"}
              </p>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "الفاكس: +44-208-1234567"
                  : "Fax : +44-208-1234567"}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="itme">
              <div>
                <FontAwesomeIcon className="i" icon={faEnvelope} />
              </div>
              <h5 className={`${props.langs}`}>
                {props.langs === "en"
                  ? "عنوان البريد الإلكتروني"
                  : "Mail Address"}
              </h5>
              <p className={`${props.langs}`}>Info.company@gmail.com</p>
              <p className={`${props.langs}`}>Info.company@yahoo.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="itme">
              <div>
                <FontAwesomeIcon className="i" icon={faLocationDot} />
              </div>
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? " موقعنا" : "Our Location"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "العنوان: 85 كيتش هاربور"
                  : "Mobile : 85 Ketch Harbour"}
              </p>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? "شارع بنسالم، PA 19020"
                  : "RoadBensalem, PA 19020"}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="itme">
              <div>
                <FontAwesomeIcon className="i" icon={faClock} />
              </div>
              <h5 className={`${props.langs}`}>
                {props.langs === "en" ? "ساعات العمل" : "Office Hour"}
              </h5>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? " الأحد - الخميس: 09 ص - 06 م"
                  : "Sun - Thu 09 am - 06pm"}
              </p>
              <p className={`${props.langs}`}>
                {props.langs === "en"
                  ? " الجمعة - السبت: 4 م - 10 م"
                  : "Fri - Sat 4 pm - 10pm"}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927758.0366953592!2d47.48203818416085!3d24.724997795540133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1731325239031!5m2!1sar!2seg"
                // width="100%"
                // height="420px"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form">
              <form>
                <h3 className={`${props.langs}`}>{props.langs==="en"?"":"Leave A Message"}</h3>
                <div className="inputs">
                  <input
                    type="text"
                    placeholder={props.langs === "ar" ? "Name" : "الاسم"}
                  />
                  <input
                    type="email"
                    placeholder={
                      props.langs === "ar" ? "Email" : "البريد الالكتروني"
                    }
                    className={`${props.langs}`}
                  />
                </div>
                <select className="form-select">
                  <option value="1">Subject</option>
                  <option value="2">Subject.....</option>
                  <option value="3">Subject.....</option>
                </select>
                <textarea placeholder="Message"></textarea>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
