import React, { useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center bg-Primary h-24 w-full mx-auto px-4 text-black'>
      <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img className='w-10 inline-block items-center' src={Logo} alt="" /><span className='text-white'>AT DIGITEL</span></a>

      <ul className='hidden md:flex font-semibold text-white'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>SERVICES</li>
        <li className='p-4'>ABOUT US</li>
        <li className='p-4'>CONTACT US</li>
        <li className='p-4'>CAREERS</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? '' : <FaBars className='h-6 w-6 text-white'/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className='flex justify-between  flex-row-reverse'>
          <div onClick={handleNav} className='block md:hidden'>
              {!nav ? <FaBars className='h-6 w-6 text-black'/> :  <FaXmark className='h-6 w-6 text-black mt-4 mr-4'/>}
          </div> 
           
          <div className='flex flex-col font-semibold'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>SERVICES</li>
            <li className='p-4'>ABOUT US</li>
            <li className='p-4'>CONTACT US</li>
            <li className='p-4'>CAREERS</li>
          </div>  
        </div>   
      </ul>
    </div>
  );
};

export default Navbar;