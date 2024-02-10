import React from 'react'
import './recent-posts.css'

function RecentPosts() {
    return (
        <section className='recent-posts'>
            <div className='recent-posts-header'>
                <p className='section-heading'>Recent Posts</p>
                <a href='#' className='view-all-link'>View All</a>
            </div>
            <div className='posts-card-container'>
                <article className='post-card'>
                    <h2 className='post-title'>Making a design system from scratch</h2>
                    <div className='post-publish-info'>
                        <div className='publish-date'>10 Feb 2024</div>
                        <div className='vr'>
                            <svg width="2" height="21" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V21" stroke="currentColor" />
                            </svg>
                        </div>
                        <div className='post-category'>Design, Pattern</div>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet.</p>
                </article>
                <article className='post-card'>
                    <h2 className='post-title'>Creating pixel perfect icons in Figma</h2>
                    <div className='post-publish-info'>
                        <div className='publish-date'>10 Feb 2024</div>
                        <div className='vr'>
                            <svg className='vr-svg' width="2" height="21" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V21" stroke="currentColor" />
                            </svg>
                        </div>
                        <div className='post-category'>Figma, Icon Design</div>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet.</p>
                </article>

            </div>
        </section>
    )
}

export default RecentPosts