import React from 'react';
import recipeOne from '../../../assets/recipeOne.jpeg';
import recipeTwo from '../../../assets/recipeTwo.jpeg';
import recipeThree from '../../../assets/recipeThree.jpeg';
import landingPageImg from '../../../assets/landingPageImg.png';

const FirstPage = () => {
  return (
    <div className='relative h-screen'>
      <div className='absolute bottom-16 left-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
        <img src={recipeTwo} alt="Healthy Recipe One" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Mash Potatoes and Broccoli</div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
            Go To Recipe
          </button>
        </div>
      </div>

      <div className='absolute bottom-16 left-[14.5rem] max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={recipeOne} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Beef Stew with Potatoes</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </button>
          </div>
        </div>

        <div className='absolute top-5 left-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={recipeThree} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Roasted Bell Peppers</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </button>
          </div>
        </div>

        <div className='absolute top-[15rem] left-[26rem] max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={landingPageImg} alt="Landing Page" className='w-52 h-52 object-cover' />
        </div>

      </div>
      

      

    
  );
}

export default FirstPage;
