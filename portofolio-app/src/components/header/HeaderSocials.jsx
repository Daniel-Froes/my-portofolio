import React from 'react'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin" target="_blank"><BsLinkedin/></a>
        <a href="github" target="_blank"><FaGithub/></a>
        <a href="whats" target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials