import Header from "../Layout/header";

export default function CreateHr() {
  return (
    <div>
      <Header dashboard="Registration"></Header>
      <form>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />

        <label>Age</label>
        <input type="text" name="age" placeholder="Age" />

        <br />
        <br />
        <label>gender</label>
        <input type="text" name="gender" placeholder="Gender" />

        <br />
        <br />
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" />

        <br />
        <br />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
