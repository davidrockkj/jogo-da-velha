import React from 'react';
import './styles.css'

const AboutLink = ({ className='' }) => {
  return (
    <a href='#to-do' className={`about-link ${className}`}>
      sobre
    </a>
  )
}

export default AboutLink;