import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signInUser, googleSignIn, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();

        const currentUser = {
          email: user?.email,
        };
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem("Token", data.token)
          });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.name, error.message);
      });
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate(from, { replace: true });
  //   }
  // }, [from, navigate, user]);

  return (
    <div className="hero ">
      <div className="hero-content flex justify-around gap-28 h-screen lg:flex-row">
        <div className="">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="card-body">
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
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-sm w-60 mx-auto btn-primary">Login</button>
            </div>
            <div>
              <div className="divider text-xs">OR</div>
              <div className="flex items-center justify-center">
                <FaGoogle onClick={handleGoogleSignIn} className="text-2xl"></FaGoogle>
                <FaGithub className="text-2xl ml-4"></FaGithub>
              </div>
            </div>
          </form>
          <div>
            <p className="text-center mb-6">
              new to Genius car ?{" "}
              <Link className="hover:underline font-bold text-orange-500" to="/register">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
