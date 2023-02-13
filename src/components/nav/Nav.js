import React from 'react';
import "./nav.css";
import {BiHomeHeart,BiBook,BiMessageDetail} from 'react-icons/bi';
import {FaRegUserCircle} from 'react-icons/fa';

function Nav() {
  return (
   
    <nav>
      <a href='#nav'id="home" className='active' ><BiHomeHeart size='1.85rem'/></a> 
      <a href='#about'><FaRegUserCircle size='1.6rem'/></a> 
      <a href='#experience'><BiBook size='1.6rem'/></a> 
      <a href='#contact'><BiMessageDetail size='1.6rem'/></a> 

    </nav>
    
    
  )
}

export default Nav