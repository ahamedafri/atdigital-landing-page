import React from 'react'
import Img1 from '../assets/image1.png';
import Img2 from '../assets/image2.png';


const Home = () => {
  return (
     <div className='flex flex-col justify-between items-center md:w-4/5 mx-auto py-10 px-4'> 
        <div className='flex flex-col md:flex-row items-center justify-between  md:w-auto '>
            <div className=''>
                <img src={Img2} alt="Big Image" className=" md:w-[346px] md:h-[346px]  object-cover" />
            </div>
            <div className='md:w-3/5 md:my-6 flex flex-col md:items-start items-center md:text-start text-center  justify-center'>
              <h1 className='text-2xl font-[poppins] text-[27px] font-semibold text-Primary  mb-5'>Web & Mobile App Development</h1>
              <p className=' font-[Inter] leading-5	 font-normal text-[16px] mb-5'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <button className='bg-Secondary py-3 font-[Inter] font-bold text-white text-[14px] px-5  rounded'>LEARN MORE</button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse items-center justify-between mt-10  md:w-auto '>
            <div className=''>
                <img src={Img1} alt="Big Image" className=" md:w-[346px] md:h-[346px]  object-cover" />
            </div>
            <div className='md:w-3/5 md:my-6 flex flex-col md:items-start items-center md:text-start text-center  justify-center'>
              <h1 className='text-2xl font-[poppins] text-[27px] font-semibold text-Primary  mb-5'>Digital Strategy Consulting</h1>
              <p className=' font-[Inter] leading-5	 font-normal text-[16px] mb-5'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
              <button className='bg-Secondary py-3 font-[Inter] font-bold text-white text-[14px] px-5  rounded'>LEARN MORE</button>
            </div>
            
        </div>
     </div>   
  )
}

export default Home
