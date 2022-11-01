import React from "react";
import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="her mt-6 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className=" rounded-lg h-80 w-96" alt="" />
          <img
            src={parts}
            className=" rounded-lg absolute h-60 w-72 top-1/2 right-16 border-8"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-xl my-5 font-semibold text-orange-600">About us</p>
          <h1 className="text-3xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <div className="text-gray-500">
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected humour, or randomised
              words which don't look even slightly believable.
            </p>
          </div>
          <button className="btn btn-warning my-6">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
