import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ServiceCard = ({service}) => {
    const {img,price,title}=service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn "><AiOutlineArrowRight></AiOutlineArrowRight></button>
                 </div>
               
            </div>
</div>
        </div>
    );
};

export default ServiceCard;

