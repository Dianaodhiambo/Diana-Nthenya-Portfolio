import React from 'react'

const Experience = () => {
  return (
  <div className='experience' id='Experience'>
    <div className='achievement'>
        <div className='circle'>2+</div>
        <span>Years </span>
        <span>Experience</span>
    </div>
    < div className='achievement'>
        <div className='circle'>8+</div>
        <span>completed </span>
        <span>Projects</span>
    </div>
    <div className='achievement'>
        <div className='circle'>3+</div>
        <span>companies </span>
        <span>worked</span>
    </div>
    <div
          className="blur s-blur2"
          style={{ background:"var(--purple)" }}
        ></div>
  </div>
  )
}

export default Experience