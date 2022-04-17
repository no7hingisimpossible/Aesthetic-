import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;