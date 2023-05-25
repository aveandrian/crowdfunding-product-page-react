import '../styles/Navbar.css'
import { useState } from 'react'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }
    return (
        <nav>
            <img className="header-logo" src="/images/logo.svg"></img>
            <img className='menu-btn' src={`/images/icon-${isOpen ? "close-menu" : "hamburger"}.svg`} onClick={toggleIsOpen}></img>
            <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                <a>About</a>
                <div className='nav-divider'></div>
                <a>Discover</a>
                <div className='nav-divider'></div>
                <a>Get Started</a>
            </div>
        </nav>
    )
}