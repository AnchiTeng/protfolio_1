import React from 'react';
import './header.css';
import CTA from './CTA';
//import Me from '../../assets/profile_photo.jpeg';
import Mee from '../../assets/Finn.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
     
        <div className="container header_container">
            <h5>Hello I'm</h5>
        
            <h1>Anchi Teng</h1>
           
            <h4 className="text-light">Fullstack Developer</h4>
           
            <CTA/>
            <HeaderSocials/>
           
       <div className='container_about'>
          <div className='about_cards'>
            <article className='about_card'>
              <h5>Experience</h5>
              <small>3 Years Programming</small>
            </article>
            <article className='about_card'>
              <h5>Open Sources</h5>
              <small>3 Years Programming</small>
            </article>
            <article className='about_card'>
              <h5>Projects</h5>
              <small>3 Years Programming</small>
            </article>

           
          </div>
          <div className='about_p'>
            <h4>Empathetic Software Engineer with a passion and creativity for developing scalable full-stack applications with JavaScript/React/Svelte/Node/Express/relational and non-relational databases. I love in creating and executing innovative solutions to maximize user efficiency.</h4>
            </div>
       </div>

      
    
            <a href='#contact' className='scroll_down'>Scroll Down</a>
           
            
        </div>
       
    </header>
  )
}

export default Header