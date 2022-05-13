import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthLayout } from "./pages/auth/AuthLayout";
import { Login, Register } from "./pages/auth/index";
import { Home } from "./pages/public/Home";
import { Layout } from "./pages/public/Layout";
import { Profile } from "./pages/public/Profile";
import { Admin } from "./pages/admin/Admin";

export const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");
  const [user, setUser] = useState({})

  const admin = {
    username: "admin",
    password: "admin",
    role: "admin",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin && role === "admin") {
      return navigate("/admin");
    }
    if (loggedin && role === "user") {
      return navigate("/");
    }
    if (!loggedin) {
      return navigate("/login");
    }
  }, [loggedin, role]);

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              admin={admin}
              setRole={setRole}
              users={users}
              setLoggedin={setLoggedin}
              setOneUser={setUser}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              admin={admin}
              users={users}
              setRole={setRole}
              setUsers={setUsers}
              setLoggedin={setLoggedin}
              setOneUser={setUser}
            />
          }
        />

        <Route
          path="/"
          element={<AuthLayout loggedin={loggedin} setLoggedin={setLoggedin} />}
        >
          <Route path="/" element={<Layout setLoggedin={setLoggedin} user={user}/>}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
