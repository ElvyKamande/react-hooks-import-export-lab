import React from "react";
import {username,city,image} from "../data/user";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
