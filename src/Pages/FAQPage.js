import React, { useEffect, useState } from "react";
import FAQHeader from "../components/FAQ’S/FAQHeader";
import FAQ from "../components/FAQ’S/FAQ";
import Navbar from "../components/navbar/Navbar";
import LangAndPhone from "../components/navbar/LangAndPhone";
import Footer from "../components/footer/Footer";

function FAQPage() {
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
      <FAQHeader langs={lang} />
      <FAQ langs={lang} />
      <Footer langs={lang} />
    </>
  );
}

export default FAQPage;
