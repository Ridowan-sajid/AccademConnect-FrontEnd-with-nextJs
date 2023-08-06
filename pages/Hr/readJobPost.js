import Header from "../Layout/header";
import useFetch from "../lib/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ReadJobPost() {
  const [accepted, setAccepted] = useState(false);

  const router = useRouter();

  const { data, loading, error } = useFetch("http://localhost:3000/hr/allJob");

  useEffect(() => {
    if (window.sessionStorage.getItem("email")) {
      setAccepted(true);
    }
  }, []);

  const handleClick = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`http://localhost:3000/hr/job/${id}`);

      console.log("DELETE request successful:", response.data);
      router.reload();
    } catch (error) {
      console.error("DELETE request failed:", error);
    }
  };

  return (
    <div>
      <Header dashboard="All Job Post"></Header>
      <hr />
      {accepted ? (
        data &&
        data.map((d) => (
          <div key={d.id}>
            <h3>Title: {d.title}</h3>
            <p>Details: {d.details}</p>

            <button type="submit" onClick={() => handleClick(d.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      ) : (
        <h2>Something wrong</h2>
      )}
    </div>
  );
}
