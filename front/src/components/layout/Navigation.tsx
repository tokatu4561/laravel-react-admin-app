import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../types/user";

export const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/user", {
        withCredentials: true,
      });

      const user = response.data.data;

      setUser(user);
    };

    getUser();
  }, []);

  const logout = async () => {
    await axios.post("logout", {});
  };

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link to="/" className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        Admin
      </Link>

      <ul className="my-2 my-md-0 mr-md-3">
        {user ? (
          <>
            <Link to="/profile" className="p-2 text-white text-decoration-none">
              {user!.first_name}
            </Link>
            <Link
              to="/login"
              className="p-2 text-white text-decoration-none"
              onClick={logout}
            >
              Sign out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="p-2 text-white text-decoration-none">
              Sign In
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
