export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <br />
      <form method="post" action="">
        <label htmlFor="">email</label>
        <br />
        <input type="text" name="email" placeholder="email..." />
        <br />

        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="password" placeholder="Password..." />
        <br />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
