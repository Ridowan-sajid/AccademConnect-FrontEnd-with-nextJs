import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function CreateHr() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [myfile, setMyfile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/student/Register",
        {
          name,
          phone,
          email,
          gender,
          age,
          password,
          myfile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        console.log("Form submitted successfully");
        router.push("/Student/login");
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
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label>Age</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label>Image</label>
        <input
          type="file"
          name="myfile"
          onChange={(e) => setMyfile(e.target.files[0])}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
