import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/EWL-shrimp-pad-thai-step-05-1190-87e6eec4f9ec48f288489d7f06ea01fc.webp';
import img3 from '../../../assets/img3.webp';
import landingImgTwo from '../../../assets/landingImgTwo.png';



function FirstPage()  {
  
  return (
    
    <div className='relative h-full bg-bgColor'>      
      <div className='absolute bottom-2 left-20 max-w-[13rem] rounded overflow-hidden shadow-lg'>
        <img src={img1} alt="Healthy Recipe One" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Sweet Potato & Bean Casserole</div>
          <Link to='/recipedetailpage/1' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
            Go To Recipe
          </Link>
        </div>
      </div>

      <div className='absolute bottom-2 left-[20rem] max-w-[13rem] rounded overflow-hidden shadow-lg'>
          <img src={img2} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Shrimp Pad Thai</div>
            <Link to='/recipedetailpage/2' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

        <div className='absolute top-5 left-14 max-w-[14rem] rounded overflow-hidden shadow-lg'>
          <img src={img3} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Chicken & Broccoli Alfredo Casserole</div>
            <Link to='/recipedetailpage/3'className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

  <div className='relative h-[15rem] ml-[18rem] flex flex-col items-center justify-center'>
  <div className="absolute top-2 left-[8rem]">
    <p className='text-6xl md:text-9xl font-devonshire text-secondary text-stroke text-gradient'>Pick</p>
  </div>
  <div className="absolute top-[3.5rem] left-[21.5rem]">
    <p className='text-3xl md:text-8xl h-[5rem] font-devonshire text-secondary text-stroke text-gradient'> A</p>
  </div>
  <div className='text-xs md:text-sm pt-[18rem] pr-[10rem] w-[24rem]'>Healthy meals are not just about eating right; they're about nurturing your body and soul. At Foodie Favourites, we strive to make healthy eating a joyful and accessible experience for all. We believe that food has the power to bring people together and create moments of happiness and connection.</div>

  <div className='absolute top-[10.5rem] right-[-0rem] w-[12rem] rounded overflow-hidden'>
    <img src={landingImgTwo} alt="Landing Page" className='w-52 h-50 object-cover rounded-tl-[22rem] rounded-bl-[22rem]' />
  </div>
</div>


</div>     
  );
};

export default FirstPage;
