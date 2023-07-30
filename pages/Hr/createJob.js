import Header from "../Layout/header";

export default function CreatePost() {
  return (
    <div>
      <Header dashboard="Create Job"></Header>
      <form>
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <br />
        <label>Details</label>
        <input type="text" name="details" placeholder="Details" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
