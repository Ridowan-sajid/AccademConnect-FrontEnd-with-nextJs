import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`http://localhost:3000/admin/profile/`);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
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
        </div>
      )}
    </div>
  );
}
