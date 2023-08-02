import classes from "./image.module.scss";

type ImageProps = { img1: string; img2: string };

export default function Image({ img1, img2 }: ImageProps) {
  return (
    <div className={classes.image}>
      <picture className={classes["image__body"]}>
        <source media="(min-width: 1000px)" srcSet={img2} />
        <img src={img1} alt="Image" className={classes["image__img-item"]} />
      </picture>
    </div>
  );
}

