import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Col, Container, Form, Row } from 'react-bootstrap';

function Menucar(props) {
  return (
    <div>

      <div style={{ marginTop: '-122px' }} className='m-heder'>

        <div className='d-flex p-0'>
          <Row className='me-0 ms-0 p-0'>

            <Col className='p-0' md={{ span: 6, order: 2 }}>
              <div className='h-auto'>
                <Carousel>
                  <Carousel.Item>
                    <img className=" d-block w-100" src={require('../images/carousel-1.jpg')} alt="First slide" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src={require('../images/carousel-2.jpg')} alt="Second slide" />
                  </Carousel.Item>

                </Carousel>
              </div>
            </Col>

            <Col className='p-0 d-flex align-items-center' md={{ span: 6, order: 1 }}>
              <div className=' h-auto p-5 mt-5' id='co-co'>
                <p className='display-5 fw-bold all_navy mb-4'>
                  Find A <span className='color-gg'>Perfect Home</span> To Live With Your Family
                </p>
                <div className='text-secondary pb-2 mb-4'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</div>
                <Button className='bg-gg mt-2 pt-3 pb-3 ps-5 pe-5 border-gg'>Get Started</Button>
              </div>
            </Col>

          </Row>
        </div>

        <div className='bg-gg mb-5'>

          <Container id='mm' className='p-5'>

            <Row className='w-100 d-flex m-0 justify-content-center'>

              <Col md={3} className='mb-2'>
                <Form.Control size="lg" className='w-100' type="text" placeholder="Search Keyword" />
              </Col>

              <Col md={4} className='mb-2'>
                <Form.Select aria-label="Default select example" size='lg' className='w-100'>
                  <option>Property type</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </Form.Select>
              </Col >

              <Col md={3} className='mb-2'>
                <Form.Select aria-label="Default select example" size='lg' className='w-100'>
                  <option>Location</option>
                  <option value="Surat">Surat</option>
                  <option value="Vapi">Vapi</option>
                  <option value="Navsari">Navsari</option>
                  <option value="Bardoli">Bardoli</option>
                </Form.Select>
              </Col>

              <Col md={2} className='mb-2'>
                <Button size='lg' className='bg_navy border-gg w-100'>Search</Button>
              </Col>

            </Row>

          </Container>

        </div>

      </div>

    </div>
  );
}


export default Menucar;
