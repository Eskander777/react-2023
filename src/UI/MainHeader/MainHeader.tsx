import classes from "./main-header.module.scss";

type HeaderProps = { title: string };

export default function MainHeader({ title }: HeaderProps) {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
}

