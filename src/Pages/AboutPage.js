import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import LangAndPhone from "../components/navbar/LangAndPhone";
import Footer from "../components/footer/Footer";
import AboutHome from "../components/aboutHome/AboutHome";
import Comment from "../components/comment/Comment";
import TeamHome from "../components/teamHome/TeamHome";
import AboutHeader from "../components/about/AboutHeader";
import Section from "../components/about/section/Section";

function AboutPage() {
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
      <AboutHeader langs={lang} />
      <AboutHome langs={lang} />
      <TeamHome langs={lang} />
      <Section langs={lang} />
      <Comment langs={lang} />
      <Footer langs={lang} />
    </>
  );
}

export default AboutPage;
