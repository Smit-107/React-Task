import { Table, Button, Container, Col, Row } from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTrash, BsPencilSquare } from "react-icons/bs";



function App() {

const init ={
  RollNo: '',
  StudentName: '',
  Gujarati: '',
  English: '',
  Science: '',
  Hindi: '',
  History: '',
  Total:'',
  Percentage:'',
  CalssA:''
}
  var [task, settask] = useState(init);
  var [tdata, settdata] = useState([]);

  var [editId, seteditId] = useState();
  var [isEdit, setisEdit] = useState(false);


  // --------On Click 

  var handleButtonClick = () => {

    task.Total = parseInt(task.Gujarati) + parseInt(task.History) + parseInt(task.Hindi) + parseInt(task.English) + parseInt(task.Science);
    task.Percentage = task.Total / 5;
    
    if (parseInt(task.Gujarati) >= 35 && parseInt(task.History) >= 35 && parseInt(task.Hindi) >= 35 && parseInt(task.English) >= 35 && parseInt(task.Science) >= 35) {
      if (task.Percentage >= 70) {
        task.CalssA='Distinction';
      }
      else if (task.Percentage >= 60) {
        task.CalssA='First Class';
      }
      else if (task.Percentage >= 50) {
        task.CalssA='Secound';
      }
      else if (task.Percentage >= 35) {
        task.CalssA='pass Class';
      }
    }

    else {
      var a = [task.Gujarati, task.Hindi, task.English, task.History, task.Science];
      let cnt = 0;
      for (var i = 0; i < a[i]; i++) {
        if (a[i] < 35) {
          cnt++;
        }
      }
      if (cnt < 3) {
        task.CalssA = "ATKT";
      }
      else {
        task.CalssA= "Fail";
      }
    }

    if (isEdit){
      // const editData = [...tdata];
      // editData[editId] = task;
      // settdata(editData);
      tdata[editId] = task;
      setisEdit(false);
      settask(init);
    }
    else {
      const updatedTdata = [...tdata, task];
      settdata(updatedTdata);
      settask(init);
    }
  };

  // --------Edit Code

  const handleEdit = (ind) => {

    seteditId(ind);
    setisEdit(true);

    const eData = tdata[ind];

    // settask({
    //   RollNo: eData.RollNo,
    //   StudentName: eData.StudentName,
    //   Gujarati: eData.Gujarati,
    //   English: eData.English,
    //   Science: eData.Science,
    //   Hindi: eData.Hindi,
    //   History: eData.History,
    //   Total:eData.Total,   
    // });

    settask(eData)
  }

  // --------Get Deta 

  var event = (nv) => {
    let task_name = (nv.target.name);
    let task_value = (nv.target.value);

    settask({ ...task, [task_name]: task_value });
    console.log(task);
  };

  // --------Delete Code

  const handleDelete = (ind) => {
    const updatedData = tdata.filter((val, index) => index !== ind);
    settdata(updatedData);
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col>

          <Table border={2} className='text-center'>
            <tbody>
              <tr>

                <th colSpan={9} className='border-end ' style={{ maxWidth: '600px' }}>

                  <span>Enter Roll.no : <input type="text" className='me-2 mb-2' name='RollNo' value={task.RollNo} onChange={event} /></span>

                  <span>Enter Student-Name : <input type="text" className=' mb-2' name='StudentName' value={task.StudentName} onChange={event} /></span>

                  <br />

                  <span>Enter Gujarati Marks: <input type="text" className='me-2  mb-2' name='Gujarati' value={task.Gujarati} onChange={event} /></span>

                  <span>Enter English Marks: <input type="text" className=' mb-2' name='English' value={task.English} onChange={event} /></span>

                  <br />

                  <span>Enter Science Marks: <input type="text" className='me-2 mb-2' name='Science' value={task.Science} onChange={event} /></span>

                  <span>Enter Hindi Marks: <input type="text" className=' mb-2' name='Hindi' value={task.Hindi} onChange={event} /></span>

                  <br />

                  <span>Enter History Marks: <input type="text" className=' mb-2' name='History' value={task.History} onChange={event} /></span>
                </th>

                <th colSpan={2} className='pt-5'><Button onClick={handleButtonClick} className='bg-black border-black me-2 mt-3' >Add Task</Button>
                </th>


              </tr>

              <tr>
                <th className='col-1 border-end'>Roll.No</th>
                <th className='col-2 border-end'>Student Name</th>
                <th className='col-1 border-end'>Gujarati</th>
                <th className='col-1 border-end'>English</th>
                <th className='col-1 border-end'>Science</th>
                <th className='col-1 border-end'>Hindi</th>
                <th className='col-1 border-end'>History</th>
                <th className='col-1 border-end'>Total</th>
                <th className='col-1 border-end'>Percentage</th>
                <th className='col-1 border-end'>Class</th>
                <th className='col-1'>Action</th>
              </tr>

              {
                tdata.map((data, ind) => {
                  return (
                    <tr key={ind}>
                      <td className='col-1 border-end'>{data.RollNo}</td>
                      <td className='col-2 border-end'>{data.StudentName}</td>
                      <td className='col-1 border-end'>{data.Gujarati}</td>
                      <td className='col-1 border-end'>{data.English}</td>
                      <td className='col-1 border-end'>{data.Science}</td>
                      <td className='col-1 border-end'>{data.History}</td>
                      <td className='col-1 border-end'>{data.Hindi}</td>
                      <td className='col-1 border-end'>{data.Total}</td>
                      <td className='col-1 border-end'>{data.Percentage}</td>
                      <td className='col-1 border-end'>{data.CalssA}</td>
                      <td className='col-1 border-end'>
                        <BsPencilSquare className='text-primary me-3' onClick={() => handleEdit(ind)} />
                        {/* onClick={() => handleEdit(ind)} */}
                        <BsTrash className='text-danger' onClick={() => handleDelete(ind)} />

                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </Table>

        </Col>
      </Row>
    </Container>
  );


}



export default App;
