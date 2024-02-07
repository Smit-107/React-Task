import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLocationDot, FaBed, FaBath, FaRulerCombined } from "react-icons/fa6";


function PropertyListing() {
    return (
        <div>
            <Container className='py-5 padding_list_x'>

                <Row>
                    <Col lg={6}>
                        <div className="text-start mx-auto">
                            <h1 className="mb-3 all_navy fw-bold">Property Listing</h1>
                            <p className='text-secondary'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div style={{ visibility: 'visible' }} className='h-auto'>
                            <ul className="nav d-flex justify-content-end align-items-end mb-5">
                                <li className="nav-item me-2">
                                    <span className="btn btn-outline-primary">Featured</span>
                                </li>
                                <li className="nav-item me-2">
                                    <span href='$' className="btn btn-outline-primary">For Sell</span>
                                </li>
                                <li className="nav-item me-0">
                                    <span href='$' className="btn btn-outline-primary">For Rent</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col lg={4} md={6} className='mt-4'>
                        <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <span className='cursor_pointer'>
                                    <img className="img-fluid" src={require('../images/property-1.jpg')} alt="" />
                                </span>
                                <div className="bg-gg rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                <div className="bg-white rounded-top color-gg position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                            </div>
                            <div className="p-4 pb-0">
                                <h5 className="color-gg mb-3 fw-bold">$12,345</h5>
                                <h5 className="d-block h5 mb-2 all_navy text-decoration-none fw-bold">Golden Urban House For Sell</h5>
                                <p className='text-secondary'><FaLocationDot className='mb-1 color-gg me-1'></FaLocationDot>123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex border-top text-secondary">

                                <small className="flex-fill text-center border-end py-2">
                                    <FaRulerCombined className='mb-1 color-gg me-1'></FaRulerCombined>1000 Sqft
                                </small>

                                <small className="flex-fill text-center border-end py-2">
                                    <FaBed className='mb-1 color-gg me-1'></FaBed>
                                    3 Bed
                                </small>

                                <small className="flex-fill text-center py-2">
                                    <FaBath className='mb-1 color-gg me-1'></FaBath>
                                    2 Bath
                                </small>

                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className='mt-4'>
                        <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <span className='cursor_pointer'>
                                    <img className="img-fluid" src={require('../images/property-2.jpg')} alt="" />
                                </span>
                                <div className="bg-gg rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                <div className="bg-white rounded-top color-gg position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                            </div>
                            <div className="p-4 pb-0">
                                <h5 className="color-gg mb-3 fw-bold">$12,345</h5>
                                <h5 className="d-block mb-2 all_navy text-decoration-none fw-bold">Golden Urban House For Sell</h5>
                                <p className='text-secondary'><FaLocationDot className='mb-1 color-gg me-1'></FaLocationDot>123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex border-top text-secondary">

                                <small className="flex-fill text-center border-end py-2">
                                    <FaRulerCombined className='mb-1 color-gg me-1'></FaRulerCombined>1000 Sqft
                                </small>

                                <small className="flex-fill text-center border-end py-2">
                                    <FaBed className='mb-1 color-gg me-1'></FaBed>
                                    3 Bed
                                </small>

                                <small className="flex-fill text-center py-2">
                                    <FaBath className='mb-1 color-gg me-1'></FaBath>
                                    2 Bath
                                </small>

                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className='mt-4'>
                        <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <span className='cursor_pointer'>
                                    <img className="img-fluid" src={require('../images/property-3.jpg')} alt="" />
                                </span>
                                <div className="bg-gg rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                <div className="bg-white rounded-top color-gg position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                            </div>
                            <div className="p-4 pb-0">
                                <h5 className="color-gg mb-3 fw-bold">$12,345</h5>
                                <h5 className="d-block h5 mb-2 all_navy text-decoration-none fw-bold">Golden Urban House For Sell</h5>
                                <p className='text-secondary'><FaLocationDot className='mb-1 color-gg me-1'></FaLocationDot>123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex border-top text-secondary">

                                <small className="flex-fill text-center border-end py-2">
                                    <FaRulerCombined className='mb-1 color-gg me-1'></FaRulerCombined>1000 Sqft
                                </small>

                                <small className="flex-fill text-center border-end py-2">
                                    <FaBed className='mb-1 color-gg me-1'></FaBed>
                                    3 Bed
                                </small>

                                <small className="flex-fill text-center py-2">
                                    <FaBath className='mb-1 color-gg me-1'></FaBath>
                                    2 Bath
                                </small>

                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className='mt-4'>
                        <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <span className='cursor_pointer'>
                                    <img className="img-fluid" src={require('../images/property-4.jpg')} alt="" />
                                </span>
                                <div className="bg-gg rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                <div className="bg-white rounded-top color-gg position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                            </div>
                            <div className="p-4 pb-0">
                                <h5 className="color-gg mb-3 fw-bold">$12,345</h5>
                                <span className="d-block h5 mb-2 all_navy text-decoration-none fw-bold">Golden Urban House For Sell</span>
                                <p className='text-secondary'><FaLocationDot className='mb-1 color-gg me-1'></FaLocationDot>123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex border-top text-secondary">

                                <small className="flex-fill text-center border-end py-2">
                                    <FaRulerCombined className='mb-1 color-gg me-1'></FaRulerCombined>1000 Sqft
                                </small>

                                <small className="flex-fill text-center border-end py-2">
                                    <FaBed className='mb-1 color-gg me-1'></FaBed>
                                    3 Bed
                                </small>

                                <small className="flex-fill text-center py-2">
                                    <FaBath className='mb-1 color-gg me-1'></FaBath>
                                    2 Bath
                                </small>

                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className='mt-4'>
                        <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <span className='cursor_pointer'>
                                    <img className="img-fluid" src={require('../images/property-5.jpg')} alt="" />
                                </span>
                                <div className="bg-gg rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                <div className="bg-white rounded-top color-gg position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                            </div>
                            <div className="p-4 pb-0">
                                <h5 className="color-gg mb-3 fw-bold">$12,345</h5>
                                <span className="d-block h5 mb-2 all_navy text-decoration-none fw-bold">Golden Urban House For Sell</span>
                                <p className='text-secondary'><FaLocationDot className='mb-1 color-gg me-1'></FaLocationDot>123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex border-top text-secondary">

                                <small className="flex-fill text-center border-end py-2">
                                    <FaRulerCombined className='mb-1 color-gg me-1'></FaRulerCombined>1000 Sqft
                                </small>

                                <small className="flex-fill text-center border-end py-2">
                                    <FaBed className='mb-1 color-gg me-1'></FaBed>
                                    3 Bed
                                </small>

                                <small className="flex-fill text-center py-2">
                                    <FaBath className='mb-1 color-gg me-1'></FaBath>
                                    2 Bath
                                </small>

                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className='mt-4'>
                        <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <span className='cursor_pointer'>
                                    <img className="img-fluid" src={require('../images/property-6.jpg')} alt="" />
                                </span>
                                <div className="bg-gg rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                <div className="bg-white rounded-top color-gg position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                            </div>
                            <div className="p-4 pb-0">
                                <h5 className="color-gg mb-3 fw-bold">$12,345</h5>
                                <span className="d-block h5 mb-2 all_navy text-decoration-none fw-bold">Golden Urban House For Sell</span>
                                <p className='text-secondary'><FaLocationDot className='mb-1 color-gg me-1'></FaLocationDot>123 Street, New York, USA</p>
                            </div>
                            <div className="d-flex border-top text-secondary">

                                <small className="flex-fill text-center border-end py-2">
                                    <FaRulerCombined className='mb-1 color-gg me-1'></FaRulerCombined>1000 Sqft
                                </small>

                                <small className="flex-fill text-center border-end py-2">
                                    <FaBed className='mb-1 color-gg me-1'></FaBed>
                                    3 Bed
                                </small>

                                <small className="flex-fill text-center py-2">
                                    <FaBath className='mb-1 color-gg me-1'></FaBath>
                                    2 Bath
                                </small>

                            </div>
                        </div>
                    </Col>

                    <Col className="text-center mt-4" style={{visibility: 'visible'}}>
                        <Button className="btn border-gg bg-gg text-white py-3 px-5">Browse More Property</Button>
                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default PropertyListing;