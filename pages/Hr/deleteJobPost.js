import Header from "../Layout/header";

export default function DeleteJob() {
  return (
    <div>
      <Header dashboard="Delete Job"></Header>
      <form>
        <h3>Title: Lorem ipsum dolor sit amet.</h3>
        <p>
          Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae, distinctio. Nobis vitae laborum sunt iusto earum
          molestiae! Aut, non optio?
        </p>
        <button type="submit">Delete Job</button>
      </form>
      <br />
    </div>
  );
}
