import classes from "./navbar.module.scss";

export default function Navbar() {
  console.log("navbar render");
  return (
    <ul className={classes["navbar"]}>
      <li>
        <a href="/todos">Todos</a>
      </li>
      <li>
        <a href="/account">Account</a>
      </li>
    </ul>
  );
}

