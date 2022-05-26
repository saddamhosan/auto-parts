import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from 'react-helmet-async';
import Swal from "sweetalert2";
import auth from "./../../../firebase.init";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const [user] = useAuthState(auth);
  const name = user?.displayName;
  const email = user?.email;
  useEffect(() => {
    fetch(`https://pacific-hamlet-76531.herokuapp.com/user/${email}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
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
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
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
    <div className="font-serif lg:flex lg:flex-row-reverse justify-center items-center bg-slate-50 my-10">
      <Helmet>
        <title>My Profile - AutoParts</title>
      </Helmet>
      <div className="lg:w-3/5 text-center">
        <h1 className="text-3xl font-bold">Name: {name}</h1>
        <p>Email: {email}</p>
        <p>Education: {education || "Not found"}</p>
        <p>Location: {location || "Not found"}</p>
        <p>LinkedIn:{linkedIn || "Not found"}</p>
        <p>Phone: {phone || "Not found"}</p>
      </div>

      <div className="lg:w-2/5">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center text-blue-500">
            Update your profile
          </h1>
          <form onSubmit={handleUpdateProfile}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
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
                name="email"
                value={email}
                readOnly
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                name="education"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                required
                name="location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn</span>
              </label>
              <input
                type="text"
                required
                name="linkedIn"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                required
                name="phone"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
