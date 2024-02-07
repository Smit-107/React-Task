import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useScore } from "./ParentComponent";
import axios from "axios";
import { useSelector } from "react-redux";




const MainGame = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(40);
  const { score, updateScore ,coin1 } = useScore();
  const [allQuiz, setAllQuiz] = useState();
  const [quizData, setQuizData] = useState([]);
  const [loader, setloader] = useState(false);
  var params = useParams()
  const count = useSelector((state) => state.counter.value);
  var options= [1,2,3,4]  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [clickedIndex, setClickedIndex] = useState(null);
  useEffect(() => {
    console.log(count);
    fetchCourses();
  }, []);



  // useEffect(() => {
  //   if (seconds === 0) {
  //     setTimeout(() => {
  //       coin1(score);
  //       navigate(`/quiz/score/${allQuiz && allQuiz[0]?.quiz_id}`);
  //     }, 2000);
  //   } else {
  //     const interval = setInterval(() => {
  //       setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [seconds]);


  useEffect(() => {
    if (loader && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
      }, 1000);
  
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setTimeout(() => {
        coin1(score);
        navigate(`/quiz/score/${allQuiz && allQuiz[0]?.quiz_id}`);
      }, 2000);
    }
  }, [loader, seconds]);
  

 

  const fetchCourses = () => {
    axios
      .post(`https://api.mminfotech.org/api/get_single_quiz`,{quiz_id: params})
      .then((positive) => {
        setAllQuiz(positive.data.data);
        setQuizData(positive.data.data[0].quiz_data);
        setloader(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const calculateDashArray = () => {
    if (loader) {
      const circumference = 2 * Math.PI * 100; // Assuming a circle with a radius of 50
    return circumference;
    }
  };

  const calculateDashOffset = () => {
    if (loader) {
    const circumference = calculateDashArray();
    const percentage = (seconds / 40) * 100;
    return circumference - (percentage / 100) * circumference;
    }
  };

  const getStrokeColor = () => {
    if (loader) {
    // Change color to red after the initial 40 seconds
    return seconds <= 40 ? "#E726F3" : "#B6B6B6";}
  };

  const getStrokeColor1 = () => {
    if (loader) {
    // Change color to red after the initial 40 seconds
    return seconds <= 40 ? "white" : "";}
  };

  const CheckAnswer = (val, index, inx) => {
    if (answer === "" && seconds !== 0) {
      if (currentQuestionIndex <= quizData.length - 2) {
        setTimeout(() => {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setAnswer('');
          setClickedIndex('');
        }, 1000);
      }
  
      const updatedScore = val === quizData[inx].quiz_option_answer ? score + 10 : score - 10;
  
      updateScore(updatedScore);
  
      if (val === quizData[inx].quiz_option_answer) {
        setAnswer("correct");
        setClickedIndex(index);
        console.log("Correct!");
      } else {
        setAnswer("incorrect");
        setClickedIndex(index);
        console.log("Incorrect!");
      }
  
      if (currentQuestionIndex >= quizData.length - 1) {
        setTimeout(() => {
          console.log('final score', updatedScore);
          coin1(updatedScore);
          navigate(`/quiz/score/${allQuiz && allQuiz[0]?.quiz_id}`);
        }, 2000);
      }
    }
  };
  

  return (
    loader ? (
    <div>
      <Row className="p-0 m-0">
        <Col className="p-0">
          <div
            className=" d-flex justify-content-start align-items-center "
            style={{ marginTop: "20px" }}
          >
            <img
              className="w-100 rounded"
              style={{ marginLeft: "22px", maxWidth: "70px" }}
              src="https://st-hour.qureka.com/res/hQuiz/images/banking.jpg"
              alt=""
            />
            <span style={{ marginLeft: "18px" }} className="h5 mb-0">
              Bank PO & Clerk
            </span>
          </div>
        </Col>
      </Row>
      <Row className="p-0 m-0 ">
        {quizData &&quizData.slice(currentQuestionIndex, currentQuestionIndex + 1)?.map((value, index) => {
          return (
            <div className="p-0" key={index}>
              <Col className=" d-flex justify-content-between align-items-center mx-4 my-5 ">
                <span className="h5 fw-600 mb-0"> {currentQuestionIndex+1}/{quizData.length}</span>
                {/* <span>{seconds}</span> */}

                <div className="cont">
                  <svg width="50" height="50" viewBox="0 0 220 220">
                  
                    <circle
                      cx="110"
                      cy="110"
                      r="100"
                      fill="none"
                      stroke="#ccc"
                      strokeWidth="10"
                    ></circle>
                    <circle
                      cx="110"
                      cy="110"
                      r="100"
                      fill="none"
                      stroke={getStrokeColor()}
                      strokeWidth="10"
                      strokeDasharray={calculateDashArray()}
                      strokeDashoffset={calculateDashOffset()}
                    ></circle>
                    {/* <g transform={`rotate(${(360 * (seconds / 40))} 110 110)`}> */}
                    <g
                      transform={`rotate(${90 + 360 * (seconds / 40)} 110 110)`}
                    >
                      <circle
                        cx="110"
                        cy="12"
                        r="10"
                        fill={getStrokeColor1()}
                      />
                    </g>
                    <text
                      x="110"
                      y="130"
                      fontSize="50px"
                      fill={getStrokeColor1()}
                      textAnchor="middle"
                      // style={{transform: 'rotate(30deg)'}}
                    >
                      {seconds}s
                    </text>
                  </svg>
                </div>
              </Col>
              <Col xs={12} className="px-2">
                <div className="questionhead">
                  <span>{value.quiz_question}</span>
                </div>
              </Col>
              <Col xs={12} style={{ padding: "20px 36px" }}>
                {options.map((val, inx) => {
                  return (
                    <div
                      key={inx}
                      className={`rounded d-flex justify-content-between align-items-center  fw-600 text-uppercase text-black  ${
                        answer === "correct" && clickedIndex === inx
                          ? "bg-success"
                          : answer === "incorrect" && clickedIndex === inx
                          ? "bg-danger"
                          : "bg-white"
                      }`}
                      onClick={() => {
                        CheckAnswer(val, inx, currentQuestionIndex);
                        // alert(val)
                      }}
                      style={{
                        padding: "11px 8px 11px 35px",
                        fontSize: "18px",
                        margin: "12px 0px",
                      }}
                    >
                      <span className="" style={{marginTop:'3px'}}>{val===1 ? value.quiz_option_a:val===2 ? value.quiz_option_b:val===3 ? value.quiz_option_c:val===4 ? value.quiz_option_d :''}</span>
                        <img className={`sad ${answer==="incorrect" &&  clickedIndex === inx ? 'd-block' : 'd-none'}`} id="sadoptionA" src="https://st-win.qureka.com/img/sad.png" alt=""></img>
                        <img className={`smile ${answer==="correct" &&  clickedIndex === inx ? 'd-block' : 'd-none'}`} id="smileoptionA" src="https://st-win.qureka.com/img/smile.png" alt=""></img>
                    </div>
                  );
                })}
              </Col>
            </div>
          );
        })}

        <Col xs={12}>
          <div className="py-2 d-flex justify-content-center align-items-center">
            <span className="me-1 ">Your Score :</span>
            <span>{score}</span>
          </div>
        </Col>
      </Row>
    </div>
     ):(
      <div>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </div>
    )
  );
};

export default MainGame;
