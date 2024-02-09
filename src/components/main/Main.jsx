import React from 'react'
import './main.css'
import Hero from '../hero/Hero'
import RecentPosts from '../recent_posts/RecentPosts'
import FeaturedWorks from '../featured_works/FeaturedWorks'

function Main() {
    return (
        <main>
            <Hero />
            <RecentPosts />
            <FeaturedWorks />
        </main>
    )
}

export default Main