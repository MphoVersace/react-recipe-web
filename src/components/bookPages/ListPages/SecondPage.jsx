import React from "react";
import { Link } from 'react-router-dom';
import img4 from '../../../assets/Mini-chocolate-cakes_2.webp';
import img5 from '../../../assets/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-2 (1).webp';
import img6 from '../../../assets/Strawberry-Ice-Cream-No-Churn_3b.webp';
import about2 from '../../../assets/download__3_-removebg-preview.png';
import landingImgThree from '../../../assets/landingImgThree.png';

function SecondPage() {
  return (
    <div className='relative h-full bg-bgColor'>
      <div className='absolute bottom-2 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
        <img src={img4} alt="Healthy Recipe One" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Mini Chocolate Cakes</div>
          <Link to='/recipedetailpage/4' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
            Go To Recipe
          </Link>
        </div>
      </div>

      <div className='absolute bottom-2 right-[14.5rem] max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={img5} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Vanilla Cupcakes</div>
            <Link to='/recipedetailpage/5' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

        <div className='absolute top-5 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={img6} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Strawberry Ice Cream</div>
            <Link to='/recipedetailpage/6' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

        <div className='absolute h-[9rem] flex flex-col items-center justify-center'>
      <p className='text-6xl md:text-9xl ml-[2.5rem] font-devonshire text-secondary/100 text-stroke text-gradient'>Side</p>
      
      <div className='absolute top-[16rem] left-[-0rem] w-[11rem] overflow-hidden rounded'>
        <img src={landingImgThree} alt="Landing Page" className='w-full h-full object-cover rounded-tr-[20rem] rounded-br-[20rem]' />
      </div>
      <img
        src={about2}
        alt="Healthy Recipe One"
        className='absolute top-[4rem] left-[17rem] w-[9rem] h-[9rem] rounded overflow-hidden object-cover'
      />  
      
    </div>
    <div className='text-xs md:text-sm pt-[15rem] pl-[12rem] w-[29rem]'>Dessert meals are the sweetest indulgence, a delightful finale to any dining experience. From rich chocolate cakes to light and fluffy pastries, desserts tantalize our taste buds and bring a smile to our faces. We celebrate the art of dessert-making, crafting delectable treats that are both satisfying and soul-soothing</div>
    <div className='text-s md:text-md pt-[15rem] pl-[2rem] w-[17rem]'>Welcome to a world where every dessert is a work of art and every moment is sweetened with a touch of magic</div>

      </div>
  );
}

export default SecondPage