import { useContext } from "react";
import { Context } from "../App";
import { Card } from "./Card";

export function ImageCards() {
  const { data } = useContext(Context);

  return (
    <div className="image-cards">
      {data &&
        data.results.map((item) => (
          <Card key={item.id} src={item.image} name={item.name}></Card>
        ))}
    </div>
  );
}
