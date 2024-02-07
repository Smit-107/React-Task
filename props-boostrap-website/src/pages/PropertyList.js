import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from '../components/Carousels';
import PropertyListing from '../components/Property-Listing';
import ContactAgent from '../components/Contact-Agent';



function PropertyList() {
  return (
    <div>
      <div>
        
        <Menucar></Menucar>
        <PropertyListing></PropertyListing>
        <ContactAgent></ContactAgent>
        
      </div>
    </div>
  );
}

export default PropertyList;
