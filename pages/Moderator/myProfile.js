import React, { useEffect, useState } from "react";
import useFetch from "../lib/useFetch";
import axios from "axios";

export default function MyProfile() {
  const [accepted, setAccepted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (window.sessionStorage.getItem("email")) {
      setAccepted(true);
    }
    const getData = async (id) => {
      try {
        const data = await axios.get(
          `http://localhost:3000/moderator/myprofile/`
        );
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {accepted ? (
        data && (
          <div key={data.id}>
            <h4>Name: {data.name}</h4>
            <p>Age: {data.age}</p>
            <p>Phone: {data.phone}</p>
            <p>Email: {data.email}</p>
            <p>Gender: {data.gender}</p>
            <p>Education: {data.education}</p>
            <p>Status: {data.status}</p>
          </div>
        )
      ) : (
        <h3>You are not eligible</h3>
      )}
    </div>
  );
}
