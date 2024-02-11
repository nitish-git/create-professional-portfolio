import React, { useRef } from 'react'
import './header.css'

function Header() {
    const navigationList = useRef()
    const openNavButton = useRef()
    const closeNavButton = useRef()

    const handleOpenNav = () => {
        openNavButton.current.style.display = 'none'
        navigationList.current.style.display = 'flex';
    }

    const handleCloseNav = () => {
        navigationList.current.style.display = 'none'
        openNavButton.current.style.display = 'initial'
    }

    return (
        <header>
            <nav id='main-nav'>
                <p
                    id='open-nav-button'
                    onClick={handleOpenNav}
                    ref={openNavButton}
                >
                    &#9776;
                </p>
                <ul
                    id='navigation-list'
                    ref={navigationList}
                >
                    <li
                        id='close-nav-button'
                        onClick={handleCloseNav}
                        ref={closeNavButton}
                        className='navigation-list-item'
                    >
                        &times;
                    </li>
                    <li className='navigation-list-item'>Works</li>
                    <li className='navigation-list-item'>Blog</li>
                    <li className='navigation-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header