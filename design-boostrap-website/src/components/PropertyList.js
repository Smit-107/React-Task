import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from './Carousels';
import PropertyListing from './Property-Listing';
import ContactAgent from './Contact-Agent';



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
