import React, { useRef, useState } from "react";

export default function UserRef() {
  const [random, setRandom] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const timerId = useRef(0);

  const handleChange = (e) => {
    setRandom(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    if (timerId.current === 0) {
      timerId.current = setInterval(() => {
        renders.current++;
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };
  return (
    <main>
      <input
        type="text"
        value={random}
        placeholder="Random inputs"
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <br />
      <p>Seconds: {seconds}</p>

      <br />
      <br />
      <p>{random}</p>
    </main>
  );
}
