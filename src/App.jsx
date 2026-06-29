import { useRef, useState } from "react";
import { RedBlackTree } from "./RedBlackTree";
import RedBlackTreeView from "./RedBlackTreeView";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [highlightedValue, setHighlightedValue] =
    useState(null);
  const [, setVersion] = useState(0);

  const tree = useRef(new RedBlackTree());

  function getNumber() {
    if (value.trim() === "") {
      setMessage("Please enter a number.");
      return null;
    }

    return Number(value);
  }

  function handleInsert() {
    const number = getNumber();

    if (number === null) return;

    const inserted = tree.current.insert(number);

    if (inserted) {
      setMessage(`${number} was inserted and balanced.`);
      setVersion((current) => current + 1);
    } else {
      setMessage(`${number} already exists.`);
    }

    setHighlightedValue(null);
    setValue("");
  }

  function handleSearch() {
    const number = getNumber();

    if (number === null) return;

    const node = tree.current.search(number);

    if (node) {
      setMessage(`${number} was found. Color: ${node.color}`);
      setHighlightedValue(number);
    } else {
      setMessage(`${number} was not found.`);
      setHighlightedValue(null);
    }

    setValue("");
  }

  function handleReset() {
    tree.current = new RedBlackTree();

    setMessage("Tree was reset.");
    setValue("");
    setHighlightedValue(null);
    setVersion((current) => current + 1);
  }

  return (
    <main className="app">
      <header>
        <h1>Red-Black Tree Visualizer</h1>
        <p>
          Insert values and watch the tree automatically balance
          itself.
        </p>
      </header>

      <section className="controls">
        <input
          type="number"
          placeholder="Enter a number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleInsert();
            }
          }}
        />

        <button onClick={handleInsert}>Insert</button>

        <button
          className="secondary-button"
          onClick={handleSearch}
        >
          Search
        </button>

        <button
          className="reset-button"
          onClick={handleReset}
        >
          Reset
        </button>
      </section>

      <p className="message">{message}</p>

      <section className="tree-area">
        <RedBlackTreeView
          root={tree.current.root}
          highlightedValue={highlightedValue}
        />
      </section>

      <footer className="legend">
        <span>
          <i className="legend-circle red"></i>
          Red node
        </span>

        <span>
          <i className="legend-circle black"></i>
          Black node
        </span>
      </footer>
    </main>
  );
}

export default App;