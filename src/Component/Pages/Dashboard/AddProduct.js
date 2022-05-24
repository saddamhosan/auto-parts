import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const navigate=useNavigate()
    const handleAddProduct=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const img=e.target.img.value
        const description=e.target.description.value
        const minOrder=e.target.minOrder.value
        const available=e.target.available.value
        const price=e.target.price.value
        const product = {
          name,
          img,
          description,
          minOrder,
          available,
          price
        };
        console.log(product);
        fetch("https://pacific-hamlet-76531.herokuapp.com/part", {
          method: "post",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
          body: JSON.stringify(product),
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
              navigate("/dashboard/manageProduct");
            }
          });
    }
    return (
      <div>
        <h1 className="text-center text-3xl font-bold text-blue-500">
          Add A New product
        </h1>
        <div class="card w-1/2 mx-auto shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleAddProduct}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" name="name" class="input input-bordered" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Image URL</span>
                </label>
                <input type="text" name="img" class="input input-bordered" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea name="description" class="input input-bordered" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Minimum Order</span>
                </label>
                <input
                  type="number"
                  name="minOrder"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">available Quantity</span>
                </label>
                <input
                  type="number"
                  name="available"
                  class="input input-bordered"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  class="input input-bordered"
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;