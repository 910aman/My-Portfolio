import { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const navData = [
        { label: "Home", to: "/" },
        { label: "About Me", to: "/about" },
        { label: "Skills", to: "/skills" },
        { label: "Resume", to: "/resume" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "Contact", to: "/contact" },
    ];

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggleMenu = () => setToggleMenu(!toggleMenu);
    // const handleOpenedMenu = () => setToggleMenu(false)

    return (
        <div className ='p-5 h-20 bg-theme-background-color z-50 sticky '>
            <nav className='flex justify-between relative'>
                <div>
                    <Link to={"/"} className=''>
                        <FaReact size={30} className='cursor-pointer' />
                    </Link>
                </div>
                <ul className='hidden gap-14 md:relative absolute md:flex md:top-2 top-[40px] '>
                    {navData.map((navbar) => (
                        <li className='lg:text-xl lg:font-semibold text-base  font-medium navBar-animation' key={navbar.label}>
                            <Link to={navbar.to}>
                                {navbar.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='cursor-pointer flex md:hidden' onClick={handleToggleMenu} aria-expanded={toggleMenu} aria-label="Toggle navigation">
                    {toggleMenu ? <HiX size={30} /> : <FaBars size={30} />}
                </button>
            </nav>

            <ul className={`md:hidden gap-10 py-3 relative flex navbar-toggle-menu ${toggleMenu ? 'navbar-active-menu' : ""}`}>
                {navData.map((navbar,index) => (
                    <li className='lg:text-xl py-1  lg:font-semibold text-base font-medium navBar-animation text-theme-main-color' key={index}>
                        <Link to={navbar.to} onClick={handleToggleMenu}>
                            {navbar.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
