import React from 'react'

const Cover = ({ coverImg, title}) => {
    const coverImgStyle = {
        backgroundImage: `url(${coverImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // minHeight: "100vh",
        width: "100%",
      };

  return (
    <div className='h-full' style={coverImgStyle} > 
        <div className='h-full flex justify-center items-start p-8'>
            <h1 className='text-fourthColor text-6xl text-gradient font-bold'>{title}</h1>
        </div>
    </div>
  )
}

export default Cover