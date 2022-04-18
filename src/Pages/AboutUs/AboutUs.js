import React from 'react';
import user from '../../images/user.jpg'

const AboutUs = () => {
    return (
        <div className='mt-5  mx-auto'>
            <div className='d-flex  w-50 mx-auto'>
                <div className='w-100 '>
                    <img className='img-fluid' src={user} alt="" />

                </div>
                <div className='w-100 p-3'>
                    <h3>Fahim Madani</h3>
                    <p></p>
                    <p>There is a  great quote which I think is really underrated and unappreciated. The quote goes like <br /> "People overestimate what they can do in a year but underestimate what they can do in 10 years." </p>
                    <p>In reference to the quote there is one thing to learn. CONSISTENCY. Be it become a developer or anything the goal is to consistently learn and try no matter what and stay patient through out the rocky journeys. </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;