import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="max-w-sm w-full p-6 flex flex-col gap-6 bg-base-200 shadow-md rounded-md">
        <h1 className="text-xl">Registration</h1>

        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input id="name" type="text" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label htmlFor="surname" className="label">
            <span className="label-text">Surname</span>
          </label>
          <input id="surname" type="text" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input id="username" type="text" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input id="password" type="password" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label htmlFor="confirm" className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input id="confirm" type="password" className="input input-bordered" />
        </div>

        <button className="btn btn-primary w-full">SIGN UP</button>

        <Link className="link" to="/login">LOGIN</Link>
      </form>
    </div>
  );
};
