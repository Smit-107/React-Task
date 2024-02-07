import 'bootstrap/dist/css/bootstrap.min.css';
import Menucar from './Carousels';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPhone, FaLocationDot, } from "react-icons/fa6";
import { BsFillEnvelopeAtFill } from "react-icons/bs";


function Contact() {
  return (
    <div>
      <div>

        <Menucar></Menucar>

        <Container className=" py-5" id='contact_us_all'>
          <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '600px', visibility: 'visible' }}>
            <h1 className="mb-3 all_navy fw-bold">Contact Us</h1>
            <p className='text-secondary'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>

          <Row className="g-4 mb-4">
            <Col>
              <Row className="g-4">
                <Col md={6} lg={4} style={{ visibility: 'visible' }}>
                  <div className="card_light_green  rounded p-3">
                    <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                      <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                        <FaLocationDot className='color-gg h5 mt-2'></FaLocationDot>
                      </div>
                      <span className='text-secondary'>123 Street, New York, USA</span>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} style={{ visibility: 'visible' }}>
                  <div className="card_light_green rounded p-3">
                    <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                      <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                        <BsFillEnvelopeAtFill className='color-gg h5 mt-2'></BsFillEnvelopeAtFill>
                      </div>
                      <span className='text-secondary'>info@example.com</span>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} style={{ visibility: 'visible' }}>
                  <div className="card_light_green rounded p-3">
                    <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                      <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                        <FaPhone className='color-gg h5 mt-2'></FaPhone>
                      </div>
                      <span className='text-secondary'>+012 345 6789</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>


          <Row>
            {/* <Col md={6} style={{ visibility: 'visible' }} className='map_contact'>
              <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" style={{ minHeight: '400px', border: 0 }}  aria-hidden="false" tabIndex="0"></iframe>
            </Col> */}
            <Col md={6}>
              <div style={{ visibility: 'visible' }}>
                <p className="mb-4 text-secondary">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span className='color-gg text-decoration-none'>Download Now</span>.</p>
                <form className='contact_from'>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text"  className="form-control" />
                        <label className='demo_contact_a'>Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email"  className="form-control" />
                        <label className='demo_contact_a'>Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text"  className="form-control" />
                        <label className='demo_contact_a'>Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" style={{ height: '150px' }}></textarea>
                        <label className='demo_contact_a'>Leave a message here</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn bg-gg text-white w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
}

export default Contact;
