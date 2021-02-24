import { useEffect, useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import "./App.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat(caps.map((letter) => letter.toLowerCase()));
})();

function App() {
  const [letter, setLetter] = useState(1);

  const UpdateLetter = () => setLetter(getRandomInt(65, 90));

  useEffect(() => {
    setTimeout(UpdateLetter, 1000);
  }, [letter]);

  return (
    <div className="App">
      <header className="Letter">
        <KeyboardEventHandler
          handleKeys={letters}
          onKeyEvent={(key, e) => setLetter(key)}
        />
        <h1>{String(letter)}</h1>
      </header>
    </div>
  );
}

export default App;
