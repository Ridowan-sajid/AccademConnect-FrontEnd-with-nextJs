import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ReadHr() {
  const [accepted, setAccepted] = useState(false);
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const getData = async (id) => {
      try {
        const data = await axios.get(`http://localhost:3000/admin/hr/`);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleClick = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:3000/admin/hr/${id}`
      );

      console.log(response);
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <hr />
      {data &&
        data.map((d) => (
          <div key={d.id}>
            <p>Name: {d.name}</p>
            <p>Age: {d.age}</p>
            <p>Phone: {d.phone}</p>
            <p>Email: {d.email}</p>
            <p>Gender: {d.gender}</p>

            <button type="submit" onClick={() => handleClick(d.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))}
    </div>
  );
}
