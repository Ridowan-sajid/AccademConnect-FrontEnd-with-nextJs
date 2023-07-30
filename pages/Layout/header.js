export default function Header(props) {
  return (
    <div>
      <h1>Welcome to our website</h1>
      <h2>{props.dashboard} Panel</h2>
    </div>
  );
}
