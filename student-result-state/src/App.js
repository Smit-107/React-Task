import { Table, Button, Container, Col, Row } from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTrash, BsPencilSquare } from "react-icons/bs";



function App() {

  var [task1, settask1] = useState('');
  var [task2, settask2] = useState('');
  var [task3, settask3] = useState('');
  var [task4, settask4] = useState('');
  var [task5, settask5] = useState('');
  var [task6, settask6] = useState('');
  var [task7, settask7] = useState('');
  var [tdata, settdata] = useState([]);
  // const [classAllQ,setclassAll] = useState('');

  var a = [task3, task4, task5, task6, task7]

  var [editId, seteditId] = useState();
  var [isEdit, setisEdit] = useState(false);

  let Total = parseInt(task6) + parseInt(task7) + parseInt(task3) + parseInt(task4) + parseInt(task5);
  let Percentage = Total / 5;


  let studentClass = '';
  var calculateStudentClass = () => {
    if (task3 >= 35 && task4 >= 35 && task5 >= 35 && task6 >= 35 && task7 >= 35) {

      if (Percentage >= 70) {
        studentClass = 'Distinction';
        // setclassAll('Distinction');
        return true

      }

      else if (Percentage >= 60) {
        studentClass = 'First Class';
        // setclassAll('First Class');
        return true

      }

      else if (Percentage >= 50) {
        studentClass = 'Second';
        //  setclassAll('Second');
        return true

      }

      else if (Percentage >= 35) {
        studentClass = 'Pass Class';
        // setclassAll('Pass Class') ;
        return true
      }

    }

    else {
      let cnt = 0;
      for (var i = 0; i < a[i]; i++) {
        if (a[i] < 35) {
          cnt++;
        }
      }

      if (cnt < 3) {
        studentClass = "ATKT"
        // setclassAll('ATKT')
      }

      else {
        studentClass = "Fail"
        // setclassAll('FAIL')
      }
    }
  }

  var handleButtonClick = () => {
    // calculateStudentClass()
    if (isEdit) {

      const editData = [...tdata];

      calculateStudentClass();

      editData[editId] = {
        rollNo: task1,
        studentName: task2,
        gujaratiMarks: task3,
        englishMarks: task4,
        scienceMarks: task5,
        hindiMarks: task6,
        historyMarks: task7,
        totalAll: Total,
        percentageAll: Percentage,
        classAll: studentClass
        // classAll: classAllQ
      };

      settdata(editData);

      setisEdit(false);

      settask1('');
      settask2('');
      settask3('');
      settask4('');
      settask5('');
      settask6('');
      settask7('');
    }
    else {
      if (task1 !== "" && task2 !== "" && task3 !== "" && task4 !== "" && task5 !== "" && task6 !== "" && task7 !== "") {
        calculateStudentClass();

        const newObject = {
          rollNo: task1,
          studentName: task2,
          gujaratiMarks: task3,
          englishMarks: task4,
          scienceMarks: task5,
          hindiMarks: task6,
          historyMarks: task7,
          totalAll: Total,
          percentageAll: Percentage,
          classAll: studentClass
          // classAll: classAllQ

        };

        settdata([...tdata, newObject])

        settask1('');
        settask2('');
        settask3('');
        settask4('');
        settask5('');
        settask6('');
        settask7('');
      }
    }
  };

  const handleEdit = (ind) => {

    seteditId(ind);
    setisEdit(true);

    const eData = tdata[ind];

    settask1(eData.rollNo);
    settask2(eData.studentName);
    settask3(eData.gujaratiMarks);
    settask4(eData.englishMarks);
    settask5(eData.scienceMarks);
    settask6(eData.hindiMarks);
    settask7(eData.historyMarks);
  }

  const handleDelete = (ind) => {
    const updatedData = tdata.filter((val, index) => index !== ind);
    settdata(updatedData);
  }

  return (
    <Container>
      <Row className='mt-5'>
        <Col>

          <Table border={2} className='text-center'>
            <tbody>
              <tr>


                <th colSpan={9} className='border-end ' style={{ maxWidth: '600px' }}>
                  <span>Enter Roll.no :  <input type="text" className=' me-2 mb-2' value={task1} onChange={(event1) => { settask1(event1.target.value) }} /></span>

                  <span>Enter Student-Name : <input type="text" className='  mb-2' value={task2} onChange={(event2) => { settask2(event2.target.value) }} /> </span>

                  <br />

                  <span>Enter Gujarati Marks:  <input type="text" className=' me-2  mb-2' value={task3} onChange={(event3) => { settask3(event3.target.value) }} /></span>

                  <span>Enter English Marks:  <input type="text" className='  mb-2' value={task4} onChange={(event4) => { settask4(event4.target.value) }} /></span>

                  <br />

                  <span>Enter Science Marks:  <input type="text" className=' me-2 mb-2' value={task5} onChange={(event5) => { settask5(event5.target.value) }} /></span>

                  <span>Enter Hindi Marks:  <input type="text" className='  mb-2' value={task6} onChange={(event6) => { settask6(event6.target.value) }} /></span>

                  <br />

                  <span>Enter History Marks: <input type="text" className='  mb-2' value={task7} onChange={(event7) => { settask7(event7.target.value) }} /></span>
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
                tdata.map((val, ind) => {
                  return (
                    <tr>
                      <td className='col-1 border-end'>{val.rollNo}</td>
                      <td className='col-2 border-end'>{val.studentName}</td>
                      <td className='col-1 border-end'>{val.gujaratiMarks}</td>
                      <td className='col-1 border-end'>{val.englishMarks}</td>
                      <td className='col-1 border-end'>{val.scienceMarks}</td>
                      <td className='col-1 border-end'>{val.hindiMarks}</td>
                      <td className='col-1 border-end'>{val.historyMarks}</td>
                      <td className='col-1 border-end'>{val.totalAll}</td>
                      <td className='col-1 border-end'>{val.percentageAll}</td>
                      <td className='col-1 border-end'>{val.classAll}</td>
                      <td className='col-1 border-end'>
                        <BsPencilSquare className='text-primary me-3' onClick={() => handleEdit(ind)} />
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
