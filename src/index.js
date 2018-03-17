import React from "react";
import PlayerTotal from './components/PlayerTotal';
import brackets from './assets/brackets';
require("normalize.css");
require("./assets/style.css");

export default class App extends React.Component {
  constructor() {
    super();
    localStorage.clear();
  }

  render() {
    console.log(brackets[1]);
    return (
      <PlayerTotal bracket={brackets[1]}/>
    );
  }
}
