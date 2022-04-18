import React from 'react';
import './Review.css'
import Review1 from '../../../images/Review1.png'
import Review2 from '../../../images/Review2.png'

const Reviews = () => {
    return (
        <div className='review-container'>
            <h3 className='text-center mt-5'>Getting Reviews Since 2015</h3>
            <p className='text-center mb-5'>The Armoury would be nothing without the men and women that have put their trust in us over the last 10 years, and working together we've had the privilege of seeing some truly tremendous accomplishments.  Whether that means gaining the confidence to wear a two-piece at the beach after having their first child, fitting into the suit they always imagined they'd wear for their daughters wedding, or the everyday confidence that permeates everything they do, installed through the effort they've put in at the studio.</p>
                <div className='review-card-container'>
                    <div className='review-card' >
                        <img className='review-image' src={Review1} alt="" />
                        <div className='review-box'>
                            <p>"Working from home meant my body felt stiffer, my energy plummeted and my motivation to train was non-existent. However working with Aesthetic has completely turned that around- the support they offer is second to non not only in their training sessions, but also their lifestyle and nutrition coaching. I've got my energy back, and have ended up with a physique better than even when I was in my 20s!" <br /> - Dave Wood</p>
                        </div>
                    </div>
                    <div className='review-card'>
                        <img className='review-image' src={Review2} alt="" />
                        <div className='review-box'>
                            <p>"I love our training and never get bored, it helps me balance my busy life as a mum and gives me the time to focus on myself. Best decision I ever made was booking my first session with Aesthetic!" <br /> - Sokina Begum
                            </p>
                        </div>
                    </div>
                </div>
                
            
        </div>
            
        
    );
};

export default Reviews;