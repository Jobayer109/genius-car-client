import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const checkout = useLoaderData();
  const { title, price, _id } = checkout;

  
  const navigate = useNavigate()
  const handleCheckoutForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || form.email.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert('Order placed successfully')
          form.reset()
          navigate("/")
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3 className="text-xl font-bold">
        Service name: <span className="text-orange-500">{title}</span>
      </h3>
      <p className="text-lg font-bold">
        Price: <span className="text-orange-500">$ {price}</span>
      </p>

      <div className="my-12 bg-gray-200 py-10 rounded-lg">
        <form onSubmit={handleCheckoutForm}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 mb-6 w-[90%] mx-auto">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="input input-bordered input-primary w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered input-primary w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              defaultValue={user?.email}
              readOnly
              required
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="w-[90%] mx-auto">
            <textarea
              className="textarea textarea-secondary h-24 w-full "
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="text-center mt-8">
            <button className="btn btn-outline w-60">Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
