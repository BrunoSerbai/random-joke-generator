import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("Click the button to get a joke!");

  useEffect(() => {
    const button = document.getElementById("joke");
    if (button) {
      button.addEventListener("click", () => {
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
      });
    }

    // Cleanup to prevent event listener duplication
    return () => {
      button?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="bg-yellow-300 flex items-center justify-center h-screen">
      <div className="bg-black rounded-2xl w-3/5 p-5 text-center shadow flex flex-col justify-center items-center">
        <img className="laught-img max-h-60 m-5" src="/laught.png" alt="example" />
        <p className="text-white text-base mt-10 mb-5  break-all ">{joke}</p>
        <button id="joke" className="bg-yellow-300 h-8 px-4 rounded m-5">
          Get Joke
        </button>
      </div>
    </div>
  );
}

export default App;
