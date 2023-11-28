import React from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";

const App = () => {
  return (
    <div className="App">
      <center>
        <Filter />
        <br />
        <AddMovie />
        <br />
        <MovieList />
      </center>
    </div>
  );
};

export default App;
