import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-12 ">
      <p className="text-xl text-center font-semibold text-orange-600">Service</p>
      <h3 className="font-bold text-center text-3xl">Our Service Area</h3>
      <p className="text-gray-400 mb-8 mt-4 text-center">
        the majority have suffered alteration in some form, by injected humour, <br /> or randomised
        words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3 gap-20">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="text-center mt-8 ">
        <button className="btn btn-outline btn-warning w-60">See more</button>
      </div>
    </div>
  );
};

export default Services;
