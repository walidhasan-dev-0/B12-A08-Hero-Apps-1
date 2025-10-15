import React from 'react';
import logoPng from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links  = <>
    

    <NavLink to='/'><li className='m-2'> Home</li></NavLink>
    <NavLink to='/apps'><li className='m-2'>Apps</li></NavLink>
    <NavLink to='/install' className='m-2'>Installation</NavLink>
    
    </>
    return (
        <div>
          <div className="navbar  bg-base-100 shadow-sm">

<div className='flex container mx-auto'>
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to='/'><img className='w-[50px]' src={logoPng} alt="" /></Link>
    <Link to='/' className="btn-ghost text-xl bg-gradient-to-r from-[#632EE3]
 to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    {links}
       
    </ul>
  </div>
  <div className="navbar-end">
    
    <a className="btn text-white bg-gradient-to-r from-[#632EE3]
 to-[#9F62F2]" href='https://github.com/walidhasan-dev-0'><IoLogoGithub className='text-white' /> Contribute</a>
  </div>
</div>


            </div>
        </div>
    );
};

export default Navbar;