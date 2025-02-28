import React from "react";
import "./Modli.css";
// import Video from "../../imges/Car_Rental_Video(720p).mp4";

function Modli(props) {
  return (
    <div>
      <div>
        <div></div>
        {props.show === "show" ? (
          <div className={`modli`}>
            {/*
            <video controls autoPlay loop>
              <source src={Video} type="video/mp4" />
            </video> */}
            <iframe
            // className="video"
              // width="100%"
              // height="300"
              src="https://www.youtube.com/embed/vfhzo499OeA?si=ra9mh67UH6lne_oL"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modli;
