import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Todos() {

  let [alldata, setalldata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((set) => {
        // console.log(set)
        setalldata(set.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })


  return (
    <div className='mx-16'>

      <div className="container mx-auto mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr className='bg-gray-100'>
              <th className="border px-4 py-2 text-start">No.</th>
              <th className="border px-4 py-2 text-start">Title</th>
              <th className="border px-4 py-2">Completed</th>
            </tr>
          </thead>
          <tbody>

            {
              alldata.map((vale) => {
                return (
                  <tr key={vale.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{vale.id}</td>
                    <td className="border px-4 py-2">{vale.title}</td>
                    <td className="border px-4 py-2">{vale.completed}</td>
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

export default Todos;
