import React from 'react';
import Swal from 'sweetalert2';

const User = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${email}`, {
      method: "PUT",
      headers: {
          'content-type':'application/json',
        // authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Not successfully made admin!",
            });
        }
        return res.json();
      })
      .then((data) => {
        if (data.matchedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "successfully made admin",
              showConfirmButton: false,
              timer: 1500,
            });
          refetch();
        }
      });
  };

  const handleDeleteAdmin=()=>{
      fetch(`http://localhost:4000/user/${email}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then(res=>res.json()).then(data=>{
          if(data.deletedCount){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "successfully delete admin",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
          }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={handleMakeAdmin}
            className="btn btn-xs bg-blue-500 border-0"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={handleDeleteAdmin}
          className="btn btn-xs bg-red-500 border-0"
        >
          Delete Admin
        </button>
      </td>
    </tr>
  );
};

export default User;