import React from "react";
import CharactersQuery from "./components/Characters";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "lightblue" }}>
        <nav> Rick and Morty Api GraphQL</nav>
      </div>
      <div style={{ display: "flex" }}>
        <CharactersQuery />
      </div>
    </div>
  );
}

export default App;
