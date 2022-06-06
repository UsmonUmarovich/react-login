import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

export const Login = ({ admin, users, setLoggedin, setRole, setOneUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.trim() || !password.trim()) return alert("message");

    if (name === admin.username && password === admin.password) {
      setLoggedin(true);
      setRole("admin");
      setOneUser({ name: "Admin", surname: "Adminov" });
      return navigate("/admin");
    }

    for (let i = 0; i < users.length; i++) {
      if (name === users[i].username && password === users[i].password) {
        setLoggedin(true);
        setRole("user");
        setOneUser(users[i]);
        return navigate("/");
      }
    }
    return alert("siz royhatda yoqsiz");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={submitHandler}
        className="max-w-sm w-full rounded-md shadow-md p-6 flex flex-col gap-6 bg-base-200"
      >
        <h1 className="text-xl">Login</h1>

        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="username"
            type="text"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            type="password"
            className="input input-bordered"
          />
        </div>

        <button className="w-full btn btn-accent">
          <AiOutlineLogin className="text-xl mr-2" /> LOGIN
        </button>

        <Link className="link" to="/register">
          Sign up
        </Link>
      </form>
    </div>
  );
};
