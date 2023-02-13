import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='hearder_socials'>
        <a href="https://www.linkedin.com/in/anchiteng/" target="_blank" rel="noreferrer"><BsLinkedin size='1.5rem'/></a>
        <a href="https://github.com/AnchiTeng" target="_blank" rel="noreferrer"><FaGithub size='1.5rem'/></a>
        {/* <a href="https://svelteslicer.herokuapp.com/s" target='_blank'></a> */}

 
    </div>
  )
}

export default HeaderSocials