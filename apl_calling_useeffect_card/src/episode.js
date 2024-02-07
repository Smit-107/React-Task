import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Episodeq() {

    let [alldata, setalldata] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/28')
            .then((rest) => {
                console.log(rest)
                setalldata(rest.data)
            })
            .catch((err) => {
                console.log(err);
                console.log('it is errorr')
            })
    }, [])

    return (



        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">{alldata.id}. {alldata.name}</h2>
                    <p className='mb-1'><span className='font-semibold'>AirDate: </span>{alldata.air_date} <span className='ms-6 font-semibold'>Episode: </span>{alldata.episode}</p>
                    <div className=" mb-1"><span className=' font-semibold'>URL:</span> {alldata.url}</div>
                    <div className=" mb-1"><span className=' font-semibold'>Created:</span> {alldata.created}</div>
                    <div>
                        {
                            // <div className='break-all'>{alldata.characters}</div>
                        }
                    </div>
                </div>
            </div>  
        </div>


    )

}

export default Episodeq;