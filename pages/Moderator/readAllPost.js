import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ReadJobPost() {
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const getData = async (id) => {
      try {
        const data = await axios.get(`http://localhost:3000/moderator/post/`);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // const handleClick = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:3000/moderator/post/${id}`
  //     );

  //     console.log(response);
  //     router.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <hr />
      {data &&
        data.map((d) => (
          <div key={d.id}>
            <h4>Title: {d.title}</h4>
            <p>Details: {d.details}</p>

            {/* <button type="submit" onClick={() => handleClick(d.id)}>
              Delete
            </button> */}
            <Link href={"/Moderator/Update/" + d.id}>Details</Link>

            <hr />
          </div>
        ))}
    </div>
  );
}
