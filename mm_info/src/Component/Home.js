import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { GiTireIronCross } from "react-icons/gi";
import { IoMdMailUnread } from "react-icons/io";
import { FaCircle, FaClipboardList, FaListUl } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../app/counter/counterSlice";
import { BsFillFileFontFill, BsFillInfoCircleFill } from "react-icons/bs";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const [activeTab, setActiveTab] = useState("tab1");
  // const handleTabClick = (tabName) => {
  //   setActiveTab(tabName);
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const navigate = useNavigate();

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [allQuiz, setAllQuiz] = useState();
  const [loader, setloader] = useState(false);

  const playbutton = (value) => {
    if (count <= 0 || count < value.quiz_entry_coin) {
      handleShow2();
    } else {
      navigate(`/playnow/${value.quiz_id}`);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios
      .post(`https://api.mminfotech.org/api/get_all_quiz`)
      .then((positive) => {
        console.log(positive.data.data);
        setAllQuiz(positive.data.data);
        setloader(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <div
        className={`bg-white text-black ${show ? "open" : "closed"}`}
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          height: "100vh",
          overflowY: "auto",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.9)",
          zIndex:'10'
        }}
      >
        <div
          style={{
            minHeight: "150px",
            background: "#00004c",
          }}
        >
          <div className="text-white text-end pt-3 pe-4 ">
            <GiTireIronCross
              className={`cursor-pointer ${show ? "opacity-1" : "opacity-0"}`}
              onClick={handleClose}
            />
          </div>
          <div
            className="d-flex align-items-center "
            style={{ padding: "0px 15px 40px" }}
          >
            <span className={`rounded fixed-img`}>
              <img
                className="w-100 h-100 object-fit-cover "
                src={require("../image/ninja.png")}
                alt=""
              />
            </span>

            <span
              className="text-nowrap"
              style={{ padding: "14px 0px 14px 15px" }}
            >
              <div
                className="mb-2 text-white text-capitalize"
                style={{ fontSize: "13px", fontWeight: "500" }}
              >
                guest User
              </div>
              <div
                className="text-capitalize"
                style={{ fontSize: "15px", color: "#f1be1b" }}
              >
                Join Qureka Lite
              </div>
            </span>
          </div>
        </div>

        <div>
          <ul className="sidebar-nav p-0 text-nowrap">
            <li className="list-unstyled " style={{ fontSize: "18px" }}>
              <Link
                to="/rules"
                className="d-flex justify-content-start align-items-center"
              >
                <FaClipboardList className="me-1" />
                <span>Quiz Rules</span>
              </Link>
            </li>
            <li className="list-unstyled " style={{ fontSize: "18px" }}>
              <Link
                to="/aboutus"
                className="d-flex justify-content-start align-items-center"
              >
                <BsFillInfoCircleFill
                  className="mt-1"
                  style={{ fontSize: "16.9px", marginRight: "6px" }}
                />
                <span>About Us</span>
              </Link>
            </li>

            <li className="list-unstyled " style={{ fontSize: "18px" }}>
              <Link
                to="/contactus"
                className="d-flex justify-content-start align-items-center"
              >
                <IoMdMailUnread className="me-1 mt-1" />
                <span>Contact Us</span>
              </Link>
            </li>

            <li className="list-unstyled " style={{ fontSize: "18px" }}>
              <Link
                to="/termsandcondition"
                className="d-flex justify-content-start align-items-center"
              >
                <BsFillFileFontFill className="me-1" />
                <span>Terms and Condition</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-grow-1">
        <Row
          className="  d-flex justify-content-between align-items-center "
          style={{ margin: "20px 0px 0px 0px" }}
        >
          <Col
            xs={"auto"}
            className="flex-grow-1 p-0 d-flex align-items-center"
          >
            <span className="fw-bold h5 px-3">
              <FaListUl
                className="me-3 cursor-pointer"
                onClick={handleShow}
              ></FaListUl>
              Quizy Lite
            </span>
          </Col>
          <Col xs={"auto"} className="flex-grow-1 p-0">
            <Link to={"/winnerlist"}>
              <span className=" ps-3 w-full px-3 dash-anchor me-sm-3 me-2">
                Recent Winners
              </span>
            </Link>
          </Col>
        </Row>

        <Row
          className="mx-auto text-center d-flex align-items-center"
          style={{ width: "80%", margin: "20px 0px 16px 0px" }}
        >
          <Col xs={12}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={require("../image/coinstack.png")}
                style={{ width: "35px" }}
                alt=""
              />
              <span className="h5 mb-0">{count}</span>
            </div>
          </Col>
          <Col xs={12}>
            <div
              className="mt-2"
              onClick={() => {
                handleShow1();
                dispatch(increment());
              }}
            >
              <img
                className="Free_coin"
                src={require("../image/qlite-gif.gif")}
                alt=""
              />
            </div>
          </Col>
        </Row>

        <Row
          className="px-3 mx-0 border-top rounded-top"
          style={{ paddingTop: "20px" }}
        >
          {/* <Col sm={12} className="p-0">
          <div>
            <ul
              className="d-flex text-center p-0 "
              style={{ borderBottom: "1px solid #4d4e7c" }}
            >
              <li
                onClick={() => handleTabClick("tab1")}
                className={`list-unstyled w-50 pb-1 fw-bold tab-hover mx-2 ${
                  activeTab === "tab1"
                    ? "border-bottom border-4 border-white "
                    : ""
                }`}
              >
                Quiz
              </li>
              <li
                onClick={() => handleTabClick("tab2")}
                className={`list-unstyled w-50 pb-1 fw-bold tab-hover mx-2 ${
                  activeTab === "tab2"
                    ? "border-bottom border-4 border-white"
                    : ""
                }`}
              >
                IPL/Cricket
              </li>
            </ul>
          </div>
        </Col> */}

          {
            // activeTab === "tab1" &&
            loader &&
              allQuiz?.map((val, ind) => {
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
                          style={{
                            maxWidth: "70px",
                            padding: "20px 0px 0px 0px",
                          }}
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
                          <FaCircle
                            className="mt-1"
                            style={{ fontSize: "11px" }}
                          />
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
                            // zIndex: 10, // Ensure the circle icon is rendered on top
                          }}
                        >
                          <FaCircle
                            className=""
                            style={{
                              fontSize: "9.5px",
                              position: "relative",
                              // zIndex: 2,
                            }}
                          />
                          <div className="ps-1">
                            {usersPlaying} users playing
                          </div>
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
                          style={{
                            padding: "5px 2px 0px 0px",
                            fontSize: "12px",
                          }}
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
          }
          {!loader && (
            <div>
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            </div>
          )}
        </Row>
      </div>

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

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>

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
              You don't have enough coins
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
             />  <h1 className="shimmer_new " onClick={() => {
              dispatch(increment());
            }}>Watch Video</h1>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
