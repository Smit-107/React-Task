  import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Photos() {

  let [alldata, setalldata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
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
              <th className="border px-4 py-2">No.</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Url</th>
              <th className="border px-4 py-2">ThumbnailUrl</th>
            </tr>
          </thead>
          <tbody>

            {
              alldata.map((valuee) => {
                return (
                  <tr key={valuee.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{valuee.id}</td>
                    <td className="border px-4 py-2">{valuee.title}</td>
                    <td className="border px-4 py-2">{valuee.url}</td>
                    <td className="border px-4 py-2">{valuee.thumbnailUrl}</td>
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

export default Photos;
