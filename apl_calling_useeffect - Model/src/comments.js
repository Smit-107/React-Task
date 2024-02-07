import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comments() {


  let [alldata, setalldata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((rest) => {
        setalldata(rest.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])





  return (
    <div className='mx-16'>

      <div className="container mx-auto mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr className='bg-gray-100'>
              <th className="border px-4 py-2">No.</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Task</th>
            </tr>
          </thead>
          <tbody>

            {
              alldata.map((val) => {
                return (
                  <tr key={val.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{val.id}</td>
                    <td className="border px-4 py-2">{val.name}</td>
                    <td className="border px-4 py-2">{val.email}</td>
                    <td className="border px-4 py-2">{val.body}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Comments;
