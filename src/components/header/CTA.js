import React from 'react';
import CV from '../../assets/Anchi Teng Software Engineer Resume 2022.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}>Download CV</a>
        <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA