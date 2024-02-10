import React from 'react'
import './featured-works.css'
import FeatureImageOne from '../../assets/feat-work-image-1.svg'
import FeatureImageTwo from '../../assets/feat-work-image-2.svg'
import FeatureImageThree from '../../assets/feat-work-image-3.svg'

function FeaturedWorks() {
    return (
        <section className='featured-works-section'>
            <div className='featured-works-header'>
                <p className='section-heading'>Featured Works</p>
            </div>
            <div className='featured-works-container'>
                <article className='featured-work'>
                    <div className='featured-work-image-container'
                        style={{
                            backgroundImage: `url(${FeatureImageOne})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem'
                        }}
                    >
                    </div>
                    <div className='featured-work-info'>
                        <h2 className='featured-work-title'>Designing Dashboards</h2>
                        <div className='featured-work-publish-info'>
                            <p className='featured-work-publish-year'>2024</p>
                            <p className='featured-work-category'>Dashboard</p>
                        </div>
                        <p className='featured-work-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </article>
                <hr />
                <article className='featured-work'>
                    <div className='featured-work-image-container'
                        style={{
                            backgroundImage: `url(${FeatureImageTwo})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem'
                        }}
                    >
                    </div>
                    <div className='featured-work-info'>
                        <h2 className='featured-work-title'>Vibrant Portraits of 2024</h2>
                        <div className='featured-work-publish-info'>
                            <p className='featured-work-publish-year'>2024</p>
                            <p className='featured-work-category'>Illustration</p>
                        </div>
                        <p className='featured-work-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </article>
                <hr />

                <article className='featured-work'>
                    <div className='featured-work-image-container'
                        style={{
                            backgroundImage: `url(${FeatureImageThree})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem'
                        }}
                    >
                    </div>
                    <div className='featured-work-info'>
                        <h2 className='featured-work-title'>2036 Days of Malayalam type</h2>
                        <div className='featured-work-publish-info'>
                            <p className='featured-work-publish-year'>2023</p>
                            <p className='featured-work-category'>Typography</p>
                        </div>
                        <p className='featured-work-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </article>
                <hr />
            </div>
        </section >
    )
}

export default FeaturedWorks