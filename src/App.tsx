import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import SolutionsMixedReality from "./pages/SolutionsMixedReality";
import Government from "./pages/Government";
import InnovationPortfolio from "./pages/InnovationPortfolio";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/mixed-reality" element={<SolutionsMixedReality />} />
          <Route path="/government" element={<Government />} />
          <Route path="/innovation-portfolio" element={<InnovationPortfolio />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}