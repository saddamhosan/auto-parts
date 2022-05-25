import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://pacific-hamlet-76531.herokuapp.com/parts", {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleProductDelete=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://pacific-hamlet-76531.herokuapp.com/part/${id}`;
        fetch(url, {
          method: "delete",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Product has been deleted.", "success");
            }
          });
      }
    });
  }
  
  return (
    <div className="m-6">
      <h1 className="text-center text-3xl font-bold text-blue-500">Total product:{products.length}</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div className="shadow-xl rounded-2xl">
            <div>
              <img src={product.img} alt="" />
            </div>
            <div className="p-4">
              <p>Name:{product.name}</p>
              <p>{product.description}</p>
              <p>Minimum Order: {product.minOrder} pieces</p>
              <p>Available Quantity: {product.available} pieces</p>
              <p>Price:{product.price}</p>
              <div className="flex justify-center">
                <button onClick={()=>handleProductDelete(product._id)} className="btn btn-md bg-red-500 border-0 mt-4">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
