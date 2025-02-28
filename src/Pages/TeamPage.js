import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import LangAndPhone from "../components/navbar/LangAndPhone";
import Navbar from "../components/navbar/Navbar";
import Team from "../components/team/Team";
import TeamHeader from "../components/team/TeamHeader";

function TeamPage() {
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
      <TeamHeader langs={lang} />
      <Team langs={lang} />
      <Footer langs={lang} />
    </>
  );
}

export default TeamPage;
