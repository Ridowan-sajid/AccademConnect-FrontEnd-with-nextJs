import Header from "../Layout/header";

export default function ChangePassword() {
  return (
    <div>
      <Header dashboard="Change Password"></Header>
      <br />
      <form>
        <label>Old Password</label>
        <input type="text" placeholder="Old Password..." />
        <br />

        <label>New Password</label>
        <input type="text" placeholder="New Password..." />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
