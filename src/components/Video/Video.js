import React, { useState } from "react";
import "./video.css";
import video from "../../Imges/online education.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modli from "../Modli/Modli";
import imgvideo from "../../Imges/bn1-circle.png";
function Video(props) {
  let [show, setshow] = useState("");
  function notshow() {
    if (show) {
      setshow("");
    } else {
    }
  }
  return (
    <div className="video" onClick={notshow}>
      <div className="video-aitm">
        <video autoPlay muted loop width={"100%"}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="cont">
        <div
          onClick={() => {
            setshow("show");
          }}
        >
          <img src={imgvideo} alt="..." />
          <FontAwesomeIcon icon={faPlay} className="i" />
        </div>
      </div>
      <Modli show={show} />
    </div>
  );
}

export default Video;
