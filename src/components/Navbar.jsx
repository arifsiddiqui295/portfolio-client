import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll'
const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='w-screen fixed z-50 '
            style={{
                backgroundColor: "#141c27"
            }}>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                {/* Logo */}
                <Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >
                    <h1 className='w-full text-3xl cursor-pointer  font-bold text-white'>Web
                        <span className='text-yellow-300'> Developer</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex '
                    style={{
                        gap: '30px'
                    }}
                >
                    <li
                        className=" text-lg relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >Home </Link>
                    </li>
                    <li
                        className=" text-lg relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >About</Link>
                    </li>
                    <li
                        className=" text-lg relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <Link to='services' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >Services</Link>
                    </li>
                    <li
                        className=" text-lg relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <Link to='skills' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >Skills</Link>
                    </li>
                    <li
                        className=" text-lg relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <Link to='projects' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >Projects</Link>
                    </li>
                    <li
                        className=" text-lg relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} >Contact</Link>
                    </li>

                </ul>
                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#1a232f] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold mt-8  mb-10 p-2 text-white'>WEB
                        <span className='text-yellow-300'> DEV</span>
                    </h1>

                    {/* Mobile Navigation Items */}
                    <div className=' p-2 flex flex-col gap-4 text-2xl'>

                        <li
                            className="relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <Link to='hero' spy={true} smooth={true} offset={50} duration={1500} onClick={handleNav} >Home </Link>
                        </li>
                        <li
                            className="relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <Link to='about' spy={true} smooth={true} offset={50} duration={1500} onClick={handleNav} >About</Link>
                        </li>
                        <li
                            className="relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <Link to='services' spy={true} smooth={true} offset={50} duration={1500} onClick={handleNav} >Services</Link>
                        </li>
                        <li
                            className="relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <Link to='skills' spy={true} smooth={true} offset={50} duration={1500} onClick={handleNav} >Skills</Link>
                        </li>
                        <li
                            className="relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <Link to='projects' spy={true} smooth={true} offset={50} duration={1500} onClick={handleNav} >Projects</Link>
                        </li>
                        <li
                            className="relative font-semibold text-white cursor-pointer w-fit md:block after:block after:content:'' after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                        >
                            <Link to='contact' spy={true} smooth={true} offset={50} duration={1500} onClick={handleNav} >Contact</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;