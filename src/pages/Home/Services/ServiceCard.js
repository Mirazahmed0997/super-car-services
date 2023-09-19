import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const {_id,img,price,title}=service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-64' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn ">Appoint Now<AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </Link>
                 </div>
               
            </div>
</div>
        </div>
    );
};

export default ServiceCard;

