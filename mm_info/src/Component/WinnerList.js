import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa6'
import { useSelector } from 'react-redux';

const WinnerList = () => {
  const count = useSelector((state) => state.counter.value);
  const [loader, setloader] = useState(false);

    function goBack() {
        window.history.back();
      }

      useEffect(()=>{
        setTimeout(() => {
          setloader(true)
        }, 1500);
      },[])
      
    
  return (
    <div className="" style={{ height: "100vh" }}>
      <Row className="p-0 mx-0">
        <Col xs={12} className="p-0 ">
          <div
            className="ms-3"
            style={{ margin: "18px 0px", fontSize: "21px", fontWeight: "600" }}
          >
            <span className='cursor-pointer' onClick={goBack}>
              <FaArrowLeft />
            </span>
            <span className="ms-1"> Winner</span>
          </div>
        </Col>

      </Row>
      { loader ? (
        <div>
           <Row className="p-0 mx-0">
        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>1.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st.content.qureka.com/res/profile_images/July2019/7/AU154208185950805041562499778751.jpg"
                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>B K Raut wgerth er</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>50,423</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>2.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st.content.qureka.com/res/profile_images/July2021/4/AU159681217243004291625391331228.jpg"
                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Alli Hasan</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>49,863</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>3.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Bhargav Mehta</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>45,125</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>4.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Sarsi Darliy</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>44,953</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>5.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Robot Joferry</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>42,390</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>6.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>David Narwala</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>39,793</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>7.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Mitchel Rollif</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>35,486</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>8.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Stiven Joseey</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>33,782</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>9.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Sidharth Musewala</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>31,639</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>10.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st.content.qureka.com/res/profile_images/March2022/9/AU161477118423804851646799952975.jpg"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Roluh Asmi</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>30,891</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>11.</div>

                
            <div className=' ' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"

                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Josef Shreys</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>28,146</span> Coins
              </div>
            </div>
        </Col>

        <Col className="p-0  d-flex align-items-center  flex-row bg-white  mx-auto " style={{width:'95%',borderRadius:'10px',marginBottom:'10px'}} xs={12}>
            <div className="text-black opacity-50 fw-600 ms-3 my-auto " style={{width:'10%'}}>12.</div>

                
            <div className='' style={{}} >
              <img
                className="rounded-circle p-2"
                style={{maxWidth:'70px'}}
                src="https://st-win.qureka.com/img/ninja.png"
                alt=""
              />
            </div>

            <div className=" d-flex flex-column justify-content-center" style={{padding:"0px 15px",margin:'10px 0px',fontSize:'14px'}}>
              <div className="text-black fw-600">
                <span>Jos Mossu</span>
              </div>
              <div className="fw-bold " style={{color:'#8A24A1',fontSize:'18px'}}>
                <span>21,348</span> Coins
              </div>
            </div>
        </Col>

        

      </Row>

      <Row
        className="p-0 m-0 d-flex align-items-center py-3 rounded-top position-sticky bottom-0"
        style={{ backgroundColor: "#8A24A1" }}
      >
        <Col xs={3} className="p-0 px-3">
          <img
            className="w-100"
            style={{ maxWidth: "70px" }}
            src="https://st-win.qureka.com/img/ninja.png"
            alt=""
          />
        </Col>
        <Col xs={9} className="p-0 pe-3 fw-600 ps-1 ">
          <div style={{ fontSize: "21px" }}>
            <span>You won:</span> <span className="text-warning">{count}</span>
          </div>
        </Col>
      </Row>
        </div>
      ):(
        <div>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>)}
    </div>
  );
}

export default WinnerList
