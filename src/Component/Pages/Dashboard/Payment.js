import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(
  "pk_test_51L1ZiVFCX1LCBdfon87BleiZiBVWvz9mAoD9UM3gvs0cGNPgxJVjvtI9fWuFI2LKsHkMqh8dm5l9YOYJWktOjH7t00LfpzT6U6"
);

const Payment = () => {
    const { id } = useParams();
    const { data: part, isLoading } = useQuery(["payment", id], () =>
      fetch(`https://pacific-hamlet-76531.herokuapp.com/orders/${id}`, {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading />;
    }
    const {userName,productName,quantity,price}=part
    return (
      <div className=" w-3/5 mx-auto">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="font-bold text-blue-500">Hello,{userName}</p>
            <h2 class="card-title">Please pay for {productName}</h2>
            <p>
              Your Order {quantity} pieces, par parts price {price}
            </p>
            <p>Please Pay : ${quantity * price}</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl my-12">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm part={part} />
            </Elements>
          </div>
        </div>
      </div>
    );};

export default Payment;