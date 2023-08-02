import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./carousel.module.scss";
import Image from "../Image/Image";

type CarouselProps = { img1: string; img2: string };

export default function CarouselComponent({ img1, img2 }: CarouselProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={classes["carousel"]}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={3000}
        containerClass={classes["carousel__container"]}
      >
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
        <div className={classes["carousel__item"]}>
          <Image img1={img1} img2={img2} />
        </div>
      </Carousel>
    </section>
  );
}

