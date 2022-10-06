import React from 'react';
import Card from './Card';
import Resume from '../resume/resume.pdf'


const Services = () => {
    
  return (
    <div className='Services' id='Services'>
        {/*left side*/}
        <div className='Awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                I am a Frontend Developer who likes writing
                <br/>
                clean, elegant and efficient code.
            </span>
            <a href={Resume} download>
            
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
           </div>
        <div className='cards'>
            <div style ={{left: '16rem'}}>
            <Card
            heading = {'Office Administrator'}
            detail = {"Computing Statistical records, Customer Service, Relationship Management"}
            />
            </div>
            <div style={{top: "12rem", left: "-1.5rem"}}>
                <Card
                heading= {"Software Developer"}
                detail={"Html, Css, JavaScript, React, Ruby"}
                />
            </div>
        
             <div style={{top: "19rem", left: "16rem"}}>
                <Card
                heading= {"Tour Consultant"}
                detail={"Flight Bookings, Hotel Booking, Creating Itineraries, Preparing custom packages"}
                />
            </div>
            
            
          <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}>
        </div>
        </div>
 
      </div>
    
  );
};
       

export default Services