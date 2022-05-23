import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    isLoading,
    error,
    data: orders,
    refetch
  } = useQuery(["orders", email], () =>
    fetch(`https://pacific-hamlet-76531.herokuapp.com/order/${email}`).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1>My Order :{orders?.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th className="text-center">Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={order._id}
                order={order}
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

export default MyOrder;
