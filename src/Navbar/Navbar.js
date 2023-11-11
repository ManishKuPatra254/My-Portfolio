import React, { Fragment, useEffect, useRef, useState } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/material';
import { Avatar } from '@mui/material';
import logo1 from '../Images/pngwing.com.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gsap from 'gsap';

export function Navbar() {

    const navigateHome = useNavigate()

    function handleNavbarHome() {
        setActiveItem('home');
        navigateHome('/')
    }

    const [menuOpen, setMenuOpen] = useState(false);
    function handleMenuOpen() {
        setMenuOpen(!menuOpen);
    }

    const [activeItem, setActiveItem] = useState('home');
    function handleNavbarClick(item) {
        setActiveItem(item);
    }

    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.3 } });

        if (menuOpen) {
            tl.to(navRef.current, { width: '100%', duration: 0.2 })
                .to(menuRef.current, { x: 0, duration: 0.2, stagger: 0.1 });
        } else {
            tl.to(menuRef.current, { x: -200, duration: 0.2, stagger: -0.1 })
                .to(navRef.current, { width: '50px', duration: 0.2 }, '-=0.2');
        }
    }, [menuOpen]);

    return (
        <Fragment>

            <div className={style.main_sec_navbar}>
                <div className={style.heading}>
                    <Stack direction="row" spacing={2}>
                        <Avatar onClick={handleNavbarHome} alt="Manish Kumar" src={logo1} />
                    </Stack>
                </div>
                <div className={`${style.listing_sec_nav} ${menuOpen ? style.menuopen_ham : ''}`}>
                    <ul>
                        <Link to="/about" className={activeItem === 'about' ? style.active : ''} onClick={() => handleNavbarClick('about')}>
                            <li style={{ color: activeItem === 'about' ? 'red' : 'white' }}>
                                About
                            </li>
                        </Link>

                        <Link to="/skills" className={activeItem === 'skills' ? style.active : ''} onClick={() => handleNavbarClick('skills')}>
                            <li style={{ color: activeItem === 'skills' ? 'red' : 'white' }}>
                                Skills
                            </li>
                        </Link>

                        <Link to="/projects" className={activeItem === 'projects' ? style.active : ''} onClick={() => handleNavbarClick('projects')}>
                            <li style={{ color: activeItem === 'projects' ? 'red' : 'white' }}>
                                Projects
                            </li>
                        </Link>

                        <Link to="/contact" className={activeItem === 'contact' ? style.active : ''} onClick={() => handleNavbarClick('contact')}>
                            <li style={{ color: activeItem === 'contact' ? 'red' : 'white' }}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={style.icons_ref}>
                    <a href='https://github.com/ManishKuPatra254' target='blank'><GitHubIcon /></a>
                    <a href='https://www.linkedin.com/in/manish-kumar-patra-10448b188/' target='blank'><LinkedInIcon /></a>
                </div>

                <div className={style.ham_menu_cond} onClick={handleMenuOpen}>
                    {menuOpen ? (
                        <MenuIcon sx={{ color: 'white' }} />
                    ) :
                        (
                            <>
                                <ul className={style.cond_menu}>
                                    <span onClick={() => setMenuOpen(false)}><CloseIcon /></span>
                                    <Link to={'/'}><li>Home</li></Link>
                                    <Link to={'/about'}> <li>About</li> </Link>
                                    <Link to={'/skills'} ><li>Skills</li></Link>
                                    <Link to={'/projects'}><li>Projects</li></Link>
                                    <Link to={'/contact'}><li>Contact</li></Link>
                                    <div className={style.accouns_links}>
                                        <a href='https://github.com/ManishKuPatra254'><GitHubIcon /></a>
                                        <a href='https://www.linkedin.com/in/manish-kumar-patra-10448b188/'><LinkedInIcon /></a>
                                    </div>
                                </ul>
                            </>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}
