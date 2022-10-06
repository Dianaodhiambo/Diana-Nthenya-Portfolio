import React from 'react'
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className='n-wrapper' id="Navbar">
        <div className='n-left'>
            <div className='n-Name'>Diana</div>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType: 'none'}}>
                    <li>
                    <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to="Services" spy={true} smooth={true}> 
                        Services
                        </Link>
                    </li>
                    <li>
                    <Link to="Experience" spy={true} smooth={true}>
                        Experience
                    </Link>
                    </li>
                    <li>
                        
                      <Link to="Portfolio" spy={true} smooth={true}>
                        Portfolio
                        </Link>
                        </li>
                </ul>
            </div>

            <Link to="Contact" spy={true} smooth={true}>
            <button className='button n-button'>
                Contact
            </button>
            </Link>
        </div>

    </div>
  )
}

export default Navbar