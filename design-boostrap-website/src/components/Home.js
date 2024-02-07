import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from './Carousels';
import OurClients from './Our-Clients';
import PropertyAgents from './Property-Agents';
import ContactAgent from './Contact-Agent';
import PropertyListing from './Property-Listing';
import PlaceFind from './Place-Find';
import PropertyTypes from './Property-Types';


function Home() {
  return (
    <div>
      <div>
        <Menucar></Menucar>
        <PropertyTypes></PropertyTypes>
        <PlaceFind></PlaceFind>
        <PropertyListing></PropertyListing>
        <ContactAgent></ContactAgent>
        <PropertyAgents></PropertyAgents>
        <OurClients></OurClients>
      </div>

    </div>
  );
}

export default Home;
