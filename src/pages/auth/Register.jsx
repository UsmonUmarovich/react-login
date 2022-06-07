import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = ({
  admin,
  users,
  setUsers,
  setLoggedin,
  setRole,
  setOneUser,
}) => {
  const [user, setUser] = useState({});

  const changeInput = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.id]: event.target.value.toLowerCase(),
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !user.name ||
      !user.name.trim() ||
      !user.surname ||
      !user.surname.trim() ||
      !user.username ||
      !user.username.trim() ||
      !user.password ||
      !user.password.trim() ||
      !user.confirm ||
      !user.confirm.trim() ||
      user.password !== user.confirm
    )
      return alert("malumotlar to`liq emas");

    if (user.username === admin.username) return alert("bu username band");

    for (let i = 0; i < users.length; i++) {
      if (user.username === users[i].username) return alert("bu username band");
    }

    setUsers([...users, { ...user, role: "user" }]);
    setLoggedin(true);
    setRole("user");
    setOneUser(user);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="max-w-sm w-full p-6 flex flex-col gap-6 bg-base-200 shadow-md rounded-md"
      >
        <h1 className="m-auto" style={{ fontSize: 45, letterSpacing: "3px" }}>
          Registration
        </h1>

        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            onChange={changeInput}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="surname" className="label">
            <span className="label-text">Surname</span>
          </label>
          <input
            id="surname"
            type="text"
            onChange={changeInput}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            id="username"
            type="text"
            onChange={changeInput}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            onChange={changeInput}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label htmlFor="confirm" className="label">
            <span className="label-text">Confirm password</span>
          </label>
          <input
            id="confirm"
            type="password"
            onChange={changeInput}
            className="input input-bordered"
          />
        </div>

        <button className="btn btn-primary w-full">SIGN UP</button>

        <Link className="m-auto btn" style={{background: "#232ce3", borderRadius: "13px"}} to="/login">
          LOGIN
        </Link>
      </form>
    </div>
  );
};
