import { motion } from "framer-motion";
import React from "react";
import type { State } from "../../types";

type ScoreBoardProps = {
  state: State;
};

function ScoreBoard({ state }: ScoreBoardProps) {
  return (
    <div className="grid w-full grid-cols-3 grid-rows-1 rounded-lg border-2 border-headerOutline p-6">
      {/* title */}
      <div className="col-span-2 flex flex-col items-start justify-start">
        <h1 className="-m-1">ROCK</h1>
        <h1 className="-m-1">PAPER</h1>
        <h1 className="-m-1">SCISSORS</h1>
        <h1 className="-m-1">LIZARD</h1>
        <h1 className="-m-1">SPOCK</h1>
      </div>

      {/* scoreBoard */}

      <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-white text-darkText ">
        <h4 className="tracking-widest">SCORE</h4>
        {state.appState.isGameStarted ? (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
            className="text-4xl font-bold"
          >
            {state.appState.score}
          </motion.h3>
        ) : (
          <h3 data-cy="scoreboard" className="text-4xl font-bold">
            {state.appState.score}
          </h3>
        )}
      </div>
    </div>
  );
}

export { ScoreBoard };
