import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title,price} =useLoaderData();
    const {user}= useContext(AuthContext)

    const handleOrderSubmit=(event)=>
    {
        event.preventDefault();
        const form = event.target
        const name=`${form.FirstName.value} ${form.LastName.value}`
        const phone=form.phone.value
        const email=user?.email || 'Unregistered'
        const message=form.message.value

        const order={
            service:_id,
            serviceName:title,
            price,
            customerName:name,
            email,
            phone,
            message
        }
    }
    return (
        <div>
            <form onSubmit={handleOrderSubmit}>
                <h1 className="text-4xl">{title}</h1>
                <h3 className="text-3xl">Price : ${price}</h3>
                <div className='grid grid-co;s-1 lg:grid-cols-2 gap-4'>
                <input type="text" placeholder="FirstName" className="input input-bordered input-primary w-full " />
            <input type="text" placeholder="Last Name" name='LastName ' className="input input-bordered input-primary w-full " />
            <input type="text" placeholder=" Your Phone" name='phone' className="input input-bordered input-primary w-full " />
            <input type="text" placeholder="Your email"name='email' defaultValue={user?.email} className="input input-bordered input-primary w-full "readOnly />
                </div>

                <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Message"></textarea>

                <input className='btn bg-orange-600' type="submit" value="Place order" />
            </form>
        </div>
    );
};

export default Checkout;