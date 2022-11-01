import React from "react";
import { FaArrowRight } from "react-icons/fa";


const ServicesCard = ({ service }) => {
  const { price, title, img } = service;
  return (
    <div className="card shadow-xl">
      <figure>
        <img className="h-44 w-60 rounded-md" src={img} alt="Shoes" />
      </figure>
      <div className="card-body ml-3">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
        <p className="text-orange-700 font-bold">
          Price $<span>{price}</span>
        </p>
          <FaArrowRight className="text-orange-600"></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
