import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function PropertyTypes() {
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='pro_p text-center'>
                            <div className='mb-3 display-6 fw-bold all_navy'>Property Types</div>
                            <p className='text-secondary mb-3 text-center'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo</p>
                        </div>
                    </Col>
                </Row>

                <Row className='card_row'>
                    <Col lg={3} sm={6} >
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-1.png')} alt="" />
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Apartment</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>

                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-2.png')} alt=''/>
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Villa</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>

                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-3.png')} alt=""/>
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Home</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>

                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-4.png')} alt=""  />
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Office</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>
                </Row>

                <Row className='card_row'>
                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img  src={require('../images/icon-5.png')} alt=""  />
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Building</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>

                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-6.png')} alt="" />
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Townhouse</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>

                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-7.png')} alt="" />
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Shop</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>

                    <Col lg={3} sm={6}>
                        <div className='card_pp'>
                            <div className='p-3 card_light_green card_hover rounded'>
                                <div className='p-4 bg-white card_border text-center card_hover_bg rounded'>
                                    <div className='icon mb-3 card_hover_img'>
                                        <img src={require('../images/icon-8.png')} alt="" />
                                    </div>

                                    <div className='fw-bold h5 mb-2 all_navy card_hover_text'>Garage</div>
                                    <span className='color-gg fw-500 card_hover_text'>123 Properties</span>
                                </div>
                            </div>
                        </div>  
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default PropertyTypes;
