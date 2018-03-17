import React from "react";
import { calculatePoints } from '../tools/espn';

export default class PlayerTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: calculatePoints(props.bracket)
    };
  }

  render() {
    return (
      <div>
        {this.props.bracket.name}: {this.state.score}
      </div>
    );
  }
}
