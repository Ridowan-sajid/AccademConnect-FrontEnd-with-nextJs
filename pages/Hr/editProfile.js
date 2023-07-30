import Header from "../Layout/header";

export default function EditProfile() {
  return (
    <div>
      <Header dashboard="Update Profile"></Header>
      <br />
      <form action="">
        <label htmlFor="">Name</label>
        <br />
        <input type="text" name="name" placeholder="Name" />
        <br />

        <label htmlFor="">Age</label>
        <br />
        <input type="text" name="age" placeholder="Age" />

        <br />
        <label htmlFor="">gender</label>
        <br />
        <input type="text" name="gender" placeholder="Gender" />

        <br />
        <label htmlFor="">Email</label>
        <br />
        <input type="text" name="email" placeholder="Email" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
