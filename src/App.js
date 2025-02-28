import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import BlogPage from "./Pages/BlogPage";
import CaseStudyPage from "./Pages/CaseStudyPage";
import AboutPage from "./Pages/AboutPage";
import Page404 from "./Pages/Page404";
import TeamPage from "./Pages/TeamPage";
import PlansPage from "./Pages/PlansPage";
import FAQPage from "./Pages/FAQPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/study" element={<CaseStudyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
