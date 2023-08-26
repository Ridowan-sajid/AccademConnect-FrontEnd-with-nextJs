import { useEffect, useState } from "react";
import { useAuth } from "../lib/authContext";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export default function Header() {
  const [jsonData, setJsonData] = useState("");
  const router = useRouter();
  const { user, logout, checkUser } = useAuth();

  useEffect(() => {
    checkSession();
  }, []);

  function checkSession() {
    if (user != null) {
      fetchData();
      console.log("user:  " + user.email);
      console.log("user:  " + user.cookie);
    } else {
      //router.push("../Hr/login");
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/hr/myprofile/", {
        withCredentials: true,
      });
      const jsonData = response.data;
      console.log(jsonData);
      setJsonData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLogout = () => {
    logout();
    router.push("../Hr/login");
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            AccademConnect
          </Link>
        </div>

        <Link className="flex-1" href="/Hr/changePassword">
          Change Password
        </Link>
        <Link className="flex-1" href="/Hr/createJob">
          Create Job Post
        </Link>
        <Link className="flex-1" href="/Hr/editProfile">
          Edit Profile
        </Link>
        <Link className="flex-1" href="/Hr/myJob">
          My Job
        </Link>
        <Link className="flex-1" href="/Hr/readJobPost">
          Read Job Post
        </Link>

        <div></div>

        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="http://localhost:3000/hr/getimage/" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between" href="/Hr/myProfile">
                  My profile
                </Link>
              </li>
              <li>
                <Link className="justify-between" href="/Hr/deleteProfile">
                  Delete Profile
                </Link>
              </li>
              <li>
                <button type="submit" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
