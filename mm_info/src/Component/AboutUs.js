import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAffiliatetheme, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutUs = () => {
  function goBack() {
    window.history.back();
  }
  return (
    <div>
      <section>
        <div>
          <Row className="p-0 m-0">
            <Col className="p-0">
              <div
                className="ms-4"
                style={{
                  margin: "20px 0px",
                  fontSize: "21px",
                  fontWeight: "600",
                }}
              >
                <span onClick={goBack} className="cursor-pointer">
                  <FaArrowLeft />
                </span>
                <span className="ms-1"> About Us</span>
              </div>
            </Col>

            <Col xs={12} className="bg-white text-black p-0">
              <div style={{ padding: "10px 22px" }}>
                <p>
				<FaAffiliatetheme className="me-1" />Welcome to [Your Quiz Website Name], your go-to destination
                  for engaging and entertaining quizzes! We are passionate about
                  delivering fun and informative quizzes that cater to a wide
                  range of interests and knowledge levels..
                </p>

                <h6>
                  <b>Our Mission :</b>
                </h6>

                <p>
				<FaAffiliatetheme className="me-1" />At [Your Quiz Website Name], our mission is to make learning
                  enjoyable and accessible to everyone. We believe that quizzes
                  are a fantastic way to not only test your knowledge but also
                  to discover new facts, insights, and trivia in a playful
                  manner.
                </p>

                <h6>
                  <b>What Sets Us Apart :</b>
                </h6>

                <p>
                  <FaAffiliatetheme className="me-1" /><span className="fw-600">Diverse Quiz Categories: </span> We offer a diverse range of quiz
                  categories, from general knowledge and science to pop culture
                  and history. There's something for everyone!
                </p>

                <p>
                  <FaAffiliatetheme className="me-1" /><span className="fw-600">Educational and Entertaining: </span> We believe that learning should
                  be enjoyable. That's why we blend education with entertainment
                  to create quizzes that are not only informative but also fun
                  to take.
                </p>
                <p>
                  <FaAffiliatetheme className="me-1" /><span className="fw-600">User-Friendly Interface:</span> Our website is designed with you in
                  mind. We strive to provide a seamless and user-friendly
                  experience, making it easy for you to explore, play, and share
                  your favorite quizzes.
                </p>
              </div>
            </Col>
            <Col xs={12} className="underline px-3 py-4 w-100 text-center" style={{fontSize:'14px'}}>
				<p>For details, kindly refer to <Link to={'/termsandcondition'}>terms of use</Link>.</p>
			</Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
