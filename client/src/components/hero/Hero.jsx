import React from 'react'
import HeroImage from '../heroImage/HeroImage'
import HeroText from '../heroText/HeroText'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero__container">
        <section className='hero__wrapper'>
            <HeroText/>
            <HeroImage/>
        </section>   
    </div>
  )
}

export default Hero