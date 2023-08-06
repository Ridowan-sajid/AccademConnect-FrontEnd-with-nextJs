import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Layout/header";

export default function Register() {
  const router = useRouter();

  const [register, setRegister] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    password: "",
    myfile: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "myfile") {
      setRegister({
        ...register,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setRegister({
        ...register,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/hr/register",
        {
          name: register.name,
          phone: register.phone,
          email: register.email,
          gender: register.gender,
          age: register.age,
          password: register.password,
          myfile: register.myfile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        setRegister({
          name: "",
          phone: "",
          email: "",
          gender: "",
          age: "",
          password: "",
          myfile: null,
        });
        console.log("Form submitted successfully");
        router.push("/Hr/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header dashboard="Registration"></Header>
      <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={register.name}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={register.phone}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={register.gender}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={register.age}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Image</label>
          <input type="file" name="myfile" onChange={handleChange} />
          <br />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
