import { useContext } from "react";
import { Context } from "../App";

export function Header() {
  const { score, highscore } = useContext(Context);
  return (
    <div className="header">
      <p>Score: {score}</p>
      <p>Highscore: {highscore}</p>
    </div>
  );
}
