import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      fetch("https://pacific-hamlet-76531.herokuapp.com/orders",{
      method: "get",
      headers: {
         authorization: `Bearer ${localStorage.getItem("Token")}`,
         },
    })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [orders]);

    const handleShippedOrder=(id)=>{
        fetch(`https://pacific-hamlet-76531.herokuapp.com/order/${id}`, {
          method: "put",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Payment Confirm Order is shipped",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    }
    return (
      <div>
        <h1 className='text-3xl font-bold text-center text-blue-500'>All Orders</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Order Quantity</th>
                <th>Total Price</th>
                <th>Confirm Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.productName}</td>
                  <td>{order.quantity}</td>
                  <td>{order.quantity * order.price}</td>
                  <td>
                    {order.shipped ?<p className='text-xl font-bold text-center text-cyan-500'>Shipped</p>:<button
                      onClick={()=>handleShippedOrder(order._id)}
                      disabled={!order.paid}
                      className="btn btn-xs bg-blue-600 border-0"
                    >
                      Payment Confirm
                    </button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllOrders;