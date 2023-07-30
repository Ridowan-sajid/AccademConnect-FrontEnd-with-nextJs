import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header dashboard="Dashboard"></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
