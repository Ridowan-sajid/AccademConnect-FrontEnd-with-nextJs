import Header from "../Layout/header";

export default function DeleteProfile() {
  return (
    <div>
      <Header dashboard="Delete Profile"></Header>
      <h3>Are you willing to delete your Profile</h3>
      <button type="submit">Delete Profile</button>
    </div>
  );
}
