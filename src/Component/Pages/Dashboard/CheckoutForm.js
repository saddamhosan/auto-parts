import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({part}) => {
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [cartError, setCartError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { _id, price, email, userName } = part;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://pacific-hamlet-76531.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCartError(error?.message ? error?.message : "");
    setSuccess("");
    
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });
    if (intentError) {
      setCartError(intentError?.message);
    } else {
      setCartError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("congrats! your payment is completed");

      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://pacific-hamlet-76531.herokuapp.com/orders/${_id}`, {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/dashboard/myOrder");
        });
    }
  };
 
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-blue-500 mt-6 border-0"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cartError && <p className="text-red-500">{cartError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            your transaction Id:{" "}
            <span className="text-blue-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;