import Header from "../Layout/header";
import useFetch from "../lib/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ReadPost() {
  const router = useRouter();

  const { data, loading, error } = useFetch(
    "http://localhost:3000/student/allPost"
  );

  const handleClick = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:3000/student/post/${id}`
      );

      console.log("Deleted");
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header dashboard="All Job Post"></Header>
      <hr />
      {data &&
        data.map((d) => (
          <div key={d.id}>
            <p>Title: {d.title}</p>
            <p>Details: {d.details}</p>

            <button type="submit" onClick={() => handleClick(d.id)}>
              Delete
            </button>
            <hr />
          </div>
        ))}
    </div>
  );
}
