import React from 'react';

const BannerItem = ({sliderImg}) => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
        <div className='carousel-img'>
          <img src={sliderImg} className="w-full " />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1  className='text-6xl font-bold text-white'>
              Super Car <br />
              Services <br /> Center
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
         <p className='text-white text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod deleniti blanditiis, dolorum aspernatur dolor fugiat perferendis repellat natus ex.
         </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;