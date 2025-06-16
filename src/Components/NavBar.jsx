import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/ico.jpg'; // Cambia el path si tu logo está en otro lugar
import { useEffect, useRef } from 'react';
export const Navbar = () => {

    const menuRef = useRef(null);
  const openBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const openMenu = () => {
      menuRef.current.classList.add('nav_link--show');
    };

    const closeMenu = () => {
      menuRef.current.classList.remove('nav_link--show');
    };

    const openBtn = openBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (openBtn) openBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    return () => {
      if (openBtn) openBtn.removeEventListener('click', openMenu);
      if (closeBtn) closeBtn.removeEventListener('click', closeMenu);
    };
  }, []);

    return (
        <div className='nav_container'>

            <nav className="nav container" >
                <Link className="nav_logo" to="/">
                    <img src={logo} alt="Logo" className='logo' />
                </Link>
                <ul className='nav_link nav_link--menu' ref={menuRef}>
                    <li className="nav_items">
                        <NavLink to='/' className="nav_links">Home</NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/about' className="nav_links">About</NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/contact' className="nav_links">Contact</NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/login' className="nav_links">Acerca de</NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/register' className="nav_links">Register</NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/login' className="nav_links">Login</NavLink>
                    </li>
                    <img src="/close.svg" className="nav_close" ref={closeBtnRef} alt="Cerrar menú" />
                </ul>
                <div className="nav_menu" ref={openBtnRef}>
                    <img src="/menu.svg" className="nav_img" />
                </div>
            </nav>
        </div>
    )
}
