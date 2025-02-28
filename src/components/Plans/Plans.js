import React from "react";
import "./Plans.css";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Plans(props) {
  return (
    <div className="plans">
      <div className="container">
        <div className="section-title">
          <p>pricing plans</p>
          <h2 className="stitle">
            Choose Your Perfect <br />
            <span>Pricing Plan</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="itme">
              <h3>Branding</h3>
              <p>
                Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod.
                Cras vehicula lacinia tristique. Morbi sapien
              </p>
              <div className="list">
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
              </div>
              <Link className="">
                Get Started
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="itme">
              <h3>Branding</h3>
              <p>
                Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod.
                Cras vehicula lacinia tristique. Morbi sapien
              </p>
              <div className="list">
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
              </div>
              <Link className="">
                Get Started
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="itme">
              <h3>Branding</h3>
              <p>
                Proin rhoncus ex eu orci fermentum, et vestibulum odio euismod.
                Cras vehicula lacinia tristique. Morbi sapien
              </p>
              <div className="list">
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
                <div className="list-item">
                  <FontAwesomeIcon className="i" icon={faCheck} />
                  <h6>Free 15 GB Linux Hosting</h6>
                </div>
              </div>
              <Link className="">
                Get Started
                <FontAwesomeIcon className="i" icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
