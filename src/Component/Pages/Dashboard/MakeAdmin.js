import React from "react";
import { Helmet } from 'react-helmet-async';
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import User from "./User";

const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("https://pacific-hamlet-76531.herokuapp.com/users", {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loading/>;
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Helmet>
        <title>Make Admin - AutoParts</title>
      </Helmet>
      <p className="text-center text-3xl text-blue-500 font-bold">
        Total user : {users.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
