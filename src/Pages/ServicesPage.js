import React, { useEffect, useState } from "react";
import ServicesHeader from "../components/Services/ServicesHeader";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/Services/Services";
import Footer from "../components/footer/Footer";
import LangAndPhone from "../components/navbar/LangAndPhone";

function ServicesPage() {
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
      <ServicesHeader langs={lang} />
      <Services langs={lang} />
      <Footer langs={lang} />
    </>
  );
}

export default ServicesPage;
