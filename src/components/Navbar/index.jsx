import classes from "./styles.module.css";
import { NavLink } from "react-router-dom";
import HeaderNavLinks from "../../constants/headerNavLinks.json";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      {HeaderNavLinks.map((link, i) => (
        <NavLink key={i + link.to} to={link.to}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
