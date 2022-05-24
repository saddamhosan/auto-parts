import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const OrderRow = ({ order, index, refetch }) => {
  const { _id, img, productName, quantity, paid,shipped, transactionId } = order;

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:4000/order/${id}`;
        console.log(url);
        fetch(url, {
          method: "delete",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
              refetch()
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td className="text-center">
        {!paid && (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-sm text-xl bg-cyan-500 border-0"
          >
            Pay
          </Link>
        )}
        {paid && (
          <div className=" text-blue-500 font-bold text-xl ">
            <p className="text-center">{shipped?'Shipped': 'Pending'}</p>
            <p className="text-center text-cyan-500">Transaction Id:</p>
            <p className="text-cyan-500">{transactionId}</p>
          </div>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDeleteOrder(_id)}
          className="btn btn-xs bg-red-500 border-0"
          disabled={paid}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;