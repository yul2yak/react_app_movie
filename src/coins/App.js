import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const onChangeUserInput = event => setUserInput(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, null);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={selectedCoin}>
          {coins.map(coin => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): $
              {parseFloat(coin.quotes.USD.price).toFixed(1)} /{" "}
              {parseFloat(coin.quotes.USD.price).toFixed(0) * 1253} won
            </option>
          ))}
        </select>
      )}
      <hr></hr>
      <label htmlFor="userInput">Convert $</label>
      <input
        id="userInput"
        onChange={onChangeUserInput}
        value={userInput}
        type="number"
      ></input>
      {coins.length > selectedCoin ? (
        <div>
          can be converted {userInput / coins[selectedCoin].quotes.USD.price}{" "}
          {coins[selectedCoin].symbol}
        </div>
      ) : null}
    </div>
  );
}

export default App;
