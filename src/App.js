
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Disclaimer from "./Components/FooterComponent/Disclaimer";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import MainContent from "./Components/MainContent";
import AboutUs from "./pages/AboutUs";


export default function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </Layout>
    </Router>
  );
}

