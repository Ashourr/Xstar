import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import LangAndPhone from "../components/navbar/LangAndPhone";
import Footer from "../components/footer/Footer";
import Header2 from "../components/header2/Header2";
import AboutHome from "../components/aboutHome/AboutHome";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider2/Slider2";
import ServiceHome from "../components/serviceHome/ServiceHome";
import Video from "../components/Video/Video";
import PORTFOLIO from "../components/PORTFOLIO/PORTFOLIO";
import TeamHome from "../components/teamHome/TeamHome";
import Artcile from "../components/Artcile/Artcile";
import Comment from "../components/comment/Comment";

function HomePage() {
  let [lang, setlang] = useState("en");

  function langs() {
    const newLang = lang === "en" ? "ar" : "en";
    setlang(newLang);
    localStorage.setItem("lang", newLang);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setlang(savedLang);
    } else {
      localStorage.setItem("lang", "ar"); // أول مرة يفتح المشروع، يحفظ الافتراضي
    }
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Navbar lang={langs} langs={lang} />
      <LangAndPhone lang={langs} langs={lang} />
      <Header2 langs={lang} />
      <Slider langs={lang} />
      <AboutHome langs={lang} />
      <Slider2 langs={lang} />
      <ServiceHome langs={lang} />
      <Video langs={lang} />
      <PORTFOLIO langs={lang} />
      <TeamHome langs={lang} />
      <Comment langs={lang} />
      <Artcile langs={lang} />
      <Footer langs={lang} />
    </>
  );
}

export default HomePage;