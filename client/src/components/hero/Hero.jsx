import React from 'react'
import HeroImage from '../heroImage/HeroImage'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero__container">
        <section className='hero__wrapper'>
            <div className='hero__heading'>
                <div className='hero__headingText'>
                    <section className='hero__welcome'>
                        <h4 className='hero__welcomeText'>Welcome to</h4>
                    </section>
                    <section className='hero__name'>
                        <h1 className='hero__nameText'>Flowy Poet</h1>
                    </section>
                </div>
            </div>
            <HeroImage/>
        </section>   
    </div>
  )
}

export default Hero