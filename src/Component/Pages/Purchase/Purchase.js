import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Purchase = () => {
  const navigate=useNavigate()
  const [orderError, setOrderError]=useState('')
  const [quantity,setQuantity]=useState(0)
    const {id}=useParams()
    const [user] = useAuthState(auth);

    const {
      isLoading,
      error,
      data: part,
    } = useQuery(["part", id], () =>
      fetch(`https://pacific-hamlet-76531.herokuapp.com/part/${id}`, {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) return <Loading/>;
    if (error) return "An error has occurred: " + error.message;

    const { name, img, description, minOrder, available, price } = part;

    const handleQuantity = (e) => {
      setOrderError('')
      const quantity = e.target.value;
      console.log(quantity);
      if (quantity < +minOrder) {
        return setOrderError(`please order minimum ${minOrder} pieces.`);
      }
      if (quantity > +available) {
        return setOrderError(`please order maximum ${available} pieces.`);
      }
      setQuantity(quantity)
    };
    

    const handleOrder=(e)=>{
      e.preventDefault()
      setOrderError('')
      const userName=e.target.name.value
      const email=e.target.email.value
      const address=e.target.address.value
      const number=e.target.number.value
      const productName=name
      
      
      const order = {
        userName,
        email,
        address,
        productName,
        img,
        price,
        quantity,
        number,
      };
      fetch("https://pacific-hamlet-76531.herokuapp.com/order", {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
            navigate("/dashboard/myOrder");
          }
        });


    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="shadow-xl rounded-2xl">
              <div className="flex justify-center">
                <img className="max-h-[300px]" src={img} alt="" />
              </div>
              <div className="p-4">
                <p>Name:{name}</p>
                <p>{description}</p>
                <p>Minimum Order: {minOrder} pieces</p>
                <p>Available Quantity: {available} pieces</p>
                <p>Price:{price}</p>
              </div>
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleOrder}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      value={user?.displayName}
                      name="name"
                      readOnly
                      disabled
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      name="email"
                      readOnly
                      disabled
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      name="address"
                      required
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Order Quantity</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      required
                      className="input input-bordered"
                      onChange={handleQuantity}
                    />
                  </div>
                  {orderError && <p className="text-red-600">{orderError}</p>}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      name="number"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button disabled={orderError} className="btn btn-primary">
                      Order Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Purchase;