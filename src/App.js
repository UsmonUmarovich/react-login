import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthLayout } from "./pages/auth/AuthLayout";
import { Login, Register } from "./pages/auth/index";
import { Home } from "./pages/public/Home";
import { Layout } from "./pages/public/Layout";
import { Profile } from "./pages/public/Profile";

export const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [users, setUsers] = useState([])

  const admin = {
    username: "admin",
    password: "admin"
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin) {
      return navigate("/");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login admin={admin} users={users} />} />
        <Route path="/register" element={<Register admin={admin} users={users} setUsers={setUsers}/>} />

        <Route
          path="/"
          element={<AuthLayout loggedin={loggedin} setLoggedin={setLoggedin} />}
        >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
