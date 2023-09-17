import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Order from '../Order/Order';

const Orders = () => {
    const {user}=useContext(AuthContext)
    const [orders,setOrders]=useState([])
    // console.log(user)

    useEffect(()=>
    {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))

    },[user?.email])

    const handleDeleteBtn=id=>
    {
        const proceed= window.confirm('Are you sure?')
        if(proceed)
        {
          fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount ===1)
            {
              const remaining= orders.filter(odr=>odr._id!==id)
              setOrders(remaining)
              alert('Successfully deleted')

            }
          })
        }
    }

    const handleStatusUpdate=id=>
    {
       fetch(`http://localhost:5000/orders/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'Approved'})
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.modifiedCount>0)
        {
          const remaining=orders.filter(odr=>odr._id!==id)
          const updatind=orders.find(odr=>odr._id==id);
          updatind.status='Approved'
          const newOrders=[updatind,...remaining]
          setOrders(newOrders)
        }
        console.log(data)})
    }
    return (
        <div>
            <h2>{orders.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
              orders.map(order=><Order
              key={order._id} 
              handleDeleteBtn={handleDeleteBtn} 
              order={order}
              handleStatusUpdate={handleStatusUpdate}>

              </Order>)
            }
    </tbody>
    
    
  </table>
            </div>
        </div>
    );
};

export default Orders;






