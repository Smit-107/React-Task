import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from './Carousels';
import PropertyAgents from './Property-Agents';
import ContactAgent from './Contact-Agent';
import PlaceFind from './Place-Find';



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
