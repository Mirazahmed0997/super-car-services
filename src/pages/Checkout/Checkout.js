import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title,price,_id} =useLoaderData();
    const {user}= useContext(AuthContext)

   const handleOrderSubmit=event=>
   {
    event.preventDefault()
    const form=event.target;
    const FirstName=form.FirstName.value
    const lastName=form.LastName.value
    const name= `${FirstName} ${lastName}`;
    const email=user?.email||'unregistered'
    const phone=form.phone.value
    const message=form.message.value
   

        const order={
            service:_id,
            serviceName:title,
            price,
            customer:name,
            email,
            phone,
            message
        }

        if(phone.length<11)
        {
            alert('invalid phone number')
        }

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();
            }
        })
        .catch(err=>console.log(err))
   }
    return (
        <div>
            <form onSubmit={handleOrderSubmit}>
                <h1 className="text-4xl">{title}</h1>
                <h3 className="text-3xl">Price : ${price}</h3>
                <div className='grid grid-co;s-1 lg:grid-cols-2 gap-4'>
                <input type="text" placeholder="FirstName"name='FirstName' className="input input-bordered input-primary w-full "required />
            <input type="text" placeholder="Last Name" name='LastName' className="input input-bordered input-primary w-full "required />
            <input type="text" placeholder=" Your Phone" name='phone' className="input input-bordered input-primary w-full  "required />
            <input type="text" placeholder="Your email" name='email' defaultValue={user?.email} className="input input-bordered input-primary w-full "readOnly />
                </div>

                <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Message" name='message'></textarea>

                <input className='btn bg-orange-600' type="submit" value="Place order" />
            </form>
        </div>
    );
};

export default Checkout;