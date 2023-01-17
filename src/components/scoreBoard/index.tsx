import React from "react";
import type { State } from "../../types";

type ScoreBoardProps = {
  state: State;
};

function ScoreBoard({ state }: ScoreBoardProps) {
  return (
    <div className="grid w-full grid-cols-3 grid-rows-1 p-6 outline-dashed">
      {/* title */}
      <div className="col-span-2 flex flex-col items-start justify-start outline-dotted">
        <h1 className="-m-1">ROCK</h1>
        <h1 className="-m-1">PAPER</h1>
        <h1 className="-m-1">SCISSORS</h1>
        <h1 className="-m-1">LIZARD</h1>
        <h1 className="-m-1">SPOCK</h1>
      </div>

      {/* scoreBoard */}
      <div className="col-span-1 flex flex-col items-center justify-center outline-dotted">
        <h2>SCORE</h2>
        <h3 className="text-3xl">7</h3>
      </div>
    </div>
  );
}

export default ScoreBoard;
