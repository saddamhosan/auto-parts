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
     fetch("http://localhost:4000/review", {
       method: "post",
       headers: { "content-type": "application/json" },
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
    <div className="w-1/3 mx-auto">
      <h1 className="text-center text-2xl font-bold text-blue-500">
        Add a Review
      </h1>
      <form onSubmit={handleAddReview}>
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
            <span class="label-text">Description</span>
          </label>
          <textarea name="description" class="input input-bordered" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Ratting</span>
          </label>
          <input type="number" name="ratting" class="input input-bordered" />
        </div>
        {rattingError && <p className="text-red-500">{rattingError}</p>}

        <div class="form-control mt-6">
          <button class="btn btn-primary">Add Review</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;