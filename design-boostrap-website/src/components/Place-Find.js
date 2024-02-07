import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheck  } from "react-icons/bs";

function PlaceFind() {
    return (
        <div className='bg-white'>
            <Container className='py-5'>

                <Row className='align-items-center'>
                    <Col lg={6} className='place_find_padding place_find_x'>
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className='img-fluid w-100 ' src={require('../images/perfect_1.jpg')} alt="" />
                        </div> 
                    </Col>

                    <Col lg={6}>
                        <div className='px-4'>
                            <h1 className='mb-4 fw-bold all_navy'>#1 Place To Find The Perfect Property</h1>

                            <p className='mb-4 text-body-secondary'>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>

                            <p className='text-body-secondary mt-0 mb-2'>
                                <BsCheck className='fw-bolder h4 color-gg fw-bold'></BsCheck> 
                                Tempor erat elitr rebum at clita
                            </p>

                            <p className='text-body-secondary mt-0 mb-2'>
                                <BsCheck className='fw-bolder h4 color-gg fw-bold'></BsCheck> 
                                Aliqu diam amet diam et eos
                            </p>

                            <p className='text-body-secondary mt-0 mb-2'> 
                                <BsCheck className='fw-bolder h4 color-gg fw-bold'></BsCheck> 
                                Clita duo justo magna dolore erat amet
                            </p>

                            <button className="btn bg-gg text-white py-3 px-5 mt-3">Read More</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default PlaceFind;