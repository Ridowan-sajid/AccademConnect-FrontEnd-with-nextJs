export default function ChangePassword() {
  return (
    <div>
      <h1>Change Password</h1>
      <br />
      <form method="post" action="">
        <label htmlFor="">Old Password</label>
        <br />
        <input type="text" name="oldPassword" placeholder="Old Password..." />
        <br />

        <label htmlFor="">New Password</label>
        <br />
        <input type="text" name="newPassword" placeholder="New Password..." />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
