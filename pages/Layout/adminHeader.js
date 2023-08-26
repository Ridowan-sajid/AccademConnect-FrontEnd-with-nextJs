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
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/admin/profile/", {
        withCredentials: true,
      });
      const jsonData = response.data;
      console.log(jsonData);
      setJsonData(jsonData);
    } catch (error) {
      router.push("../Admin/login");
      console.error(error);
    }
  }

  const handleLogout = () => {
    logout();
    router.push("../Admin/login");
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            AccademConnect
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <button className="btn btn-primary mx-5">
              <Link className="flex" href="/Admin/changepassword">
                Change Password
              </Link>
            </button>
            <button className="btn btn-primary mx-5">
              <Link className="flex" href="/Admin/createModerator">
                Create Moderator
              </Link>
            </button>
            <button className="btn btn-primary mx-5">
              <Link className="flex" href="/Admin/updateProfile">
                Edit Profile
              </Link>
            </button>
            <button className="btn btn-primary mx-5">
              <Link className="flex-1" href="/Admin/readHR">
                All Hr
              </Link>
            </button>
            <button className="btn btn-primary mx-5">
              <Link className="flex-1" href="/Admin/readStudent">
                All Student
              </Link>
            </button>
            <button className="btn btn-primary mx-5">
              <Link className="flex-1" href="/Admin/readModerator">
                All Moderator
              </Link>
            </button>
          </ul>
        </div>

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
                <Link className="justify-between" href="/Admin/myProfile">
                  My profile
                </Link>
              </li>
              {/* <li> */}
              {/* <Link className="justify-between" href="/Hr/deleteProfile">
                  Delete Profile
                </Link>
              </li> */}
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
