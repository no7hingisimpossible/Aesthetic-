import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Difference between Authentication and Authorization</h1>
            <p>Simply put Authentication is a way a system comfirm users are they who they say they are. The best example is a website's login page. Through the login page the website authentcates or confirm if this is a valid user.</p>
            <p>Authorization gives certain accesses to certain users. It tailors a system for what a user can do and cannot do. For example the google docs application gives you permission, gives you authority over creating, deleting, sharing docs.</p>

            <h1>Why do we use firebase? What are its alternatives?</h1>
            <p>Firebase provides backend services which other wise would have been time consuming and which we would have to do ourselves which isnt scalable for short applications. It is compatible with Web,IOS, android and OS X clients. The most useful feature is its security. It is fast and reliable. Other alternatives are MongoDB, AuthO.</p>

            <h1>What other services do firebase provide other than authentication?</h1>
            <p>Firebase offers plenty of services. To name a few 
                <ul>
                <li>Cloud Messaging : Businesses needs to send notification to their users. Cloud messaging is a service that offers sending notification that though for free. </li>
                <li>Predictions : this service helps business to makes desicions about their products. This service is important to increase business and increase revenue. </li>
                <li>Google Analytics: The last but not the least is Google analytics service which we all heard of and very popular among businessess. This service too helps you managing your business but it digs deeper. How? It tracks user demographics, behaviour, purchasing patterns. </li>
                </ul>
            </p>

            
        </div>
    );
};

export default Blogs;