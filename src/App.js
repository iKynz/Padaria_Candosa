import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./pages/image/logo.png";

// icons
import {FaWhatsapp} from "react-icons/fa";
import {GoLocation} from "react-icons/go";

// Pages
import Home from "./pages/Home/Home"
import SobreNos from "./pages/SobreNos/SobreNos";
import Produtos from "./pages/Produtos/Produtos";
import Contato from "./pages/Contato/Contato"

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (

    <div className="App">

      <div className="header_container">
        <div className="container">
          <div className="navbar_header">

            <a href="/">
              <img src={logo}
                alt="candosa"
                className="logo_brand"
                title="candosa" />
            </a>

            <div className="navbar_info">
              <h1>Candosa</h1>
              <p>Desde 1961</p>
            </div>

          </div>

          <div className="info_box">
            <FaWhatsapp className="icon-phone" />
            <div className="fa-phone">
              <p>Phone:</p>
              <a href="/">21 99999-9999</a>
            </div>

            <GoLocation className="icon-location" />
            <div className="fa-map">
              <p>Local:</p>
              <address>
                Estrada do Galeão 999
              </address>
            </div>

          </div>
        </div>
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
