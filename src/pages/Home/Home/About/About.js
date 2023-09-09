import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 relative'>
          <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts}alt='' className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <p className='text-2xl text-orange-600 font-bold'>About us</p>
            <h1 className="my-5 text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dicta ex laborum ipsa beatae quia tenetur. Inventore reprehenderit possimus sunt dignissimos molestias architecto eaque dolores eligendi aliquid alias quibusdam perspiciatis impedit, corrupti eum deleniti saepe error rem voluptatem, temporibus, nulla qui ab facilis adipisci. Commodi doloribus iste harum illum! Nihil.</p>
            <button className="btn btn-primary">Get more info</button>
          </div>
        </div>
      </div>
    );
};

export default About;