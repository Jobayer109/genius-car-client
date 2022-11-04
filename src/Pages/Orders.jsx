import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Service deleted successfully");
          const remaining = orders.filter((odr) => odr._id !== id);
          setOrders(remaining);
        }
      });
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const pending = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          const newOrders = [approving, ...pending];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="my-12">
      <h3 className="text-3xl font-extrabold shadow-lg my-8 font-mono text-center">
        You have <span className="text-orange-600 text-4xl">{orders.length}</span> orders
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Services</th>
              <th>Customer</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
