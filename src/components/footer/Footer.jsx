import React from 'react'
import './footer.css'
import FaceBookIcon from '../../assets/fb.svg'
import InstagramIcon from '../../assets/insta.svg'
import TwitterIcon from '../../assets/twitter.svg'
import LinkedInIcon from '../../assets/Linkedin.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='social-links'>
                <img src={FaceBookIcon} alt='Facebook Icon' title='Facebook Profile Link' />
                <img src={InstagramIcon} alt='Insta Icon' title='Instagram Profile Link' />
                <img src={TwitterIcon} alt='Twitter Icon' title='Twitter Profile Link' />
                <img src={LinkedInIcon} alt='Linkedin Icon' title='LinkedIn Profile Link' />
            </div>
            <p className='copyright-text'>Copyright ©2020 All rights reserved </p>
        </footer>
    )
}

export default Footer