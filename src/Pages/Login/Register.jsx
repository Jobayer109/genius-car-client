import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
    const { createUser, profile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
      
      createUser(email, password)
          .then(result =>
          {
              console.log(result.user)
              profile(name, photoUrl)
              form.reset()
          })
      .catch(error => {console.log(error.message);})
      
  };

  return (
    <div className="hero ">
      <div className="hero-content flex justify-around gap-28 h-screen lg:flex-row">
        <div className="">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center font-bold">Sign up</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your photo url</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-sm w-60 mx-auto btn-primary">Sign up</button>
            </div>
          </form>

          <div>
            <p className="text-center mb-6">
              already have an account ?{" "}
              <Link className="hover:underline font-bold text-orange-500" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
