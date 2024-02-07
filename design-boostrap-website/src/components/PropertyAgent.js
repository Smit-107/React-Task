import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from './Carousels';
import PropertyAgents from './Property-Agents';
import ContactAgent from './Contact-Agent';


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
