import React from 'react'
import HeroImage from '../../assets/images/hero.jpg'
import './Homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage__heroContainer">
      <section className='homepage__heroWrapper'>
        <div className='homepage__heroHeading'>
          <div className='homepage__headingWrapper'>
            <section className='homepage__welcome'>
              <h4 className='homepage__welcomeText'>Welcome to</h4>
            </section>
            <section className='homepage__name'>
              <h1 className='homepage__nameText'>Flowy Poet</h1>
            </section>
          </div>
        </div>
        <div className='homepage__heroImage'>
          <img className='homepage__image' src={HeroImage} alt='hero'/>
        </div>
      </section>   
    </div>
  )
}

export default Homepage