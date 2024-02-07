import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from '../components/Carousels';
import PropertyAgents from '../components/Property-Agents';
import ContactAgent from '../components/Contact-Agent';
import PlaceFind from '../components/Place-Find';



function About() {
  return (
    <div>
      <div>
        
        <Menucar></Menucar>
        <PlaceFind></PlaceFind>
        <ContactAgent></ContactAgent>
        <PropertyAgents></PropertyAgents>
      </div>

    </div>
  );
}

export default About;
