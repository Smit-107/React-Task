// import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLocationDot, FaPhone, FaEnvelope, FaAngleRight, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn ,FaCopyright } from "react-icons/fa6";


function FooterAll() {
    return (
        <div className='bg_navy'>
            <div className='mt-5 px-2'>
                <Container className='footer_border py-5'>
                    <Row id='footer_all_padding'>

                        <Col lg={3} md={6}>
                            <div className='mt-5'>
                                <h5 className="text-white mb-4 fw-bold">Get In Touch</h5>
                                <div className='text_footer'>
                                    <p className="mb-2"><FaLocationDot className='me-2'></FaLocationDot>123 Street, New York, USA</p>
                                    <p className="mb-2"><FaPhone className='me-2'></FaPhone>+012 345 67890</p>
                                    <p className="mb-2"><FaEnvelope className="me-3"></FaEnvelope>info@example.com</p>
                                </div>


                                <div className="d-flex pt-2 footer_icon">

                                    <span className='border rounded-circle px-2 py-1 mx-1 text-white' >
                                        <FaTwitter className='mb-1 gg_hover'></FaTwitter>
                                    </span>

                                    <span className='border rounded-circle px-2 py-1 mx-1 text-white' >
                                        <FaFacebookF className='mb-1 gg_hover'></FaFacebookF>
                                    </span>

                                    <span className='border rounded-circle px-2 py-1 mx-1 text-white' >
                                        <FaYoutube className='mb-1 gg_hover'></FaYoutube>
                                    </span>

                                    <span className='border rounded-circle px-2 py-1 ms-1 text-white' >
                                        <FaLinkedinIn className='mb-1 gg_hover'></FaLinkedinIn>
                                    </span>

                                </div>
                            </div>

                        </Col>

                        <Col lg={3} md={6}>
                            <div className='mt-5'>
                                <h5 className="text-white mb-4 fw-bold">Quick Links</h5>
                                <div className='text_footer footer_hover_letter'>
                                    <div className='mb-1'>
                                        <FaAngleRight className='me-2'></FaAngleRight>
                                        <span className='h6'>About Us</span>
                                    </div>

                                    <div className='mb-1'>
                                        <FaAngleRight className='me-2'></FaAngleRight>
                                        <span className='h6'>Contact Us</span>
                                    </div>

                                    <div className='mb-1'>
                                        <FaAngleRight className='me-2'></FaAngleRight>
                                        <span className='h6'>Our Services</span>
                                    </div>

                                    <div className='mb-1'>
                                        <FaAngleRight className='me-2'></FaAngleRight>
                                        <span className='h6'>Privacy Policy</span>
                                    </div>

                                    <div className='mb-1'>
                                        <FaAngleRight className='me-2'></FaAngleRight>
                                        <span className='h6'>Terms & Condition</span>
                                    </div>

                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className='mt-5'>
                                <h5 className="text-white mb-4 fw-bold">Photo Gallery </h5>
                                <Row className='pt-2 pe-4' id='footer_photo'>

                                    <Col className='px-1'>
                                        <img src={require('../images/property-1.jpg')} className='img-fluid rounded bg-light p-1' alt="" />
                                    </Col>

                                    <Col className='px-1'>
                                        <img src={require('../images/property-2.jpg')} className='img-fluid rounded bg-light p-1' alt="" />
                                    </Col>

                                    <Col className='px-1'>
                                        <img src={require('../images/property-3.jpg')} className='img-fluid rounded bg-light p-1' alt="" />
                                    </Col>

                                </Row>

                                <Row className='pt-2 pe-4' id='footer_photo'>

                                    <Col className='px-1'>
                                        <img src={require('../images/property-4.jpg')} className='img-fluid rounded bg-light p-1' alt="" />
                                    </Col>

                                    <Col className='px-1'>
                                        <img src={require('../images/property-5.jpg')} className='img-fluid rounded bg-light p-1' alt="" />
                                    </Col>

                                    <Col className='px-1'>
                                        <img src={require('../images/property-6.jpg')} className='img-fluid rounded bg-light p-1' alt="" />
                                    </Col>

                                </Row>

                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className='mt-5'>
                                <h5 className="text-white mb-4 fw-bold">Newseletter </h5>
                                <div className='text_footer '>
                                    <p className='mb-3 h6'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

                                    <div className='position-relative footer_in'>

                                        <input className="footer_input_all form-control bg-transparent w-100 py-3 ps-4 pe-5 " type="text" placeholder="Your email" />

                                        <button type="button" className="btn bg-gg text-white fw-regular py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div>
                <Container>
                    <Row className='py-4' id='footer_all_padding'>
                        <Col md={6} className='text_footer'>
                            <div className='span_all'>

                                <div className='d-flex flex-row' id='span_div1'>
                                    <div> 
                                        <span><FaCopyright></FaCopyright> </span> 
                                        <a href='$' className='text-white'>
                                            Your Site Name
                                        </a>
                                        <span> , All Right Reserved.  </span>
                                    </div>

                                    <div>
                                        <span className='ms-1'> Designed By </span>
                                        <a href='$' className='text-white'>
                                            HTML Codex
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <span>Distributed By </span> 
                                    <a href='$' className='text-white'>
                                        ThemeWagon
                                    </a>
                                </div>

                            </div>
                        </Col>

                        <Col md={6} className='text-white  d-flex justify-content-end align-items-center ' id='span_div'>
                            <span className='demo_fot'>Home</span>
                            <span className='demo_fot'>Cookies</span>
                            <span className='demo_fot'>Help</span>
                            <span className=''>FQAs</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FooterAll;

