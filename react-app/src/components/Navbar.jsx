import React from 'react'
import '../assets/CSS/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
  return (
    <>
    <div class="navi">
        <div>
            <Link to="" className='rtd'>{props.name}</Link>
        </div>
        <div >
            <ul >
                <li><Link to="/" className='rtd'>Home</Link></li>
                <li><Link to="/egstate" className='rtd'>About</Link></li>
                <li><Link to="/" className='rtd'>Project</Link></li>
                <li><Link to="/" className='rtd'>Certification</Link></li>
                <li><Link to="/" className='rtd'>Contact</Link></li>
                
            </ul>
        </div>
    </div>
    </>
    
  )
}
