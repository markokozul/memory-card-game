import { createContext, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const Context = createContext("");

function App() {
  const [data, setData] = useState(null);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Context.Provider
        value={{ data, score, setScore, highscore, setHighscore }}
      >
        <Header />
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
