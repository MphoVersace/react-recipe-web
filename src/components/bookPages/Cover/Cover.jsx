import React from 'react';

const Cover = ({ coverVideo, title }) => {
  return (
    <div className='relative h-full'> 
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={coverVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start p-8'>
        <h1 className='text-fourthColor text-6xl text-gradient font-bold'>{title}</h1>
      </div>
    </div>
  );
};

export default Cover;
