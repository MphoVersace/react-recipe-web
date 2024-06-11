import React from 'react'
import about1 from '../../assets/download__4_-removebg-preview.png';
import about2 from '../../assets/download__3_-removebg-preview.png';
import about3 from '../../assets/download__2_-removebg-preview.png';
import about4 from '../../assets/99cb36a3-3122-426c-963d-0a1c160c0756-removebg-preview.png';
import about5 from '../../assets/Noodles_Thai_Food_-_Free_photo_on_Pixabay-removebg-preview.png';
import about6 from '../../assets/_kaffebarpngs__moodboardkaffebar-removebg-preview.png';

const AboutPage = () => {
  return (
    <div className='relative h-full bg-bgColor'>

    <div className='absolute h-15 flex flex-col items-center justify-center'>
        <p className='text-6xl md:text-8xl ml-[9rem] font-devonshire text-secondary/100 text-stroke text-gradient'>About Us</p>
    </div>

    <p className='md:text-2xl pt-[6rem]'>Welcome to Foodie Favorites, your very own home away from home!</p>
    <p className='text-xs md:text-sm p-[2rem] w-[15rem]'>From hearty homecooked meals to indulgent desserts, we are your go-to for foodies just like you.</p>
    <p className='text-xs md:text-sm pl-[24rem] pr-[2rem] mt-[-7rem] '>Foodie Favorites was founded by Mpho & Grace, who combined Mpho's passion for food with Grace's love for cooking, all in one delicious journey.</p>
    <p className='text-xs md:text-sm pt-[0rem] pl-[11rem] w-[31rem] mt-[3rem]'>Our mission is to bring joy and inspiration to your kitchen. We believe that cooking should be fun, accessible, and rewarding for everyone, whether you're a beginner or a seasoned chef. We believe that food brings people together, and we are excited to be a part of your culinary journey.</p>
    <p className='text-xs md:text-sm pt-[2rem] pl-[12rem] w-[38rem] mt-[7rem]'>In addition to our recipe collection, we provide cooking tips, meal planning guides, and video tutorials to help you master new techniques and make the most of your time in the kitchen. Thank you for visiting Foodie Favourites. We hope you find inspiration and joy in our recipes, and we look forward to being a part of your kitchen adventures!</p>

    <img
        src={about1}
        alt="Healthy Recipe One"
        className='absolute top-[10rem] left-[15rem] w-[7rem] h-[7rem] rounded overflow-hidden object-cover'
      />    
    <img
        src={about2}
        alt="Healthy Recipe One"
        className='absolute bottom-[14rem] right-[0.5rem] w-[12rem] h-[12rem] rounded overflow-hidden object-cover'
      />  
    <img
        src={about3}
        alt="Healthy Recipe One"
        className='absolute top-0 right-[4rem] w-[6rem] h-[6rem] rounded overflow-hidden object-cover'
      />
      <img
        src={about3}
        alt="Healthy Recipe One"
        className='absolute top-0 left-[1.5rem] w-[6rem] h-[6rem] rounded overflow-hidden object-cover'
      />
      <img
        src={about3}
        alt="Healthy Recipe One"
        className='absolute bottom-[11rem] left-[17rem] w-[8rem] h-[8rem] rounded overflow-hidden object-cover'
      />
    <img
        src={about4}
        alt="Healthy Recipe One"
        className='absolute bottom-6 left-[1rem] w-[9rem] h-[15rem] rounded overflow-hidden object-cover'
      /> 
    <img
        src={about5}
        alt="Healthy Recipe One"
        className='absolute bottom-[18rem] left-[2rem] w-[8rem] h-[6rem] rounded overflow-hidden object-cover'
      /> 
    <img
        src={about6}
        alt="Healthy Recipe One"
        className='absolute bottom-8 right-[0rem] w-[5rem] h-[5rem] rounded overflow-hidden object-cover'
      /> 

      </div>
  );
}

export default AboutPage