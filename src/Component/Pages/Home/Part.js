import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {_id, name, img, description, minOrder, available,price } = part;
    return (
      <div className="shadow-xl rounded-2xl">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="p-4">
          <p>Name:{name}</p>
          <p>{description}</p>
          <p>Minimum Order: {minOrder} pieces</p>
          <p>Available Quantity: {available} pieces</p>
          <p>Price:{price}</p>
          <div className="flex justify-center my-4">
            <Link to={`purchase/${_id}`} className="btn btn-outline btn-primary">
              Purchase
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Part;