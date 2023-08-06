import React, { useEffect, useState } from "react";
import Header from "../Layout/header";
import useFetch from "../lib/useFetch";

export default function MyProfile() {
  const [accepted, setAccepted] = useState(false);

  const { data, loading, error } = useFetch(
    "http://localhost:3000/hr/myprofile"
  );

  useEffect(() => {
    if (window.sessionStorage.getItem("email")) {
      setAccepted(true);
    }
  }, []);

  return (
    <div>
      <Header dashboard="My Profile" />

      {accepted ? (
        data && (
          <div key={data.id}>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Phone: {data.phone}</p>
            <p>Email: {data.email}</p>
            <p>Gender: {data.gender}</p>
            <p>Last update: {data.updatedDate}</p>
          </div>
        )
      ) : (
        <h3>You are not eligible</h3>
      )}
    </div>
  );
}
