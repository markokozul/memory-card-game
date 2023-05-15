import { createContext, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const Context = createContext("");

function App() {
  const [hide, setHide] = useState("hide");
  const [data, setData] = useState(null);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [resultDisplay, setResultDisplay] = useState(null);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
    setHide("");
  }, []);

  const displayResult = (result) => {
    if (result) {
      setResultDisplay((resultDisplay) => {
        setHighscore(0);
        return (
          <div className="win">
            <p>You won!</p>
            <button onClick={() => setResultDisplay(null)}>Play again</button>
          </div>
        );
      });
    } else {
      setResultDisplay(
        <div className="lose">
          <p>You lost!</p>
          <button onClick={() => setResultDisplay(null)}>Try again</button>
        </div>
      );
    }
  };
  return (
    <div className="App">
      <div className={`guide ${hide}`}>
        <div className="guide-content">
          <p>Goal of the game is to select each image only once.</p>
          <p>Score 12 points to win the game.</p>
          <button onClick={() => setHide("hide")}>Play</button>
        </div>
      </div>
      {resultDisplay}
      <div className="overlay"></div>
      <Context.Provider
        value={{
          data,
          score,
          setScore,
          highscore,
          setHighscore,
          displayResult,
        }}
      >
        <Header />

        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
