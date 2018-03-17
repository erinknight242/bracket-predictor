import React from "react";
import PlayerTotal from './PlayerTotal';

const PlayerScores = ({ brackets }) => (
  <div>
    <PlayerTotal bracket={brackets[1]} />
    <PlayerTotal bracket={brackets[2]} />
  </div>
);

export default PlayerScores;
