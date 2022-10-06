import React from 'react'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import Instagram from '../images/instagram.png'
import Vector2 from '../images/Vector2.png'
import Diana from '../images/dee.png'

const Introduction=()=>{
  return (
    <div className='Introduction'>
        <div className='i-left'>
        <div className='i-name'>
         <span> Hi! I Am</span>
         <span>Diana Odhiambo</span>
         <span>Trained Hospitality personel and Travel Agent,</span><span>
         whose passion for tech has led her into Software Engineering.</span> 
         <span>Currently undertaking a remote Software Engineering course at Moringa School.</span>
    </div>

    <button className='button i-button'>Hire me</button>
    <div className='i-icons'>
      <img src ={Github} alt=""/>
      <img src ={LinkedIn} alt=""/>
      <img src ={Instagram} alt=""/>
      
    </div>
    <div className='images'>
      <img src ={Vector2} alt=""/>
      <img src ={Diana} alt=" "/>
    </div>
    <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        
    </div>
    </div>
  )
}

export default Introduction