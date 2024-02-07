import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Albums() {

  let [alldata, setalldata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
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
              <th className="border px-4 py-2 text-start">No.</th>
              <th className="border px-4 py-2 text-start">Title</th>
            </tr>
          </thead>
          <tbody>

            {
              alldata.map((item) => {
                return (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.title}</td>
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

export default Albums;
