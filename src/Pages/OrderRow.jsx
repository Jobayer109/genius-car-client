import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
  const { _id, serviceName, customer, price, email, service, status } = order;
  const [orderedService, setOrderedService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderedService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <FaTrashAlt
          onClick={() => handleDelete(_id)}
          className="text-red-500 hover:text-red-700 text-2xl"
        ></FaTrashAlt>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-lg w-24 h-24">
              {orderedService?.img && <img src={orderedService?.img} alt="Service avatar" />}
            </div>
          </div>
          <div>
            <div className="font-bold badge-warning badge-lg rounded">{serviceName}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>
      <td className="font-bold text-md">
        {customer}
        <br />
        <span className="text-sm font-thin">{email}</span>
      </td>
      <td className="text-orange-600 font-semibold">$ {price}</td>
      <th>
        <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-md">
          {status ? (
            <div className="bg-green-500 p-2 rounded-md text-white">{status}</div>
          ) : (
            <div className="bg-red-600 p-2 rounded-md text-white">{"Pending"}</div>
          )}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
