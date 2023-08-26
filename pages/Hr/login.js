// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// import Header from "../Layout/header";
// import { useAuth } from "../lib/authContext";

// export default function Login() {
//   const router = useRouter();
//   const { login } = useAuth();

//   const [register, setRegister] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setRegister({
//       ...register,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/hr/login",
//         {
//           email: register.email,
//           password: register.password,
//         },
//         {
//           headers: { "Context-Type": "application/x-www-form-urlencoded" },
//           withCredentials: true,
//         }
//       );
//       if (response.data) {
//         console.log(response.data);
//         console.log(document.cookie);
//         login(register.email, document.cookie);
//         console.log("Login successful");

//         router.push("/Hr/myProfile");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <form
//         method="post"
//         action=""
//         className="container my-5"
//         onSubmit={handleSubmit}
//       >
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={register.email}
//             onChange={handleChange}
//           />
//           <br />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             value={register.password}
//             onChange={handleChange}
//           />
//           <br />
//         </div>

//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../Layout/header";
import { useAuth } from "../lib/authContext";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!register.email) {
      newErrors.email = "Email is required";
    }
    if (!register.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/hr/login",
        {
          email: register.email,
          password: register.password,
        },
        {
          headers: { "Context-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      if (response.data) {
        console.log(response.data);
        console.log(document.cookie);
        login(register.email, document.cookie);
        console.log("Login successful");

        router.push("/Hr/myProfile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="post"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
          <br />
        </div>

        <div className="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
          <br />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-black-800 px-1"
          href="/Hr/resetPassword"
        >
          Forgot Password?
        </Link>
        <Link
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-1"
          href="/Hr/register"
        >
          Register Here
        </Link>
      </form>
    </div>
  );
}
