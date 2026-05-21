import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="shuu-nav">
      <Link className="shuu-logo" to="/">
        宗
      </Link>
      <ul className={`shuu-nav-links${open ? " open" : ""}`}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button className="shuu-nav-lang" type="button">
        EN / JP
      </button>
      <button
        className={`shuu-hamburger${open ? " active" : ""}`}
        type="button"
        aria-label="メニューを開く"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
