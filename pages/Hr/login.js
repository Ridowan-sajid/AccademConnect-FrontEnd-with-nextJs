import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Layout/header";

export default function Login() {
  const router = useRouter();

  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/hr/login", {
        email: register.email,
        password: register.password,
      });
      if (response.data) {
        window.sessionStorage.setItem("email", register.email);
        console.log(sessionStorage.getItem("email"));
        setRegister({
          email: "",
          password: "",
        });
        console.log("Login successful");

        router.push("/Hr/myProfile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header dashboard="Login"></Header>
      <form
        method="post"
        action=""
        className="container my-5"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
          <br />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
