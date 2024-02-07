import React from 'react'
import { Row ,Col} from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Rules = () => {
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
						<span onClick={goBack} className='cursor-pointer'><FaArrowLeft   /></span>
                        <span className='ms-1'> Rules</span>
					</div>
				</Col>

				<Col xs={12} className='bg-white text-black p-0'>
					<div style={{padding:'10px 22px'}}>
						<h6><b>Rules: Quiz</b></h6>
						<p>1. You get 40 seconds to answer as many questions as you can (max questions you
						can answer is 10). </p>
						<p>2. There are 4 options for each question, one
						of them is the answer for the question.</p>
						<p>3. You get 10 points for
						each right answer. </p>
						<p>4. You get (-)10 points for each wrong answer.</p>
						<p>5. The winners for the quiz is decided
						depending upon the scores of all the users that participated in
						the quiz.</p>
						<p>6. Winners for each quiz will be declared at a
						pre-defined time.</p>

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

export default Rules
