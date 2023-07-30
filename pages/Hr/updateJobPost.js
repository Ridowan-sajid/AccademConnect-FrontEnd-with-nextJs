import Header from "../Layout/header";

export default function UpdatePost() {
  return (
    <div>
      <Header dashboard="Update Job"></Header>
      <form>
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <br />
        <label>Details</label>
        <input type="text" name="details" placeholder="Details" />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
      <br />
    </div>
  );
}
