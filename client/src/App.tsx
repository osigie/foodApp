import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Cart />
      <Header />

      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
