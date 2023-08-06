import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async (id) => {
      try {
        const data = await axios.get(
          `http://localhost:3000/student/myprofile/`
        );
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data && (
        <div key={data.id}>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Phone: {data.phone}</p>
          <p>Email: {data.email}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
    </>
  );
}
