import React from 'react'
import Logo from '../assets/logo.png';


const Footer = () => {
  return (
    <div className='md:flex md:flex-col md:items-center  w-full h-auto bg-Primary p-8'>
        <div className='flex flex-col md:flex-row md:justify-between '>
            <div className='md:w-2/6 md:gap-5 m-5 '>
                <a href='' className='text-2xl md:mb-3 font-semibold flex items-center space-x-3'><img className='w-10 inline-block items-center' src={Logo} alt="" /><span className='text-white'>AT DIGITEL</span></a><br/>
                <p className='font-[Inter] leading-4	text-white font-normal text-[14px]'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>

            <div className='md:2/5 m-5 flex flex-col sm:flex-row'>

               <div className='md:mr-10 sm:mr-5'>
                    <h1 className='md:mb-3 font-[Inter] leading-5	text-white font-semibold text-[21px]'>Our Technologies</h1>
                    <ul className='font-[Inter] leading-4	text-white font-medium ga text-[14px]'><br/>
                      <li>React JS</li><br/>
                      <li>Gatsby</li><br/>
                      <li>Next JS</li><br/>
                      <li>NodeJS</li>
                    </ul>
               </div>

               <div className='md:ml-5 sm:ml-10 mt-10 sm:mt-0'>
                  <h1 className='md:mb-3 font-[Inter] leading-5	text-white font-semibold text-[21px]'>Our Services</h1>
                    <ul className='font-[Inter] leading-4	text-white font-medium text-[14px]'><br/>
                      <li>Social media Marketing</li><br/>
                      <li>Web & Mobile App Development</li><br/>
                      <li>Data & Analytics</li>
                    </ul>
               </div>

            </div>
        </div>
        <div class="border-t-[1px] md:w-4/6 flex pt-3 border-white items-center justify-center">
          <span class="text-sm sm:text-center font-[Inter] leading-4	text-white font-medium text-[14px]">  <a href="#" class="hover:underline">Privacy Policy</a> |  <a href="#" class="hover:underline"> Terms & Conditions</a></span>         
        </div>
    </div>
  )
}

export default Footer
