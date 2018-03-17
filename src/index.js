import React from "react";
import PlayerScores from './components/PlayerScores';
import brackets from './assets/brackets';
require("normalize.css");
require("./assets/style.css");

export default class App extends React.Component {
  constructor() {
    super();
    localStorage.clear();
  }

  render() {
    return (
      <PlayerScores brackets={brackets} />
    );
  }
}
