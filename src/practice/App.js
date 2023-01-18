import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClickShowing = event => setShowing(prev => !prev);
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(prev => prev + 1);
  const onChange = event => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");

  useEffect(() => {
    console.log("call the api");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
      <br></br>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"press"} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
