import { HashRouter, Route, Routes } from "react-router";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from "../pages/About/About";
import Prices from "../pages/Prices/Prices";
import Request from "../pages/Request/Request";
import SEO from "../SEO";
import "../../styles/style.scss";

const App = () => {
  return (
    <HashRouter>
      <SEO/>

      <div className="container">
        <Header/>
        
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/request" element={<Request/>}/>
        </Routes>
        
        <Footer/>
      </div>
    </HashRouter>
  )
}

export default App;
