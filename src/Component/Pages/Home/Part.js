import React from 'react';

const Part = ({part}) => {
    const { name, img, description, minOrder, available,price } = part;
    return (
      <div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>Name:{name}</p>
          <p>{description}</p>
          <p>Minimum Order:{minOrder}</p>
          <p>Available Quantity:{available}</p>
          <p>Price:{price}</p>
        </div>
      </div>
    );
};

export default Part;