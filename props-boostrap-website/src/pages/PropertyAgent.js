import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from '../components/Carousels';
import PropertyAgents from '../components/Property-Agents';
import ContactAgent from '../components/Contact-Agent';


function PropertyType() {
  return (
    <div>
      <div>
        
        <Menucar></Menucar>
        <PropertyAgents></PropertyAgents>
        <ContactAgent></ContactAgent>
        
      </div>

    </div>
  );
}

export default PropertyType;
