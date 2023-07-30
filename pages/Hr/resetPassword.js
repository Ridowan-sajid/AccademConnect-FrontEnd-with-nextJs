import Header from "../Layout/header";

export default function ResetPassword() {
  return (
    <div>
      <Header dashboard="Reset Password"></Header>
      <form>
        <label>Email</label>
        <input type="email" placeholder="email..." />
        <br />

        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
