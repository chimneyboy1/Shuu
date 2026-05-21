import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="so-nav">
      <Link className="so-logo" to="/">宗</Link>
      <ul className="so-nav-links">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className="so-nav-lang" type="button">EN / JP</button>
    </nav>
  );
}
