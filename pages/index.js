import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./Layout/layout";
import ChangePassword from "./Admin/changepassword";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <Link href="/Hr/changePassword">Change Password</Link>
        <br />
        <Link href="/Hr/createJob">Create Job</Link>
        <br />
        <Link href="/Hr/deleteJobPost">Delete job Post</Link>
        <br />
        <Link href="/Hr/deleteProfile">delete Profile</Link>

        <br />
        <Link href="/Hr/editProfile">Update Profile</Link>

        <br />
        <Link href="/Hr/login">Login</Link>

        <br />
        <Link href="/Hr/logout">Logout</Link>

        <br />
        <Link href="/Hr/myProfile">My profile</Link>

        <br />
        <Link href="/Hr/readDetailsJob">Read Details Job</Link>

        <br />
        <Link href="/Hr/readJobPost">Read Job Post</Link>

        <br />
        <Link href="/Hr/register">Register</Link>

        <br />
        <Link href="/Hr/resetPassword">Reset Password</Link>

        <br />
        <Link href="/Hr/updateJobPost">Update Job Post</Link>
      </Layout>
    </div>
  );
}
