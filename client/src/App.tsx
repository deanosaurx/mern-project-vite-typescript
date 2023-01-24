import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [decks, setDecks] = useState([]);
  const [title, setTitle] = useState("");

  type Data = {
    _id: string;
    title: string;
  };

  const getDecks = async (): Promise<void> => {
    const response = await fetch("http://localhost:5050/decks");
    const decks = await response.json();
    console.log(decks);
    setDecks(decks);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setCount((count) => (count = count + 1));
  };

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5050/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck title</label>
        <input id="deck-title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
        <button>Post a deck</button>
      </form>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => getDecks()}>get decks</button>
      <div>
        {decks.map((deck: Data, i: number) => (
          <li key={i}>{deck.title}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
