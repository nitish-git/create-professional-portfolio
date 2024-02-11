import React from 'react'
import './hero.css'
import HeroImage from '../../assets/profile-img.svg'

function Hero() {
    return (
        <section className='hero'>
            <div className='hero-text'>
                <h1>
                    Hi, I am John,<br />
                    Creative Technologist
                </h1>
                <p className='hero-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='primary-button'>Download Resume</div>
            </div>
            <div className='hero-figure'
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}
            >
            </div>
        </section>
    )
}

export default Hero