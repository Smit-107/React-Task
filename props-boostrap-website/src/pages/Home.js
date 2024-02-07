import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from '../components/Carousels';
import OurClients from '../components/Our-Clients';
import PropertyAgents from '../components/Property-Agents';
import ContactAgent from '../components/Contact-Agent';
import PropertyListing from '../components/Property-Listing';
import PlaceFind from '../components/Place-Find';
import PropertyTypes from '../components/Property-Types';


function Home() {
  return (
    <div>
      <div>
        <Menucar  />
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
