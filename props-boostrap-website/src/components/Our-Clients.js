// import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:2,
    margin: 20,
    loop:true,
    nav: true,
    dots: false,
    autoplay: true,
    // navText: ["<FaArrowLeftLong></FaArrowLeftLong>","<FaArrowRightLong></FaArrowRightLong>"],
    autoplayTimeout:3000,
    autoplayHoverPause:true, 
    responsive: {
        0: {
            items: 1,
        },
        992:{
            items:2,
        }
    }
};

function OurClients() {
    return (
        <div>
            <Container className='pt-5 pb-4'>
                
                <Row>
                    <Col>
                        <div className='pro_p text-center ' id='agent_media'>
                            <div className='mb-3 display-6 fw-bold all_navy'>Our Clients Say!</div>
                            <p className='text-secondary pb-3 text-center'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-5 mt-4 px-3' id='margin_top'>
                    <Col className='px-5' id='testimonial_slider'>
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className='item'>

                                <div className='card_pp'>
                                    <div className='p-3  card_light_green'>
                                        <div className='p-4 bg-white card_border'>
                                            <p className='mb-3'>
                                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos
                                            </p>
                                            <div className='d-flex align-items-center'>
                                                <img className='img-fluid flex-shrink-0 rounded' src={require('../images/testimonial-1.jpg')} style={{ height: '45px', width: '45px' }} alt="" />
                                                <div className='ps-3'>
                                                    <h6 className='fw-bold mb-1'>Client Name</h6>
                                                    <span>Profession</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='item'>

                                <div className='card_pp'>
                                    <div className='p-3 card_light_green'>
                                        <div className='p-4 bg-white card_border'>
                                            <p className='mb-3'>
                                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos
                                            </p>
                                            <div className='d-flex align-items-center'>
                                                <img className='img-fluid flex-shrink-0 rounded' src={require('../images/testimonial-2.jpg')} style={{ height: '45px', width: '45px' }} alt="" />
                                                <div className='ps-3'>
                                                    <h6 className='fw-bold mb-1'>Client Name</h6>
                                                    <span>Profession</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='item'>

                                <div className='card_pp'>
                                    <div className='p-3 card_light_green'>
                                        <div className='p-4 bg-white card_border'>
                                            <p className='mb-3'>
                                                Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos
                                            </p>
                                            <div className='d-flex align-items-center'>
                                                <img className='img-fluid flex-shrink-0 rounded' src={require('../images/testimonial-3.jpg')} style={{ height: '45px', width: '45px' }} alt="" />
                                                <div className='ps-3'>
                                                    <h6 className='fw-bold mb-1'>Client Name</h6>
                                                    <span>Profession</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default OurClients;
