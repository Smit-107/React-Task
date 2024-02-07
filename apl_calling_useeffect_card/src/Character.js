import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function Character() {

    const Demo = styled.span`
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%; 
        margin: auto 5px;
    `;

    let [States,setStates] = useState(true)
    

    let [alldata, setalldata] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((rest) => {
                console.log(rest)
                setalldata(rest.data.results)
            })
            .catch((err) => {
                console.log(err);
                console.log('it is errorr')
            })
    }, [])

    

    return (



        <div className="flex flex-wrap">

            {
                alldata.map((val) => {

                    const dotColor = val.status === 'Alive' ? 'bg-green-500' : val.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500';

                    return (
                        <div key={val.id} className="w-1/2 p-4 flex flex-col">

                            <div className="bg-white shadow-md  p-6 flex items-center">
                                <div className=''>
                                    <img src={val.image} alt="" className="w-30 h-40 rounded" />
                                </div>


                                <div className="ml-4">
                                    <h2 className="text-xl font-bold mb-2">{val.id}. {val.name}</h2>
                                    <p className='mb-1'>

                                        <span className={`font-semibold`}>Status:</span>
                                        {/* <span className={`inline-block w-2.5 h-2.5 rounded-full ${dotColor} ms-3 me-1`} /> */}
                                        {
                                            (States) ? <Demo className={dotColor} /> : 'not get status'
                                        }
                                        {val.status}
                                        <span className='ms-6 font-semibold'>Species: </span>{val.species}
                                        <span className='ms-6 font-semibold'>Gender: </span>{val.gender}
                                    </p>
                                    <div className=" mb-1"><span className=' font-semibold'>URL:</span> {val.url}</div>
                                    <div className=" mb-1"><span className=' font-semibold'>Created:</span> {val.created}</div>
                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </div>



    )

}

export default Character;