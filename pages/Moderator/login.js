export default function Login() {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <label>email</label>
        <input type="text" name="email" placeholder="email..." />
        <br />

        <label>Password</label>
        <input type="password" name="password" placeholder="Password..." />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
