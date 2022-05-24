import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "./../../../firebase.init";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const email = user?.email;
  console.log(email);
  useEffect(() => {
    fetch(`https://pacific-hamlet-76531.herokuapp.com/user/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email,profile]);
 

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const linkedIn = e.target.linkedIn.value;
    const profile = {
      name,
      email,
      education,
      location,
      phone,
      linkedIn,
    };
    
    fetch(`https://pacific-hamlet-76531.herokuapp.com/user/${email}`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Update profile successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  const {education,location,phone,linkedIn}=profile
  return (
    <div className="font-serif flex lg:flex-row-reverse justify-center items-center bg-slate-50">
      <div className="w-3/5">
        <h1 class="text-3xl font-bold">Name: {name}</h1>
        <p>Email: {email}</p>
        <p>Education: {education || "Not found"}</p>
        <p>Location: {location || "Not found"}</p>
        <p>LinkedIn:{linkedIn || "Not found"}</p>
        <p>Phone: {phone || "Not found"}</p>
      </div>

      <div class="w-2/5">
        <div class="card-body">
          <h1 className="text-2xl font-bold text-center text-blue-500">
            Update your profile
          </h1>
          <form onSubmit={handleUpdateProfile}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
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
                name="email"
                value={email}
                readOnly
                disabled
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input
                type="text"
                name="education"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                required
                name="location"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">LinkedIn</span>
              </label>
              <input
                type="text"
                required
                name="linkedIn"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="text"
                required
                name="phone"
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Update profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
