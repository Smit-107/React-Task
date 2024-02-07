import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import PropertyList from "./pages/PropertyList";
import PropertyAgent from "./pages/PropertyAgent";
import PropertyType from "./pages/PropertyType";
import OurClient from "./pages/OurClients";
import ErrorPage from "./pages/404-error";
import MenuClick from "./components/MenuClick";
import FooterAll from "./components/Footer";

let propert=[{title:'Property List',route:'propertylist'} ,{title:'Property Type',route:'propertytype'} ,{title:'Property Agent',route:'propertyagent'}];
let pages=[{title:'Testimonial',route:'testimonial'} ,{title:'404 Error',route:'404Error'}];

export var carousels_img =  [require('./images/carousel-1.jpg'),require('./images/carousel-2.jpg')];
export var propert_agentss= [
   {img_agents:[require('./images/PA-1.jpg'),require('./images/PA-2.jpg'),require('./images/PA-3.jpg'),require('./images/PA-4.jpg')]},
   {agent_name:['Full Name','Full Name','Full Name','Full Name',]},
   {agent_work:['Designation','Designation','Designation','Designation']}
]

// console.log(window.location);
// if(!window.location.href.includes('/home'))
// window.location.href='home';

function App() {
  return (
    <div>
      
      <MenuClick send_propert={propert} send_pages={pages}></MenuClick>
      
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
