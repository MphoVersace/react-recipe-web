import React from 'react'
import recipeFour from '../../../assets/recipeFour.jpeg';
import recipeFive from '../../../assets/recipeFive.jpeg';
import recipeSix from '../../../assets/recipeSix.jpeg';
import landingImgThree from '../../../assets/landingImgThree.png';

const SecondPage = () => {
  return (
    <div className='relative h-screen bg-bgColor'>
      <div className='absolute bottom-16 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
        <img src={recipeFour} alt="Healthy Recipe One" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Cookies & Cream Parfaits</div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
            Go To Recipe
          </button>
        </div>
      </div>

      <div className='absolute bottom-16 right-[14.5rem] max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={recipeFive} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Raspberry Choc Chip Cookies</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </button>
          </div>
        </div>

        <div className='absolute top-5 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={recipeSix} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Chocolate Fudge Caramel Cake</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </button>
          </div>
        </div>

        <div className='absolute h-[17rem] flex flex-col items-center justify-center'>
      <p className='text-6xl md:text-9xl ml-[2.5rem] font-devonshire text-secondary/100 text-stroke text-shadow-sm'>Side</p>
      <div className='absolute top-[16rem] left-[-0.5rem] w-[11rem] overflow-hidden rounded'>
        <img src={landingImgThree} alt="Landing Page" className='w-full h-full object-cover rounded-tr-[20rem] rounded-br-[20rem]' />
      </div>
    </div>
      </div>
  );
}

export default SecondPage