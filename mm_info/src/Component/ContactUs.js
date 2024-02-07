import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  function goBack() {
		window.history.back();
     }
  return (
    <div>
      <section>
		<div >
			
			<Row className='p-0 m-0'>
				<Col  className='p-0'>
					<div className='ms-4' style={{margin:'20px 0px',fontSize:'21px',fontWeight:'600' }}>
						<span onClick={goBack} className='cursor-pointer'><FaArrowLeft  /></span>
                        <span className='ms-1'> Contact Us</span>
					</div>
				</Col>

				<Col xs={12} className='bg-white text-black p-0'>
					<div style={{padding:'10px 22px'}}>
						<h6><b>Contact Information :</b></h6>
						<p>Have a question, suggestion, or just want to say hello? We'd love to hear from you! Reach out to us at [your@email.com] or connect with us on [social media handles].</p>
						<p>Thank you for being a part of the [Your Quiz Website Name] community. Let's explore the world of knowledge together! </p>

						</div>
                </Col>
				<Col xs={12} className="underline px-3 py-4 w-100 text-center" style={{fontSize:'14px'}}>
					<p>For details, kindly refer to <Link to={'/termsandcondition'}>terms of use</Link>.</p>
				</Col>
			</Row>
		</div>

	</section>
    </div>
  )
}

export default ContactUs
