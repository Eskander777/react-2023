import { useState } from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "../UI/MainHeader/MainHeader";
import Modal from "../components/Modal/Modal";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import Button from "../UI/Button/Button";
import Image from "../components/Image/Image";
import pic1 from "../assets/Gol Manzarasi (1930).jpg";
import pic2 from "../assets/HD-wallpaper-fallen-leaves-f-art-cityscape-beautiful-abstract-illustration-artwork-afremov-fractal-texture-painting-wide-screen.jpg";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Button link={"first/3"} title="First" />
            </li>
            <li>
              <Button link={"second"} title="Second" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Modal open={isOpen} openFunc={setIsOpen} title="Modal dialog">
          <Image img1={pic1} img2={pic2} />
        </Modal>
        <Button title="Open modal" func={() => setIsOpen(true)} />
        <MainHeader title={"Component with header"} />
        <Image img1={pic1} img2={pic2} />
        <Outlet />
        <CarouselComponent img1={pic1} img2={pic2} />
      </main>
    </>
  );
}

