import { NavLink } from "react-router-dom";
import classes from "./button.module.scss";

type ButtonProps = {
  title: string;
  func?: () => void;
  link?: string;
};

export default function Button({ title, func, link }: ButtonProps) {
  return link ? (
    <NavLink to={link}>{title}</NavLink>
  ) : (
    <button onClick={func} className={classes.button}>
      {title}
    </button>
  );
}

