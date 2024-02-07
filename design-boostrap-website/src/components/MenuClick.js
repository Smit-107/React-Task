import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MenuClick(props) {
    return (

        <Container className='p-0 nav-bar container_menu' id='sticky-top'>
            <Navbar expand="lg" className="bg-white px-4 py-0 ">


                <Navbar.Brand href='$' id='new-all' className='d-flex me-auto d-flex align-items-center text-center'>
                    <div className='icon p-2 me-2'>
                        <img src={require('../images/icon-deal.png')} alt='' style={{ width: '30px', height: '30px' }} />
                    </div>
                    <span className='h1 color-gg m-0 fw-bold'>Makaan</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />


                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '300px' }} navbarScroll >


                        <Link to="home" className='fw-500 text-black text-decoration-none' id='nav-link'>HOME</Link>

                        <Link className='fw-500 text-black text-decoration-none' to="about" id='nav-link'>ABOUT</Link>

                        <NavDropdown title="PROPERTY" id="collasible-nav-dropdown nav-link">

                            <NavDropdown.Item href="$">
                                <Link className='fw-500 text-black text-decoration-none' to="propertylist">Property List</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="$">
                                <Link className='fw-500 text-black text-decoration-none' to="propertytype">Property Type</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="$">
                                <Link className='fw-500 text-black text-decoration-none' to="propertyagent">Property Agent</Link>
                            </NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className='mm' title="PAGES" href="#action8" id="collasible-nav-dropdown nav-link">

                            <NavDropdown.Item href="$">
                                <Link className='fw-500 text-black text-decoration-none' to="testimonial">Testimonial</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item href="$">
                                <Link className='fw-500 text-black text-decoration-none' to="404Error">404 Error</Link>
                            </NavDropdown.Item>

                        </NavDropdown>

                        <Link id='nav-link' className='fw-500 text-black text-decoration-none' to="contact">CONTACT</Link>


                    </Nav>

                    <Form>
                        <Button variant="primary bg-gg border-gg" id='add_prooerty_button'>
                            <span className='p-1'>Add Property</span>
                        </Button>
                    </Form>

                </Navbar.Collapse>


            </Navbar>
        </Container>

    );
}


export default MenuClick;
