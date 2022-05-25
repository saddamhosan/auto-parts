import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [rattingError, setRattingError] = useState("");
  const handleAddReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const ratting = e.target.ratting.value;
    if (ratting < 0 || ratting > 5) {
      return setRattingError("Retting should be between 0 to 5 ");
    }
    setRattingError("");
    const review = {
      name,
      description,
      ratting,
    };
     fetch("https://pacific-hamlet-76531.herokuapp.com/review", {
       method: "post",
       headers: {
         "content-type": "application/json",
         authorization: `Bearer ${localStorage.getItem("Token")}`,
       },
       body: JSON.stringify(review),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.insertedId) {
           Swal.fire({
             position: "top-center",
             icon: "success",
             title: "Thank you for your review",
             showConfirmButton: false,
             timer: 1500,
           });
           e.target.reset();
         }
       });

  };
  return (
    <div className=" w-10/12 md:w-1/3 mx-auto">
      <h1 className="text-center text-2xl font-bold text-blue-500">
        Add a Review
      </h1>
      <form onSubmit={handleAddReview}>
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
            <span className="label-text">Description</span>
          </label>
          <textarea name="description" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratting</span>
          </label>
          <input type="number" name="ratting" className="input input-bordered" />
        </div>
        {rattingError && <p className="text-red-500">{rattingError}</p>}

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Review</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
