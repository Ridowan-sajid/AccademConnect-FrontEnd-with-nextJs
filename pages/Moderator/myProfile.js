import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/moderator/myprofile/`
        );
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      {data && (
        <div key={data.id}>
          <h4>Name: {data.name}</h4>
          <p>Age: {data.age}</p>
          <p>Phone: {data.phone}</p>
          <p>Email: {data.email}</p>
          <p>Gender: {data.gender}</p>
          <p>Education: {data.education}</p>
          <p>Status: {data.status}</p>
        </div>
      )}
    </div>
  );
}
