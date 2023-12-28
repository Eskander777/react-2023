import classes from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <ul className={classes["sidebar"]}>
      <li>
        <a href="">Link1</a>
      </li>
      <li>
        <a href="">Link2</a>
      </li>
      <li>
        <a href="">Link3</a>
      </li>
      <li>
        <a href="">Link4</a>
      </li>
      <li>
        <a href="">Link5</a>
      </li>
    </ul>
  );
}

