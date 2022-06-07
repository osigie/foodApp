import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
