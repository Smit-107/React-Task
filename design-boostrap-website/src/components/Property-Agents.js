import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";


function PropertyAgents() {
    return (
        <div>
            <Container className='pt-5 pb-4'>
                <Row>
                    <Col>
                        <div className='pro_p text-center ' id='agent_media'>
                            <div className='mb-3 display-6 fw-bold all_navy'>Property Agents</div>
                            <p className='text-secondary mb-3 text-center'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                    </Col>
                </Row>

                <Row className='my-5 px-3' id='margin_top'>
                    <Col lg={3} md={6}>
                        <div className='agent_img agent_padding'>
                            <div className='position-relative'>
                                <img className='img-fluid' src={require('../images/PA-1.jpg')} alt="" />
                                <div className='pro_agent_icon position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                                    <span className='btn-square mx-1'>
                                        <FaFacebookF className='color-gg white_hover'></FaFacebookF>
                                    </span>
                                    <span className='btn-square mx-1'>
                                        <FaTwitter className='color-gg white_hover'></FaTwitter>
                                    </span>
                                    <span className='btn-square mx-1'>
                                        <FaInstagram className='color-gg white_hover'></FaInstagram>
                                    </span>
                                </div>
                            </div>
                            <div className='text-center p-4 mt-3'>
                                <h5 className='fw-bold mb-0 all_navy'>Full Name</h5>
                                <small className='text-secondary'>Designation</small>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className='agent_img agent_padding'>
                            <div className='position-relative '>
                                <img className='img-fluid' src={require('../images/PA-2.jpg')} alt="" />
                                <div className='pro_agent_icon position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                                    <span className='btn-square mx-1'>
                                        <FaFacebookF className='color-gg white_hover'></FaFacebookF>
                                    </span>
                                    <span className='btn-square mx-1'>
                                        <FaTwitter className='color-gg white_hover'></FaTwitter>
                                    </span>
                                    <span className='btn-square mx-1'>
                                        <FaInstagram className='color-gg white_hover'></FaInstagram>
                                    </span>
                                </div>
                            </div>
                            <div className='text-center p-4 mt-3'>
                                <h5 className='fw-bold mb-0 all_navy'>Full Name</h5>
                                <small className='text-secondary'>Designation</small>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className='agent_img agent_padding'>
                            <div className='position-relative '>
                                <img className='img-fluid' src={require('../images/PA-3.jpg')} alt="" />
                                <div className='pro_agent_icon position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                                    <span className='btn-square mx-1'>
                                        <FaFacebookF className='color-gg white_hover'></FaFacebookF>
                                    </span>
                                    <span className='btn-square mx-1'>
                                        <FaTwitter className='color-gg white_hover'></FaTwitter>
                                    </span>
                                    <span className='btn-square mx-1'>
                                        <FaInstagram className='color-gg white_hover'></FaInstagram>
                                    </span>
                                </div>
                            </div>
                            <div className='text-center p-4 mt-3'>
                                <h5 className='fw-bold mb-0 all_navy'>Full Name</h5>
                                <small className='text-secondary'>Designation</small>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className='agent_img agent_padding'>
                            <div className='position-relative '>
                                <img className='img-fluid' src={require('../images/PA-4.jpg')} alt="" />
                                <div className='pro_agent_icon position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                                    <span className='btn-square mx-1 '>
                                        <FaFacebookF className='color-gg  white_hover'></FaFacebookF>
                                    </span>
                                    <span className='btn-square mx-1 '>
                                        <FaTwitter className='color-gg white_hover'> </FaTwitter>
                                    </span>
                                    <span className='btn-square mx-1 '>
                                        <FaInstagram className='color-gg  white_hover'></FaInstagram>
                                    </span>
                                </div>
                            </div>
                            <div className='text-center p-4 mt-3'>
                                <h5 className='fw-bold mb-0 all_navy'>Full Name</h5>
                                <small className='text-secondary'>Designation</small>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default PropertyAgents;
