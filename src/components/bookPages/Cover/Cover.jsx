import React from 'react';

const Cover = ({ coverVideo, title }) => {
  return (
    <div className='relative h-full'> 
      <h1 className='text-6xl md:text-6xl font-merriweather text-secondary text-stroke text-gradient font-bold absolute top-0 left-0 right-0 text-center p-4'>{title}</h1>
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={coverVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start p-8 page-shadow'>
        
      </div>
    </div>
  );
};

export default Cover;
