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
        <p className='text-6xl md:text-8xl ml-[7rem] font-devonshire text-secondary/100 text-stroke text-gradient'>About Us</p>
    </div>

    {/* <div className='absolute bottom-2 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'> */}
    <img
        src={about1}
        alt="Healthy Recipe One"
        className='absolute bottom-2 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg w-52 h-52 object-cover'
      />      {/* </div> */}

      {/* <div className='absolute bottom-2 right-[14.5rem] max-w-[11rem] rounded overflow-hidden shadow-lg'> */}
          <img src={about2} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
        {/* </div> */}

        {/* <div className='absolute top-5 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'> */}
          <img src={about3} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
        {/* </div> */}

        <img src={about4} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
        <img src={about5} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />
        <img src={about6} alt="Healthy Recipe Two" className='w-52 h-52 object-cover' />

      </div>
  );
}

export default AboutPage