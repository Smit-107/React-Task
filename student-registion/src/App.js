import './App.css';
import React, { useState } from 'react';
import { BsTrash, BsPencilSquare } from "react-icons/bs";



function App() {

  const init = {
    GRNo: '',
    FirstName: '',
    MiddleName: '',
    LastName: '',
    Gender: '',
    BOD: '',
    City: '',
    Course: '',
    ContactNo: '',
    EmailId: '',
    Hobby: [],
    Addrees: ''
  }
  var [task, settask] = useState(init);
  var [tdata, settdata] = useState([]);

  var [editId, seteditId] = useState();
  var [isEdit, setisEdit] = useState(false);



  var event = (nv) => {
    let task_name = (nv.target.name);
    let task_value = (nv.target.value);

    if (task_name === 'Hobby') {
      let hobbyValue = task_value;
  
      if (nv.target.checked) {
        task_value = [...task.Hobby, hobbyValue];
      } 
      else {
        task_value = task.Hobby.filter((hobby) => hobby !== hobbyValue);
      }
    }

    settask({ ...task, [task_name]: task_value });
    console.log(task);
  }

  var handleButtonClick = () => {
    if (isEdit) {
      tdata[editId] = task;
      setisEdit(false);
      settask(init);
    }
    else {
      const updatedTdata = [...tdata, task];
      settdata(updatedTdata);
      settask(init);
    }
  }
  const handleEdit = (ind) => {

    seteditId(ind);
    setisEdit(true);
    // const eData = tdata[ind];
    // settask(eData)
    settask(tdata[ind])
  }


  const handleDelete = (ind) => {
    const updatedData = tdata.filter((val, index) => index !== ind);
    settdata(updatedData);
  };


  return (
    <>
      <div className='px-16 pt-7'>
        <div className='p-2 m-auto mb-4' style={{ width: '600px', background: '#19B986' }}>
          <p className='text-lg font-semibold text-white text-center'>Student Registration (For Institutions In India)</p>
        </div>

        <div className='p-4 border rounded'>
          <div className='border-2 border-gray rounded'>
            <div className='p-3 text-white font-bold rounded' style={{ background: '#2C689D' }}>Basic Details</div>
            <div className='p-4'>
              <div>

                {/* ----First line start */}

                <div className='mb-4'>
                  <label className="block text-sm font-medium leading-6 text-gray-900">Student Name <sup className='text-red-600'>*</sup></label>
                  <div className="mt-2 flex">

                    <input type="text" placeholder='Enter First Name' name="FirstName" onChange={event} value={task.FirstName} className="me-4 p-4 block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />

                    <input type="text" placeholder='Enter Middle Name' name="MiddleName" onChange={event} value={task.MiddleName} className="me-4 p-4 block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />

                    <input type="text" placeholder='Enter Last Name' name="LastName" onChange={event} value={task.LastName} className=" p-4 block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />

                  </div>
                </div>

                {/* ----First line end */}



                {/* ----Secound line start */}

                <div className='flex mb-4'>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Date of Birth<sup className='text-red-600'>*</sup></label>
                    <div className="mt-2">
                      <input type="date" name="BOD" onChange={event} value={task.BOD} id="first-name" className="me-4 p-4 pb-1.5 block rounded-md border-0 pt-1 text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                    </div>
                  </div>

                  <div className='ms-4'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">GR.No<sup className='text-red-600'>*</sup></label>
                    <div className="mt-2">
                      <input type="number" maxLength={4} placeholder='Enter Gr.No' onChange={event} value={task.GRNo} name="GRNo" id="first-name" className="p-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                    </div>
                  </div>

                  <div className='ms-4'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Gender<sup className='text-red-600'>*</sup></label>
                    <div className="mt-2 p-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400">
                      <input type="radio" onChange={event} value={'Male'} checked={task.Gender === 'Male'} className='me-1 py-1.5' name="Gender" /> <span>Male</span>
                      <input type="radio" onChange={event} value={'Female'} checked={task.Gender === 'Female'} className='me-1 ms-3  py-1.5' name="Gender" /> <span>Female</span>
                    </div>
                  </div>

                  <div className='ms-4'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">City<sup className='text-red-600'>*</sup></label>

                    <select onChange={event} value={task.City} className='mt-2  px-2 block rounded-md border-0 py-1.5 w-full me-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400' id="cars" name="City" form="carform">
                      <option value="" disabled selected>--Select City--</option>
                      <option value="Surat">Surat</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Vapi">Vapi</option>
                    </select>

                  </div>

                  <div className='ms-4'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Course<sup className='text-red-600'>*</sup></label>

                    <select onChange={event} value={task.Course} className='mt-2  px-2 block rounded-md border-0 py-1.5 w-full me-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400' id="cars" name="Course" form="carform">
                      <option value="" disabled selected>--Select Course--</option>
                      <option value="Android">Android</option>
                      <option value="Flutter">Flutter</option>
                      <option value="Ios">Ios</option>
                      <option value="React">React</option>
                    </select>
                  </div>

                </div>

                {/* ----Secound line end */}



                {/* ----Third line start */}

                <div className='flex mb-4'>

                  <div className='w-5/12 flex'>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900" >Addrees<sup className='text-red-600'>*</sup></label>
                      <div className="mt-2">
                        <textarea name="Addrees" onChange={event} value={task.Addrees} placeholder='Enter Address' className="p-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" cols="30" rows="5"></textarea>
                      </div>
                    </div>

                    <div className='ms-6'>
                      <label className="block text-sm font-medium leading-6  text-gray-900">Hobby<sup className='text-red-600'>*</sup></label>

                      <div className='mt-2'>
                        <input type="checkbox" onChange={event} name='Hobby' value="Codding" checked={task.Hobby.includes('Codding')} className='me-2' /><span>Codding</span><br />
                        <input type="checkbox" onChange={event} name='Hobby' value="Reading" checked={task.Hobby.includes('Reading')} className='me-2' /><span>Reading</span><br />
                        <input type="checkbox" onChange={event} name='Hobby' value="Exploreing" checked={task.Hobby.includes('Exploreing')} className='me-2' /><span>Exploreing</span><br />
                        <input type="checkbox" onChange={event} name='Hobby' value="Learning" checked={task.Hobby.includes('Learning')} className='me-2' /><span>Learning</span><br />
                        <input type="checkbox" onChange={event} name='Hobby' value="Playing" checked={task.Hobby.includes('Playing')} className='me-2' /><span>Playing</span>
                      </div>

                    </div>
                  </div>

                  <div className='w-7/12'>
                    <div className='ms-12'>
                      <div className='p-3 border rounded'>
                        <div className='border-2 border-gray rounded'>
                          <div className='p-2 text-white font-bold rounded' style={{ background: '#2C689D' }}>Basic Details</div>
                          <div className='p-3 flex'>


                            <div className='w-4/12'>
                              <label className="block text-sm font-medium leading-6 text-gray-900">Contact No.<sup className='text-red-600'>*</sup></label>
                              <div className="mt-2">
                                <input type="number" placeholder='Enter Contact No.' onChange={event} value={task.ContactNo} maxLength={10} name="ContactNo" id="first-name" className="p-4 w-full block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                              </div>
                            </div>

                            <div className='w-8/12 ms-4'>
                              <label className="block text-sm font-medium leading-6 text-gray-900">Email Id <sup className='text-red-600'>*</sup></label>
                              <div className="mt-2">
                                <input type="email" placeholder='Enter Email Id' name="EmailId" onChange={event} value={task.EmailId} id="first-name" className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                              </div>
                            </div>



                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* ----Third line end */}



                {/* ----Button line start */}

                <div className='text-center'>
                  <input type="button" onClick={handleButtonClick} className='px-4 py-2 m-auto block rounded border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:text-white hover:bg-stone-950' value="Submit" />
                </div>

                {/* ----Button line end */}

              </div>
            </div>
          </div>
        </div>



      </div>
      <table className="border-collapse border border-gray-300 m-auto my-12">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">GR.No</th>
            <th className="border border-gray-300 p-2">Student Name</th>
            <th className="border border-gray-300 p-2">BOD</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">City</th>
            <th className="border border-gray-300 p-2">Course</th>
            <th className="border border-gray-300 p-2">Contact No.</th>
            <th className="border border-gray-300 p-2">Email Id</th>
            <th className="border border-gray-300 p-2">Hobby</th>
            <th className="border border-gray-300 p-2">Addrees</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tdata.map((data, ind) => {
              return (
                <tr key={ind} className='text-center'>
                  <td className="border border-gray-300 p-2">{data.GRNo}</td>
                  <td className="border border-gray-300 p-2">{`${data.FirstName} ${data.MiddleName} ${data.LastName}`}</td>
                  <td className="border border-gray-300 p-2">{data.BOD}</td>
                  <td className="border border-gray-300 p-2">{data.Gender}</td>
                  <td className="border border-gray-300 p-2">{data.City}</td>
                  <td className="border border-gray-300 p-2">{data.Course}</td>
                  <td className="border border-gray-300 p-2">{data.ContactNo}</td>
                  <td className="border border-gray-300 p-2">{data.EmailId}</td>
                  <td className="border border-gray-300 p-2">
                    {data.Hobby.map((hobby, index) => (
                      <span key={index}>{hobby}, </span>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2 ">{data.Addrees}</td>
                  <td className='flex border-b border-gray-300 p-3'>
                    <BsPencilSquare className='text-blue-700 me-2' onClick={() => handleEdit(ind)} />
                    <BsTrash className='text-red-600' onClick={() => handleDelete(ind)} />
                  </td>
                </tr>
              )
            })

          }
        </tbody>
      </table>

    </>
  );
}

export default App;
