import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order,index}) => {
    const { img, productName, quantity } = order;
    return (
      <tr>
        <th>{index + 1}</th>
        <td>
          <div class="avatar">
            <div class="w-16 rounded">
              <img src={img} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        </td>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>
          <Link to="" className="btn btn-xs bg-cyan-500 border-0">
            Pay
          </Link>
        </td>
        <td>
          <button className="btn btn-xs bg-red-500 border-0">Delete</button>
        </td>
      </tr>
    );
};

export default OrderRow;