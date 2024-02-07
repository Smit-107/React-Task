import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/ContactUs";
import PropertyList from "./components/PropertyList";
import PropertyAgent from "./components/PropertyAgent";
import PropertyType from "./components/PropertyType";
import OurClient from "./components/OurClients";
import ErrorPage from "./components/404-error";


import MenuClick from "./components/MenuClick";
import FooterAll from "./components/Footer";




function App() {
  return (
    <div>
      <MenuClick></MenuClick>
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="propertylist" element={<PropertyList />} />
        <Route path="propertytype" element={<PropertyType />} />
        <Route path="propertyagent" element={<PropertyAgent />} />
        <Route path="testimonial" element={<OurClient />} />
        <Route path="404Error" element={<ErrorPage />} />
      </Routes>
      <FooterAll></FooterAll>
    </div>
  );
}

export default App;
