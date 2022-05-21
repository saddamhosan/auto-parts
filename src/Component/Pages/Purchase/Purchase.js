import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id}=useParams()

    const {
      isLoading,
      error,
      data: part,
    } = useQuery(["part",id], () =>
      fetch(`http://localhost:4000/part/${id}`).then((res) => res.json())
    );
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    const { name, img, description, minOrder, available, price } = part;
    return (
      <div>
        <div class="hero min-h-[80vh]">
          <div class="hero-content flex-col lg:flex-row">
            <div className="md:w-1/2">
              <img src={img} alt="" class="" />
            </div>
            <div className="md:w-1/2 text-center px-6" >
              <h1 class="text-3xl font-bold  mb-2">{name}</h1>
              <p>{description}</p>
              <p>Minimum Order: {minOrder} pieces</p>
              <p>Available Quantity: {available} pieces</p>
              <p>Price:{price}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Purchase;