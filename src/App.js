import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const Context = createContext("");

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
  }, []);

  let content = undefined;
  if (data) {
    content = !isLoading ? (
      <img src={data.results[0].image} alt=""></img>
    ) : (
      <img src="" alt=""></img>
    );
  }
  return (
    <div className="App">
      <Context.Provider value={{ data }}>
        <Header />
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
