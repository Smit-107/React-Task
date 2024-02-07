import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { FaArrowLeft, FaCircle } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { increment, passData1 } from "../app/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useScore } from "./ParentComponent";
import axios from "axios";
import { MdAccountBalanceWallet } from "react-icons/md";


const CoinGive = ( ) => {
  const [loader, setloader] = useState(false);
  const [loader1, setloader1] = useState(false);

  const count = useSelector(state => state.counter.value);
    console.log(count);


  const dispatch = useDispatch()
  const navigate = useNavigate();
  var { score ,coin } = useScore();
  // const [coin, setCoin] = useState(0);

  
  

  const [allQuiz, setAllQuiz] = useState();
  var params = useParams()
 

  useEffect(() => {
  fetchCourses();fetchCourses1();
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

  

  

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const playbutton = (value) => {
    if (count <= 0 || count < value.quiz_entry_coin) {
      handleShow2();
    } else {
      navigate(`/playnow/${value.quiz_id}`);
    }
  };

  const [quizData, setQuizData] = useState();


  const fetchCourses1 = () => {
    axios
      .post(`https://api.mminfotech.org/api/get_all_quiz`)
      .then((positive) => {
        console.log(positive.data.data);
        setQuizData(positive.data.data);setloader1(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };



 
  return loader ? (
    <div>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="p-1 pe-2 pb-0 mx-1 focus-ring-light"
          closeButton
        >
          <Modal.Title className="p-0">Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column px-0 justify-content-center align-items-center">
          <img className="w-75" src={require("../image/cogrts.png")} alt="" />
          <span className="text-black mt-2 h4">You have won</span>
          <div
            className="  fw-bolder"
            style={{ fontSize: "28px", color: "#fe7201" }}
          >
            <img src={require("../image/coin.png")} alt="" />
            <span>10 Coins.</span>
          </div>
        </Modal.Body>
      </Modal>

      <Row className="p-0 mx-0">
        <Col xs={12} className="p-0 ">
          <div
            className="ms-4"
            style={{
              margin: "10px 0px 5px",
              fontSize: "21px",
              fontWeight: "600",
            }}
          >
            <Link
              to={"/"}
              className="text-white text-decoration-none d-flex align-items-center justify-content-start"
            >
              <span className="cursor-pointer">
                <FaArrowLeft />
              </span>
              <span className="ms-3 d-flex justify-content-start align-items-center ">
                <MdAccountBalanceWallet
                  className="me-1 mt-1"
                  style={{ fontSize: "17px" }}
                />
                <span>{count}</span>
              </span>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="p-0 mx-0  ">
        <Col
          className="p-0 d-flex"
          style={{
            margin: "5px 9px 0px 9px",
            border: "1px solid #9015c5",
            borderRadius: "10px",
          }}
        >
          <div>
            <img
              style={{ maxWidth: "76px", margin: "10px" }}
              src={allQuiz && allQuiz[0]?.quiz_image}
              alt=""
            />
          </div>
          <div className="px-2 d-flex flex-column justify-content-center align-items-start">
            <span
              className="text-uppercase fw-600 mb-1"
              style={{ fontSize: "17px" }}
            >
              {allQuiz && allQuiz[0]?.quiz_category}
            </span>
            <span
              className="text-capitalize fw-600 mb-1"
              style={{ fontSize: "14px" }}
            >
              Time's up, well played!
            </span>
            <span className=" fw-600 h5 mb-0" style={{ color: "yellow" }}>
              Your score :<span> {score}</span>
            </span>
          </div>
        </Col>

        <Col xs={12} className="mt-3 ">
          <div className="d-flex justify-content-center align-items-center coin-given">
            <span>Based on your score, you can win :</span>
            <img
              src={require("../image/coinstack.png")}
              style={{ width: "20px" }}
              alt=""
            />
            <span className="">{coin}</span>
          </div>
        </Col>

        <Col xs={12}>
          <div className="mt-3 text-center ">
            <img
              className="Free_coin"
              src={require("../image/qlite-gif.gif")}
              alt=""
              onClick={() => {
                handleShow1();
                dispatch(increment());
              }}
            />
          </div>
        </Col>

        <Col xs={12} className="mt-3 border-top rounded-top">
          <div className="text-center" style={{ fontSize: "18px" }}>
            <span style={{ fontSize: "13px", marginTop: "10px" }}>
              Try any of the following contest to continue playing
            </span>
          </div>
        </Col>
      </Row>

      <Row className="px-3 p-0 mx-0" style={{ marginTop: "10px" }}>
        {loader1 ? (
          quizData?.map((val, ind) => {
            const usersPlaying = getRandomNumber(3500, 6790);
            return (
              <Col
                key={ind}
                sm={12}
                style={{ marginBottom: "11px" }}
                className="p-0 text-black"
              >
                <div
                  className="bg-white border d-flex"
                  style={{ borderRadius: "10px", padding: "10px 4px" }}
                >
                  <div className="px-sm-3 p-q col-3 ">
                    <img
                      className="w-100"
                      src={val.quiz_image}
                      style={{ maxWidth: "70px", padding: "20px 0px 0px 0px" }}
                      alt=""
                    />
                    <div
                      className="text-uppercase d-flex justify-content-start align-items-center "
                      style={{
                        padding: "20px 0px 0px 0px",
                        fontSize: "11px",
                        color: "#07a822",
                      }}
                    >
                      <FaCircle className="mt-1" style={{ fontSize: "11px" }} />
                      <div className="ps-1">Live</div>
                    </div>
                  </div>

                  <div className="px-sm-3 p-q col-9">
                    <div
                      className="text-uppercase text-end d-flex justify-content-end align-items-center"
                      style={{
                        fontSize: "10px",
                        marginBottom: "",
                        color: "#07a822",
                        position: "relative",
                        zIndex: 10, // Ensure the circle icon is rendered on top
                      }}
                    >
                      <FaCircle
                        className=""
                        style={{
                          fontSize: "9.5px",
                          position: "relative",
                          zIndex: 2,
                        }}
                      />
                      <div className="ps-1">{usersPlaying} users playing</div>
                    </div>
                    <div
                      className="text-start fw-bold"
                      style={{ fontSize: "13px", marginBottom: "2px" }}
                    >
                      Quiz-Type : {val.quiz_category}
                    </div>
                    <div
                      className="fw-bold"
                      style={{ fontSize: "18px", marginBottom: "2px" }}
                    >
                      <span>Play & Win:</span>
                      <img
                        src={require("../image/coinstack.png")}
                        style={{ width: "25px" }}
                        alt=""
                      />
                      <span>{val.quiz_winning_amount}</span>
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginBottom: "2px",
                      }}
                    >
                      {val.quiz_winner_announcement}
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ padding: "5px 2px 0px 0px", fontSize: "12px" }}
                    >
                      <div className="w-50 " style={{ fontWeight: "600" }}>
                        <span>Entry:</span>
                        <img
                          src={require("../image/coinstack.png")}
                          style={{ width: "25px" }}
                          alt=""
                        />
                        {/* <span>{entry_fees}</span> */}
                        <span>{val.quiz_entry_coin}</span>
                      </div>
                      <div className="w-50 ps-md-2 d-flex justify-content-end align-items-center paly-btn ">
                        {/* <Link to={'/playnow'}> */}

                        <Button
                          onClick={() => {
                            playbutton(val);
                          }}
                          variant="outline-info"
                          style={{
                            border: "1px solid #9015c5",
                            color: "black",
                            padding: "8px 19px 7px 19px",
                            fontSize: "9px",
                            fontWeight: "600",
                          }}
                        >
                          PLAY NOW
                        </Button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })
        ) : (
          <div>
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </div>
        )}
      </Row>

      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="p-0 border-bottom-0 pe-2 pt-2"
          closeButton
        ></Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center ">
          <img
            className="w-50 "
            style={{ marginTop: "-90px" }}
            src={require("../image/oops-new.png")}
            alt=""
          />
          <h5 className="d-block text-center fw-bolder text-black mx-2">
            <strong>
              You don't have enough coins{" "}
              <p className="d-block mb-2">to join this contest.</p>
            </strong>
          </h5>
          <h6 className="mb-0 text-center text-bottm text-black h4">
            Watch a video to<p className="d-block">earn free coins</p>
          </h6>
          <div className='img123 cursor-pointer ' >
            <img src="https://1049.qureka.com/img/save-1.png"  className="watch-btn " alt="" 
            onClick={() => {
                dispatch(increment());
              }}
             />  <h1 className="shimmer_new user-select-none" onClick={() => {
              dispatch(increment());
            }}>Watch Video</h1>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  ) : (
    <div>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default CoinGive;
