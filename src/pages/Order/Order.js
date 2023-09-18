import React, { useEffect, useState } from 'react';

const Order = ({order,handleDeleteBtn,handleStatusUpdate}) => {
    const {_id,serviceName,price,customer,phone,email,service,status}=order
    const [orderService,setOrderservice]= useState({})

    useEffect(()=>
    {
      fetch(`http://localhost:5000/services/${service}`)
      .then(res=>res.json())
      .then(data=>setOrderservice(data))
    },[service])

  

    return (
             
      <tr>
      <th>
        <label>
        <button onClick={()=>handleDeleteBtn(_id)} className="btn btn-ghost btn-xs">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {
                orderService?.img && <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <div>
        <br />
            <div className="font-bold">{serviceName}</div> 
          </div>
     
      <td>
        <br/>
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>

      <th>
        <button onClick={()=>handleStatusUpdate(_id)} className='btn btn-ghost btn-xs'>{status?status:'pending'}</button>
      </th>
  
    </tr>
    );
};

export default Order;