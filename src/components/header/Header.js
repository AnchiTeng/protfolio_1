import React from 'react';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
     
     <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Anchi Teng</h1>
        <h5 className="text-light">Fullstack Developer</h5>

     </div>
     <CTA/>
    
    </header>
  )
}

export default Header