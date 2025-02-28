import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../Imges/asset 7.png";
import img2 from "../../Imges/asset 8.png";
import "./Plans.css"
function PlansHeader(props) {
  return (
    <div className='plansHeader'>
      <div className='container'>
      <div className={`cont ${props.langs}`}>
          <h2 className={`${props.langs}`}>
            {props.langs === "ar" ? "Pricing Plans" : "خطط التسعير"}
          </h2>
          <div className="link">
            <Link className={`${props.langs}`}>
              {props.langs === "ar" ? "Home" : "الرئيسية"}
              <FontAwesomeIcon className="i" icon={faArrowRight} />
            </Link>
            <h6 className={`${props.langs}`}>
              {props.langs === "ar" ? "Pricing Plans" : "خطط التسعير"}
            </h6>
          </div>
          <div className="img1">
            <img src={img1} alt="..." />
          </div>
          <div className="img2">
            <img src={img2} alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlansHeader