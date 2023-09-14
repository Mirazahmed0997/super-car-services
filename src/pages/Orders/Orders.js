import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Order from '../Order/Order';

const Orders = () => {
    const {user}=useContext(AuthContext)
    console.log(user.email)
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
              alert('Successfully deleted')
              const remaining= orders.filter(odr=>odr._id!==id)
              setOrders(remaining)
            }
          })
        }
    }
    return (
        <div>
            <h2>{orders.length} </h2>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
              orders.map(order=><Order key={order._id} handleDeleteBtn={handleDeleteBtn} order={order}>

              </Order>)
            }
    </tbody>
    
    
  </table>
            </div>
        </div>
    );
};

export default Orders;






