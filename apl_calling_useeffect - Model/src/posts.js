import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsTrash, BsPencilSquare } from "react-icons/bs";

function Posts() {


  var [alldata, setalldata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((rest) => {
        setalldata(rest.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // var [responseTitle, setResponseTitle] = useState('');

  let handleDelete = (index) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
      .then((response) => {

        const updatedData = alldata.filter((post) => post.id !== index);
        setalldata(updatedData);
      })

      .catch((err) => {
        console.log(err);
      })
  }



  // let handleEdit = () => {
  //   axios.put(`https://jsonplaceholder.typicode.com/posts/${valuePrint.id}`, {
  //     title: valuePrint.title,
  //     body: valuePrint.body
  //   })
  //     .then((response) => {
  //       const updatedPost = response.data;

  //       // Update the post in the state
  //     const updatedData = alldata.map((post) => {
  //       if (post.id === updatedPost.id) {
  //         return updatedPost;
  //       }
  //       return post;
  //     });

  //     setalldata(updatedData);

  //       setvaluePrint({ title: '', body: '', id: '' }); 
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  var [editId, seteditId] = useState();
  var [isEdit, setisEdit] = useState(false);
  let [valuePrint, setvaluePrint] = useState({ title: '', body: '', id: '' });
  let handleEdit = (id) => {

    seteditId(id);
    setisEdit(true);
    setvaluePrint(alldata[id])

  }

  let handleEditA = () => {
    if (isEdit) {
      axios.patch(`https://jsonplaceholder.typicode.com/posts/${editId}`,{
        title:valuePrint.title,
        body:valuePrint.body
      })
      .then((response) => {

        // const newData= [...alldata]
        // console.log(newData);
        // newData[editId] = response.data
        // setalldata(newData)

        alldata[editId] = response.data;

        setvaluePrint({ title: '', body: '', id: '' }); 
        setisEdit(false);

      })
      .catch((err) => {
        console.log(err);
      })
    }

    else{

      axios.post('https://jsonplaceholder.typicode.com/posts', valuePrint)
      .then((response) => {

        const updatedTdata = response.data;
        setalldata([...alldata, updatedTdata]);

        setvaluePrint({ title: '', body: '', id: '' });

      })
      .catch((err) => {
        console.log(err);
      });

    }
  }


  return ( 
    <div className='mx-16'>

      <div className="container mx-auto">
        <table className="table-auto w-full">
          <thead className='sticky top-16 z-10 bg-white'>

            <tr>

              <td colSpan={2} className='p-3 border  border-e-0'>
                <textarea name="" value={valuePrint.body} onChange={(e) => setvaluePrint({ ...valuePrint, body: e.target.value })} className='w-full ps-2 border border-black rounded-xl p-2' placeholder='Edit Task...' id="" cols="13" rows="3"></textarea>
              </td>

              <td colSpan={2} className='p-3 border border-s-0'>
                <input type="text" value={valuePrint.title} onChange={(e) => setvaluePrint({ ...valuePrint, title: e.target.value })} className='mb-2 w-80 ps-2 border border-black rounded-xl p-2' placeholder='Edit Title...' />
                <button type="button" onClick={handleEditA} className="inline-flex  justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Save Edit</button>
              </td>
            </tr>

            <tr className='bg-gray-100'>
              <th className="border px-4 py-2">No.</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Task</th>
              <th className="border px-4 py-2">Action</th>
            </tr>

          </thead>
          <tbody className='-z-10'>

            {
              alldata.map((val, id) => {
                return (
                  <tr key={val.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{id + 1}</td>
                    <td className="border px-4 py-2">{val.title}</td>
                    <td className="border px-4 py-2">{val.body}</td>
                    <td className="border px-4 py-2 text-center">
                      <div className="flex justify-center">

                        {/* <BsPencilSquare className='text-blue-700 ms-2 text-lg' onClick={() => setvaluePrint({
                          title: val.title,
                          body: val.body,
                          id: val.id
                        })} /> */}

                        <BsPencilSquare className='text-blue-700 ms-2 text-lg'  onClick={() => handleEdit(id)} />

                        <BsTrash className='text-red-600 ml-2 cursor-pointer text-lg' onClick={() => handleDelete(val.id)} />

                      </div>
                    </td>
                  </tr>)
              })
            }

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Posts;
