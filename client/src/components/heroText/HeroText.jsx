import React from 'react'
import './HeroText.scss'

const HeroText = () => {
  return (
    <div className='heroText__container'>
        <section className='hero__welcome'>
            <h4 className='hero__welcomeText'>Welcome to</h4>
        </section>
        <section className='hero__name'>
            <h1 className='hero__nameText'>Flowy Poet</h1>
        </section>
    </div>
  )
}

export default HeroText