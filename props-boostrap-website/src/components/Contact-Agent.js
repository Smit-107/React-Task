import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone,FaCalendarDays  } from "react-icons/fa6";

function ContactAgent() {
    return (
        <div className='bg-white'>
            <Container className='py-5'>

                <div className='p-3 contect_mp card_light_green'>
                    <div className='card_border bg-white'>
                        <Row>
                            <Col lg={6}>

                                <div className='p-3'>
                                    <img src={require('../images/q1.jpg')} alt="" className='w-100 rounded p-2' />
                                </div>

                            </Col>

                            <Col lg={6} className='p-4  m-auto'>
                                <div className='p-2 pe-5' id='contact_padding'>
                                    <h1 className='mb-3 fw-bold all_navy'>Contact With Our Certified Agent</h1>
                                    <p className='text-body-secondary'>
                                        Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.
                                    </p>

                                </div>

                                <button className="btn m-2 text-white bg-gg py-3 px-4 me-2"><FaPhone className='me-2 mb-1'></FaPhone>Make a Call</button>
                                <button className="btn m-2 text-white bg_navy py-3 px-4"><FaCalendarDays className='me-2 mb-1'></FaCalendarDays>Get a Appoinment</button>

                            </Col>
                        </Row>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default ContactAgent;