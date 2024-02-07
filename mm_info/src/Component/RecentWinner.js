import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from "react-bootstrap";
import { FaArrowLeft, FaCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecentWinner = () => {
  const [loader, setloader] = useState(false);


  useEffect(()=>{
    setTimeout(() => {
      setloader(true)
    }, 2000);
  },[])
  


  function goBack() {
    window.history.back();
  }

  
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Row className="p-0 mx-0">
        <Col sm={12} className="p-0">
          <div
            className="ms-3"
            style={{ margin: "18px 0px", fontSize: "21px", fontWeight: "600" }}
          >
            <span className="cursor-pointer" onClick={goBack}>
              <FaArrowLeft />
            </span>
            <span className="ms-1"> Winner</span>
          </div>
        </Col>
      </Row>

      { loader ? (<Row className="px-3 p-0 mx-0" style={{ marginTop: "10px" }}>
        <Col xs={12} className="p-0">
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
        </Col>

        {activeTab === "tab1" && (
          <Col
            xs={12}
            style={{ marginBottom: "11px" }}
            className="p-0 text-black"
          >
            <div
              className="bg-white border d-flex"
              style={{ borderRadius: "10px", padding: "10px 0px 10px 4px" }}
            >
              <div className="px-sm-3 p-q col-3 d-flex  align-items-center">
                <img
                  className="w-100"
                  src="https://st-win.qureka.com/img/1.png"
                  style={{ maxWidth: "70px" }}
                  alt=""
                />
              </div>

              <div className="px-sm-3 p-q col-9">
                <div
                  className=" d-flex justify-content-end align-items-center text-end"
                  style={{
                    fontSize: "10px",
                    color: "#07a822",
                  }}
                >
                  <FaCircle className="me-1" />
                  <span>677 Winners</span>
                </div>
                <div className="text-start fw-600" style={{ fontSize: "13px" }}>
                  Bollywood Actresses
                </div>
                <div
                  className="fw-bold"
                  style={{ fontSize: "18px", marginBottom: "0" }}
                >
                  <span>Prize Pool:</span>
                  <img
                    src={require("../image/coinstack.png")}
                    style={{ width: "25px" }}
                    alt=""
                  />
                  <span>500000</span>
                </div>

                <div
                  className="d-flex justify-content-end align-items-center"
                  style={{ padding: "5px 2px 0px 0px", fontSize: "12px" }}
                >
                  <div className="w-auto ps-md-2 d-flex justify-content-end align-items-center paly-btn ">
                    <Link to={'winnerlist'}>
                    <Button
                      variant="outline-info"
                      style={{
                        border: "1px solid #9015c5",
                        color: "black",
                        padding: "8px 19px 7px 19px",
                        fontSize: "9px",
                        fontWeight: "600",
                      }}
                    >
                      Check Winners
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        )}

        {activeTab === "tab2" && (
          <Col
            sm={12}
            style={{ marginBottom: "11px" }}
            className="p-0 text-black"
          >
            <div
              className="bg-white border d-flex"
              style={{ borderRadius: "10px", padding: "10px 0px 10px 4px" }}
            >
              <div className="px-sm-3 p-q col-3 d-flex  align-items-center">
                <img
                  className="w-100"
                  src="https://st-win.qureka.com/img/1.png"
                  style={{ maxWidth: "70px" }}
                  alt=""
                />
              </div>

              <div className="px-sm-3 p-q col-9">
                <div
                  className=" d-flex justify-content-end align-items-center text-end"
                  style={{
                    fontSize: "10px",
                    color: "#07a822",
                  }}
                >
                  <FaCircle className="me-1" />
                  <span>677 Winners</span>
                </div>
                <div className="text-start fw-600" style={{ fontSize: "13px" }}>
                  Bollywood Actresses
                </div>
                <div
                  className="fw-bold"
                  style={{ fontSize: "18px", marginBottom: "0" }}
                >
                  <span>Prize Pool:</span>
                  <img
                    src={require("../image/coinstack.png")}
                    style={{ width: "25px" }}
                    alt=""
                  />
                  <span>45</span>
                </div>

                <div
                  className="d-flex justify-content-end align-items-cent  er"
                  style={{ padding: "5px 2px 0px 0px", fontSize: "12px" }}
                >
                  <div className="w-auto ps-md-2 d-flex justify-content-end align-items-center paly-btn ">
                  <Link to={'winnerlist'}>
                    <Button
                      variant="outline-info"
                      style={{
                        border: "1px solid #9015c5",
                        color: "black",
                        padding: "8px 19px 7px 19px",
                        fontSize: "9px",
                        fontWeight: "600",
                      }}
                    >
                      Check Winners
                    </Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        )}

        
      </Row> ):(
      <div>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </div>)}
    </div>
  );
};

export default RecentWinner;
