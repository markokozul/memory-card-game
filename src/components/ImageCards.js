import { useContext, useState } from "react";
import { Context } from "../App";
import { Card } from "./Card";

export function ImageCards() {
  const { data, score, setScore, setHighscore, highscore } =
    useContext(Context);
  const [imagesArray, setImagesArray] = useState(null);
  const [clickedImagesArray, setClickedImagesArray] = useState([]);

  let array = [];
  if (data) {
    for (let i = 0; i < 12; i++) {
      array.push(data.results[i]);
    }
  }

  const check = (id) => {
    if (clickedImagesArray.length === 0) {
      setScore(score + 1);
    }
    setClickedImagesArray((clickedImagesArray) => {
      return [...clickedImagesArray, id];
    });
    let bool = true;

    clickedImagesArray.forEach((item) => {
      if (id === item) {
        setScore(0);
        setClickedImagesArray([]);
        bool = false;
      }
    });
    if (bool) {
      setScore(score + 1);
      if (score >= highscore) {
        setHighscore(highscore + 1);
      }
    }
  };

  const shuffleCards = () => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    setImagesArray(array);
  };

  return (
    <div className="image-cards">
      {data &&
        (imagesArray || array).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            src={item.image}
            name={item.name}
            shuffleCards={shuffleCards}
            check={check}
          ></Card>
        ))}
    </div>
  );
}
