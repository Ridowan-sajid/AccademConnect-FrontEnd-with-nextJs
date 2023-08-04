import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  //const navigate = useNavigate();

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        method="post"
        action=""
        className="container my-5"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={register.name}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={register.phone}
            onChange={handleChange}
          />
          <br />
        </div>

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
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            value={register.gender}
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

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={register.age}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="myfile"
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
