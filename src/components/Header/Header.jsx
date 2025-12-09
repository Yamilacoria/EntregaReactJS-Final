import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
      <img src="/images/Bottlesea.jpg" alt="logo-cafeteria" />
      <h1 className="logo-cafeteria">Cafetería "Bottle Sea"</h1>
      </Link>
      <Nav />
    </header>
  );
};