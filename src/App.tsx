import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("Click the button to get a joke!");

  const fetchJoke = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    )
      .then((res) => res.json())
      .then((data) => {
        const newJoke = data.setup
          ? `${data.setup} - ${data.delivery}`
          : data.joke;
        setJoke(newJoke);
      })
      .catch((err) => console.error("Error fetching joke:", err));
  };

  return (
    <div className="bg-yellow-300 flex items-center justify-center h-screen">
      <div className="bg-black rounded-2xl w-3/5 p-5 text-center shadow flex flex-col justify-center items-center">
        <img
          className="laught-img max-h-50 m-5"
          src="/laugh.png"
          alt="example"
        />
        <p className="text-white text-base mt-10 mb-5 break-words">{joke}</p>
        <button
          onClick={fetchJoke}
          className="bg-yellow-300 h-8 px-4 rounded m-5 hover:cursor-pointer"
        >
          Get Joke
        </button>
      </div>
    </div>
  );
}

export default App;
