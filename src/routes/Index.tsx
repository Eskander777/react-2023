import { Outlet } from "react-router-dom";
import Button from "../UI/Button/Button";

export default function Index() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Button link={"/root"} title="Root" />
            </li>
            <li>
              <Button link={"/todos"} title="Todos" />
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

