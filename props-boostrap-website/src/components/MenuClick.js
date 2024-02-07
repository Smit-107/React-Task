import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';

function MenuClick(props) {

  
    return (

        <Container className={`p-0 nav-bar container_menu `} id='sticky-top'>
            <Navbar expand="lg" className={`bg-white px-4 py-0 `}>


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

                            {
                                props.send_propert.map((val_propert) =>
                                    <NavDropdown.Item>
                                        <Link className='fw-500 text-black text-decoration-none' to={val_propert.route}>{val_propert.title}</Link>
                                    </NavDropdown.Item>
                                )
                            }

                        </NavDropdown>

                        <NavDropdown className='mm' title="PAGES" href="#action8" id="collasible-nav-dropdown nav-link">

                            {
                                props.send_pages.map((val_page) =>
                                    <NavDropdown.Item>
                                        <Link className='fw-500 text-black text-decoration-none' to={val_page.route}>{val_page.title}</Link>
                                    </NavDropdown.Item>
                                )
                            }

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

    //     <Navbar expand="lg" className="bg-body-tertiary">
    //     <Container fluid>
    //       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //       <Navbar.Collapse id="navbarScroll">
    //         <Nav
    //           className="me-auto my-2 my-lg-0"
    //           style={{ maxHeight: '100px' }}
    //           navbarScroll
    //         >
    //           <Nav.Link href="#action1">Home</Nav.Link>
    //           <Nav.Link href="#action2">Link</Nav.Link>
    //           <NavDropdown title="Link" id="navbarScrollingDropdown">
    //             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action4">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action5">
    //               Something else here
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //           <Nav.Link href="#" disabled>
    //             Link
    //           </Nav.Link>
    //         </Nav>
    //         <Form className="d-flex">
    //           <Form.Control
    //             type="search"
    //             placeholder="Search"
    //             className="me-2"
    //             aria-label="Search"
    //           />
    //           <Button variant="outline-success">Search</Button>
    //         </Form>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>

    );
}


export default MenuClick;
