import React from "react";
import { useQuery } from "react-query";
import User from "./User";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:4000/users", {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <p className="text-center text-3xl text-blue-500 font-bold">Total user : {users.length}</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>User Email</th>
              <th>Add Admin</th>
              <th>Delete Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <User
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
