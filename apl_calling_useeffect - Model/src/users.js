import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {

    let [alldata, setalldata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((set) => {
            console.log(set)
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
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">UserName</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Address</th>
                            <th className="border px-4 py-2">Phone</th>
                            <th className="border px-4 py-2">website</th>
                            <th className="border px-4 py-2">company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alldata.map((vale) => {
                                return (
                                    <tr key={vale.id} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{vale.id}</td>
                                        <td className="border px-4 py-2">{vale.name}</td>
                                        <td className="border px-4 py-2">{vale.username}</td>
                                        <td className="border px-4 py-2">{vale.email}</td>
                                        <td className="border px-4 py-2">
                                            <span className='font-bold'>Street: </span>{vale.address.street}<br />
                                            <span className='font-bold'>Suite: </span>{vale.address.suite}<br />
                                            <span className='font-bold'>City: </span>{vale.address.city}<br />
                                            <span className='font-bold'>Zipcode: </span>{vale.address.zipcode}<br />
                                            <span className='font-bold'>Lat: </span>{vale.address.geo.lat}<br />
                                            <span className='font-bold'>Lng: </span>{vale.address.geo.lng}
                                            {/* {
                                                vale.address.map((valuu) => {
                                                    return (
                                                        <div>{valuu.street}</div>
                                                    )
                                                })
                                            } */}
                                        </td>
                                        <td className="border px-4 py-2">{vale.phone}</td>
                                        <td className="border px-4 py-2">{vale.website}</td>
                                        <td className="border px-4 py-2">
                                        <span className='font-bold'>Name: </span>{vale.company.name}<br />
                                        <span className='font-bold'>CatchPhrase: </span>{vale.company.catchPhrase}<br />
                                        <span className='font-bold'>Bs: </span>{vale.company.bs}<br />
                                        </td>
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

export default Users;
