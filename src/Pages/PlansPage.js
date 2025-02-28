import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import LangAndPhone from '../components/navbar/LangAndPhone'
import Footer from '../components/footer/Footer'
import PlansHeader from '../components/Plans/PlansHeader'
import Plans from '../components/Plans/Plans'

function PlansPage() {
    let [lang, setlang] = useState("en");
    // let [loading, setloading] = useState(true);
  
    function langs() {
      if (lang === "en") {
        setlang("ar");
        localStorage.setItem("lang", "ar");
      } else {
        setlang("en");
        localStorage.setItem("lang", "en");
      }
    }
    useEffect(() => {
      setlang(localStorage.getItem("lang"));
      window.scroll(0, 0);
      // setTimeout(() => {
      //   setloading(false);
      // }, 1000);
    }, []);
  return (
    <>
      <Navbar lang={langs} langs={lang} />
      <LangAndPhone lang={langs} langs={lang} />
      <PlansHeader langs={lang} />
      <Plans langs={lang} />
      <Footer langs={lang} />
    </>
  )
}

export default PlansPage