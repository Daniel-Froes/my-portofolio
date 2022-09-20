import React from 'react'
import CV from '../../assets/daniel+froes.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Baixar Curriculo</a>
        <a href="#contact" className='btn btn-primary'>Vamos conversar :)</a>
    </div>
  )
}

export default CTA