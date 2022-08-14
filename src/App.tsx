import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Table from "./components/Table";

function App() {
  const [adding, setAdding] = useState(false);

  const issues = [
    { name: "issue 1", price: "1h", type: "bug", state: "done" },
    { name: "issue 1", price: "1h", type: "bug", state: "done" },
    { name: "issue 1", price: "1h", type: "investigation", state: "done" },
    { name: "issue 1", price: "1h", type: "feature", state: "done" },
    { name: "issue 1", price: "1h", type: "bug", state: "pending" },
  ];

  return (
    <div className="App">
      <button type="button" onClick={() => setAdding(!adding)}>Add issue</button>
      {adding && <Input />}
      <Table issues={issues} />
    </div>
  );
}

export default App;
