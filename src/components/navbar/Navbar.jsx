import './navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import AOS from 'aos';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = () => (
        <>
            <p onClick={() => setIsOpen(false)}>
                <a href='#home'>Home</a>
            </p>
            <p onClick={() => setIsOpen(false)}>
                <a href='#whatisgpt'>What is GPT?</a>
            </p>
            <p onClick={() => setIsOpen(false)}>
                <a href='#feature'>Open AI</a>
            </p>
            <p onClick={() => setIsOpen(false)}>
                <a href='#possibility'>Case Studies</a>
            </p>
            <p onClick={() => setIsOpen(false)}>
                <a href='#blog'>Library</a>
            </p>
        </>
    );

    return (
        <div className='nav padding__section bg__gradient' data-aos='fade-down'>
            <div className='nav__logo'>
                <a href='#home'>
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className='nav__link-container'>
                <NavLinks />
            </div>
            <div className='nav__sign-container'>
                <p>Sign in</p>
                <button>Sign up</button>
            </div>

            {isOpen ? (
                <>
                    <HiX
                        size={27}
                        style={{ marginLeft: '1rem', cursor: 'pointer' }}
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                    <div className='nav__menu-container scale-up-center'>
                        <NavLinks />
                        <div className='nav__sign-container'>
                            <p>Sign in</p>
                            <button>Sign up</button>
                        </div>
                    </div>
                </>
            ) : (
                <HiMenuAlt3
                    size={27}
                    style={{ marginLeft: '1rem', cursor: 'pointer' }}
                    className='open-menu-icon'
                    onClick={() => setIsOpen((prev) => !prev)}
                />
            )}
        </div>
    );
};

AOS.init();

export default Navbar;
