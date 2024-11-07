import { BrowserRouter, Routes, Route } from "react-router-dom";
import bg from "./assets/bg.png";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";

function App() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundPosition: "0 0",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
