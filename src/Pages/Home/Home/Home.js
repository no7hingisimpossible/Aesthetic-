import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;