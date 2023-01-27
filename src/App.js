import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./components/image/logo.png";

// Pages
import Home from "./pages/Home/Home"
import Cardapio from "./pages/Cardapio/Cardapio";

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
          <img src={logo} alt="" className="logo_brand" />
        </a>
        <div className="navbar_info">
          <p>Desde 1991</p>
          <h1>Candosa</h1>
        </div>
          </div>

          <div className="info_box">
            <p>Phone:<a href="/">21 99999-9999</a></p>
            <p>Localidade:</p>
            <p>Estrada do Galeao 999 / Prox aos bombeiros</p>
          </div> 
        </div>
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
