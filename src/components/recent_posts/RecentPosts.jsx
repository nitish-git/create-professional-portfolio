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
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </article>
                <article className='post-card'>
                    <h2 className='post-title'>Creating pixel perfect icons in Figma</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </article>
            </div>
        </section>
    )
}

export default RecentPosts