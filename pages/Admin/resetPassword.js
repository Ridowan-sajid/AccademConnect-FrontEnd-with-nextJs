export default function Resetpassword() {
  return (
    <div>
      <h1>Reset Password</h1>
      <br />
      <form method="post" action="">
        <label htmlFor="">Gmail</label>
        <br />
        <input type="text" name="gmail" placeholder="Gmail..." />

        <br />
        <br />
        <button type="submit">Send Otp</button>
      </form>
      <br />
    </div>
  );
}
