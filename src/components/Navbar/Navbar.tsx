import classes from "./navbar.module.scss";

type NavbarProps = {
  finished: number;
};

export default function Navbar({ finished }: NavbarProps) {
  console.log("navbar render");
  return (
    <div className={classes["navbar__wrap"]}>
      <p>Todos finished: {finished}</p>
      <ul className={classes["navbar"]}>
        <li>
          <a href="/todos">Todos</a>
        </li>
        <li>
          <a href="/account">Account</a>
        </li>
      </ul>
    </div>
  );
}

