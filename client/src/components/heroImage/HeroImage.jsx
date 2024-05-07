import React from 'react'
import HeroImg from '../../assets/images/hero.jpg'
import './HeroImage.scss'

const HeroImage = () => {
  return (
    <div className='heroImage__container'>
        <img className='heroImage__image' src={HeroImg} alt='hero'/>
    </div>
  )
}

export default HeroImage