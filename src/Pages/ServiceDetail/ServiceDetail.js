import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {id} = useParams()
    return (
        <div>
            <h4>this is service detail {id}</h4>
        </div>
    );
};

export default ServiceDetail;