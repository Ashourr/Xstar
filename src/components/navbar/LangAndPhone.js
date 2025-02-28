import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./navbar.css"
function LangAndPhone(props) {
  return (
    <div className={`landandphone ${props.langs}`}>
      <div className="register">
        <div className={`nav-phone ${props.langs} `}>
          {/* <div> */}
            <FontAwesomeIcon className="phone-icon" icon={faPhoneVolume} />
          {/* </div> */}
        </div>
        <button className="but-lang" onClick={props.lang}>
          {props.langs === "en" ? "en" : "ar"}
        </button>
      </div>
    </div>
  );
}

export default LangAndPhone;
