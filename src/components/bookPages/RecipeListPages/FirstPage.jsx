import React from 'react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/EWL-shrimp-pad-thai-step-05-1190-87e6eec4f9ec48f288489d7f06ea01fc.webp';
import img3 from '../../../assets/img3.webp';
import landingImgTwo from '../../../assets/landingImgTwo.png';


const FirstPage = () => {
  return (
    <div className='relative h-full bg-bgColor'>
      <div className='absolute bottom-2 left-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
        <img src={img1} alt="Healthy Recipe One" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Sweet Potato & Bean Casserole</div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
          Go To Recipe
          </button>
        </div>
      </div>

      <div className='absolute bottom-2 left-[14.5rem] max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={img2} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Shrimp Pad Thai</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </button>
          </div>
        </div>

        <div className='absolute top-5 left-8 max-w-[12rem] rounded overflow-hidden shadow-lg'>
          <img src={img3} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Chicken & Broccoli Alfredo Casserole</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </button>
          </div>
        </div>

        <div className='relative h-[15rem] ml-[18rem] flex flex-col items-center justify-center'>
  <div className="absolute top-2 left-[3.5rem] sm:left-[3rem] md:left-[4rem]">
    <p className='text-6xl md:text-9xl font-devonshire text-secondary text-stroke text-gradient'>Pick</p>
  </div>
  <div className="absolute top-[3.5rem] left-[16rem]">
    <p className='text-3xl md:text-8xl h-[5rem] font-devonshire text-secondary text-stroke text-gradient'> A</p>
  </div>
  <div className='absolute top-[10.5rem] right-[-0rem] w-[12rem] rounded overflow-hidden'>
    <img src={landingImgTwo} alt="Landing Page" className='w-52 h-50 object-cover rounded-tl-[22rem] rounded-bl-[22rem]' />
  </div>
</div>

      </div> 
  );
}

export default FirstPage;
