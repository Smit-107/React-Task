import { Table, Button, Container, Col, Row } from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTrash ,BsPencilSquare} from "react-icons/bs";



function App() {

  var [task, settask] = useState('');
  var [tdata, settdata] = useState([]);

  var [editId,seteditId]=useState();
  var [isEdit,setisEdit]=useState(false);


  const handleButtonClick = () => {
    if(isEdit){
      tdata[editId]=task;
      setisEdit(false);
      settask('');
    }
    else{
      if(task !== ""){
        settdata([...tdata, task])
        settask('');
      }
    }
  };

  const handleEdit = (ind) => {

      seteditId(ind);
      setisEdit(true);
      const eData=tdata[ind];
      settask(eData);
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
                <th colSpan={3} className='text-center border-end '>
    
                  <span>Write Task :  </span><input type="text" value={task} className='w-50' onChange={(event) => { settask(event.target.value) }} />
                </th>

                <th><Button className='bg-black border-black me-2' onClick={handleButtonClick}>Add Task</Button>
                    </th>
              </tr>

              <tr>
                <th className='col-2 border-end'>No.</th>
                <th className='col-6 border-end'>Task</th>
                <th className='col-2 border-end'>Edit</th>
                <th className='col-3'>Delete</th>
              </tr>

              {
                tdata.map((val,ind) => {
                  return (
                    <tr>
                      <td className='col-2 border-end'>{ind+1}</td>
                      <td className='col-6 border-end'>{val}</td>
                      <td className='col-2 border-end'><BsPencilSquare className='text-primary' onClick={() => handleEdit(ind)} /></td>
                      <td className='col-3'><BsTrash className='text-danger' onClick={() => handleDelete(ind)}  /></td>
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
