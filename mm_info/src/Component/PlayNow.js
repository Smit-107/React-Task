import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { passData } from "../app/counter/counterSlice";
import { useScore } from "./ParentComponent";
import axios from "axios";


const PlayNow = () => {

  const [allQuiz, setAllQuiz] = useState();

  const params = useParams()
  const { updateScore } = useScore();
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [loader, setloader] = useState(false);
  const [renk, setRenk] = useState(false);

  useEffect(() => {
  console.log(count);
  fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios
      .post(`https://api.mminfotech.org/api/get_single_quiz`,{quiz_id: params})
      .then((positive) => {
        console.log(positive.data.data);
        setAllQuiz(positive.data.data);
        setloader(true);
      })
      .catch((err) => {
        alert(err);
      });
  };


  function goBack() {
    window.history.back();
  }
  return loader ? (
    <div className="" style={{ height: "100vh" }}>
      <Row className="p-0 mx-0">
        <Col xs={12} className="p-0 ">

          {renk &&<div id="rankbrk" className="overlay hide show">
          <div className="popup">
            <span className="close cursor-pointer" onClick={()=>{setRenk(false)}}>
              ×
            </span>
            <div className="content">
              <div className="text-black" style={{ textAlign: "center", fontWeight: "600" }}>
                Rank Breakup
              </div>

              <div class="quizrankb">

                <Row className="pointsysrow1">
                  <Col xs={6}>
                      <div class="pointsysrow1left">Score 100</div>
                    </Col>
                    <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      1000
                    </div>
                  </Col>
                </Row>
                <Row className="pointsysrow2">
                <Col xs={6}>
                    <div class="pointsysrow1left">Score 90 - 80</div>
                    </Col>
                  <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      100
                    </div>
                    </Col>
                </Row>
                <Row className="pointsysrow1">
                  <Col xs={6}>
                      <div class="pointsysrow1left">Score 70 -60</div>
                    </Col>
                    <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      50
                    </div>
                  </Col>
                </Row>
                <Row className="pointsysrow2">
                <Col xs={6}>
                    <div class="pointsysrow1left">Score 50 - 40</div>
                    </Col>
                  <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      30
                    </div>
                    </Col>
                </Row>
                <Row className="pointsysrow1">
                  <Col xs={6}>
                      <div class="pointsysrow1left">Score 30 -20</div>
                    </Col>
                    <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      10
                    </div>
                  </Col>
                </Row>
                <Row className="pointsysrow2">
                <Col xs={6}>
                    <div class="pointsysrow1left">Score 10</div>
                    </Col>
                  <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      5
                    </div>
                    </Col>
                </Row>

                <Row className="pointsysrow1">
                  <Col xs={6}>
                      {/* <div class="pointsysrow1left">Score less or equal 0</div> */}
                      <div class="pointsysrow1left">Score 0 or less</div>
                    </Col>
                    <Col xs={6}>
                    <div class="pointsysrow1right">
                      <img
                        class="coinstack1"
                        src="https://st-win.qureka.com/img/coinstack.png"
                        alt=""
                      />
                      0
                    </div>
                  </Col>
                </Row>
                
              </div>
            </div>
          </div>
          </div>}

          <div
            className="ms-3"
            style={{ margin: "18px 0px", fontSize: "21px", fontWeight: "600" }}
          >
            <span className="cursor-pointer" onClick={goBack}>
              <FaArrowLeft />
            </span>
            <span className="ms-1">
              {allQuiz && allQuiz[0]?.quiz_category}
            </span>
          </div>
        </Col>
      </Row>
      <Row
        className="bg-white"
        style={{
          margin: "6px 9px 10px",
          padding: "20px 0px",
          borderRadius: "15px",
        }}
      >
        <Col xs={6} className="px-2 p-0">
          <img
            className="w-100"
            style={{ maxWidth: "120px", marginLeft: "30px" }}
            src={allQuiz && allQuiz[0]?.quiz_image}
            alt=""
            srcSet=""
          />
        </Col>
        <Col xs={6} className="">
          <div
            className="fw-600"
            style={{ marginTop: "10px", fontSize: "18px", color: "#000000ad" }}
          >
            Paly and win
          </div>
          <div
            className="fw-bold d-flex align-items-center"
            style={{ fontSize: "18px", marginBottom: "2px" }}
          >
            <img
              src={require("../image/coinstack.png")}
              style={{ width: "25px" }}
              alt=""
            />
            <span
              className="fw-600"
              style={{ color: "#9014c5", fontSize: "28px" }}
            >
              {allQuiz && allQuiz[0]?.quiz_winning_amount}
            </span>
          </div>
          <div
            className="text-decoration-underline cursor-pointer"
            onClick={()=>{setRenk(true)}}
            style={{ color: "#999", fontSize: "13px" }}
          >
            View Rank Breakup
          </div>
        </Col>
        <Col
          xs={12}
          style={{
            color: "#212529bd",
            fontSize: "15px",
            padding: "8px 30px 7px",
          }}
          className="fw-600"
        >
          <FaCircleCheck className="me-1 opacity-50" />
          <span>You got 40 seconds</span>
        </Col>
        <Col
          xs={12}
          style={{
            color: "#212529bd",
            fontSize: "15px",
            padding: "2px 30px 7px",
          }}
          className="fw-600"
        >
          <FaCircleCheck className="me-1 opacity-50" />
          <span>Answer as many question as you can</span>
        </Col>
        <Col xs={12} className="mt-2 text-center paly-btn">
          <Link
            to={`/playnow/quiz/${allQuiz && allQuiz[0]?.quiz_id}`}
            onClick={() => {
              dispatch(passData(allQuiz && allQuiz[0]?.quiz_entry_coin));
              updateScore(0);
            }}
          >
            <Button
              variant="outline-info text-uppercase"
              style={{
                border: "1px solid #9015c5",
                color: "#9015c5",
                padding: "10px 35px",
                fontSize: "18px",
                fontWeight: "600",
                borderRadius: "15px",
              }}
            >
              plAY Quiz
            </Button>
          </Link>
          {/* </div> */}
        </Col>
      </Row>
      <Row className="p-0 m-0">
        <Col className="pe-3 ps-2 pt-3 p-0 ">
          <ul className="">
            <li
              className="rule-uper"
              style={{ fontSize: "14px", marginTop: "6px" }}
            >
              24x7 Quiz Madness: Take the quiz-tastic rollercoaster that never
              stops! Jump into quizzes every hour.
            </li>
            <li
              className="rule-uper"
              style={{ fontSize: "14px", marginTop: "6px" }}
            >
              From brainy business to techy wonders, sports showdowns to movies,
              choose your flavor and dive in!
            </li>
            <li
              className="rule-uper"
              style={{ fontSize: "14px", marginTop: "6px" }}
            >
              Nail quiz questions with style and take away those shiny coins.
            </li>
          </ul>
          <span className="d-flex justify-content-center">
            <Link
              to={"/rules"}
              className="text-decoration-none  fw-600 text-center text-white"
            >
              Rules
            </Link>
          </span>
        </Col>
      </Row>
    </div>
  ) : (
    <div>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default PlayNow;
