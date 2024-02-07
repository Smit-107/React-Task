import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAffiliatetheme, FaArrowLeft } from "react-icons/fa6";

const Terms = () => {
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
                <span className="ms-1"> Term and Condition</span>
              </div>
            </Col>

            <Col xs={12} className="bg-white text-black p-0">
              <div style={{ padding: "10px 22px" }}>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Acceptance of Terms :</b>
                </h6>
                <p>
                  By accessing and using this quiz website ("the Site"), you
                  agree to comply with and be bound by these terms and
                  conditions.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Use of the Site :</b></h6>
                <p>You must be at least 18 years old to use this website.</p>
                <p>
                  You agree to use the Site for lawful purposes only and in a
                  manner consistent with all applicable laws and regulations.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>User Account :</b>
                </h6>
                <p>
                  To participate in certain quizzes and activities, you may need
                  to create a user account. You are responsible for maintaining
                  the confidentiality of your account information.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Intellectual Property :</b>
                </h6>
                <p>
                  All content on the Site, including quizzes, questions, and
                  other materials, is the property of the website owner and is
                  protected by intellectual property laws.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>User Content :</b>
                </h6>
                <p>
                  By submitting content (such as quiz questions, comments,
                  etc.), you grant the website owner a non-exclusive,
                  royalty-free, perpetual, and worldwide license to use, modify,
                  and distribute the content.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Prohibited Activities :</b>
                </h6>
                <p>
                  You agree not to engage in any activities that may disrupt or
                  interfere with the proper functioning of the Site, including
                  but not limited to hacking, transmitting viruses, or violating
                  security measures.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Privacy Policy :</b>
                </h6>
                <p>
                  Your use of the Site is also governed by our Privacy Policy,
                  which outlines how we collect, use, and protect your personal
                  information.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Disclaimer of Warranties :</b>
                </h6>
                <p>
                  The Site is provided on an "as-is" basis. We make no
                  warranties, expressed or implied, regarding the accuracy,
                  completeness, or reliability of the content.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Limitation of Liability :</b>
                </h6>
                <p>
                  The website owner is not liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising out of
                  your use or inability to use the Site.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Changes to Terms :</b>
                </h6>
                <p>
                  We reserve the right to update or modify these terms and
                  conditions at any time without prior notice. Your continued
                  use of the Site constitutes acceptance of the modified terms.
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Governing Law :</b>
                </h6>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of [your jurisdiction].
                </p>
                <h6>
                <FaAffiliatetheme className="me-1" />  <b>Contact Information :</b>
                </h6>
                <p>
                  For questions or concerns regarding these terms and
                  conditions, please contact us at [your contact email].
                </p>


               <p className="border-top"> By using this Site, you acknowledge that you have read,
                understood, and agree to be bound by these terms and conditions.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Terms;
