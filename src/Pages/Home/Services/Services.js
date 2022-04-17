import React, { useEffect, useState } from 'react';
import './Services.css'

import Service from '../Service/Service';

// const info =


const Services = () => {
    const [services, setServices] = useState([]); 
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))    

    } , [])

    return (
        <div id='service'>
            <h2 className='text-center my-5' >Our Services</h2>
            <div className='services-container'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;