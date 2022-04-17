import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const navigate = useNavigate()
    const detailHandler = id =>{
        navigate(`/service/${id}`)
    }

    const { id, name, desc, img } = props.service
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='image' src={img} alt="" />
                <h4 className='title-card'>{name}</h4>
                <p className='desc'>{desc}</p>
            </div>
            <button onClick={()=> detailHandler(id)}className='learn-btn'>Learn More</button>
        </div>
    );
};

export default Service;