export default function UpdatePost() {
  return (
    <div>
      <h1>Update post</h1>
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
