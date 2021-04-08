import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState('mumbai');

    useEffect( ()=>{
        const fetchApi = async() =>{
            const url='http://api.openweathermap.org/data/2.5/weather?q='+search+'&units=metric&appid=728c20461e6bcae75f307cbe53c2ae6b'
            const response= await fetch(url);
            const resJson= await response.json();
            setcity(resJson.main);
        };
        
        fetchApi();
    },[search]);

    return(
        <>
            <div className='box'>
                <div className='inputData'>
                <input type='search' value={search} className='inputField' onChange={
                    (event)=>{ setsearch(event.target.value)}
                } />
                </div>
            
                <div>
                {(city==null)?(<p className='errorMsg'>Data not found</p>):(
                <div className='info'>
                <h2 className='location'>
                <i className='fas fa-street-view'>{search}</i>
                </h2>
                <h1 className='temp'>{city.temp}°C</h1>
                <h3 className='tempmin_max'> Min : {city.temp_min}°C | Max : {city.temp_max}°C </h3>
                </div>
                )}

                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                </div>
            
            </div>
        </>
    );
}

export default Tempapp;