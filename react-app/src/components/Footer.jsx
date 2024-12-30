import React from 'react'
import '../assets/CSS/Footer.css'

export const Footer = () => {
  return (
    <>
    <footer>
        <div class="form">
            <h1 style={{fontSize:"30px",color:"red"}}>Subscribe To our Channel</h1>
            <label for="name">Name</label><br />
            <input type='text' id="name"></input><br />
            <label for="mail">Email</label><br />
            <input type="email" id="mail"></input><br />
            <button class="button button2">Submit</button>
        </div>
        <div class="msg">
            <ul class="fl">
                <li style={{fontSize:"30px",color:"red"}}>Quick Links</li><br />
                <li>About us</li><br />
                <li>Blogs</li><br />
                <li>Portfolio</li><br />
                <li>Contact us</li><br />
            </ul>

        </div>
        <div class="con">

            <ul class="fl">
                <li style={{fontSize:"30px",color:"red"}}>Contact Info</li><br />
                <li>+91 7871937373</li><br />
                <li>mathavra.22cse@kongu.edu</li><br />
            </ul>
        </div>
    </footer>
    <div class="but">
            <h4>Designed by Mr.X </h4>
    </div>
    
    </>
  )
}
