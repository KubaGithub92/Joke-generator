import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState(null);

  const loadData = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    setJoke(data);
    console.log(data);
    console.log(data.type);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Random joke generator</h1>
      <button onClick={loadData}>Generate Joke</button>
      {joke && joke.type === "single" ? (
        <>
          <div>{joke.joke}</div>
        </>
      ) : (
        ""
      )}

      {joke && joke.type === "twopart" ? (
        <>
          <div>{joke.setup}</div>
          <div>{joke.delivery}</div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
