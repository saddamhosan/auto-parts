import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';

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
    } = useQuery(["part",id], () =>
      fetch(`http://localhost:4000/part/${id}`).then((res) => res.json())
    );
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    const { name, img, description, minOrder, available, price } = part;

    const handleQuantity = (e) => {
      setOrderError('')
      const quantity = e.target.value;
      console.log(quantity);
      if (quantity < minOrder) {
        return setOrderError(`please order minimum ${minOrder} pieces.`);
      }
      if (quantity > available) {
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
        quantity,
        number,
      };
      console.log(order);
      fetch("http://localhost:4000/order", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset()
            navigate("/dashboard/myOrder");
          }
        });


    }
    return (
      <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
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

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <form onSubmit={handleOrder}>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      value={user?.displayName}
                      name="name"
                      readOnly
                      disabled
                      class="input input-bordered"
                    />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      name="email"
                      readOnly
                      disabled
                      class="input input-bordered"
                    />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Address</span>
                    </label>
                    <textarea name="address" class="input input-bordered" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Order Quantity</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      class="input input-bordered"
                      onChange={handleQuantity}
                    />
                  </div>
                  {orderError && <p className="text-red-600">{orderError}</p>}

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      name="number"
                      class="input input-bordered"
                    />
                  </div>

                  <div class="form-control mt-6">
                    <button disabled={orderError} class="btn btn-primary">Order Now</button>
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