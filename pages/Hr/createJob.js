import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Layout/header";

export default function CreateJob() {
  const router = useRouter();

  const [register, setRegister] = useState({
    title: "",
    details: "",
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
      const response = await axios.post("http://localhost:3000/hr/job", {
        title: register.title,
        details: register.details,
      });
      if (response.data) {
        setRegister({
          title: "",
          details: "",
        });
        console.log("Form submitted successfully");
        router.push("/Hr/readJobPost");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header dashboard="All Job Post"></Header>
      <form
        method="post"
        action=""
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={register.title}
          onChange={handleChange}
        />
        <br />

        <label>Details</label>
        <input
          type="text"
          name="details"
          value={register.details}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
