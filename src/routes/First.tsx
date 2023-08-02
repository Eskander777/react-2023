import { useParams } from "react-router-dom";

export default function First() {
  const { input } = useParams();

  return (
    <main>
      <div>{input} param</div>
    </main>
  );
}

