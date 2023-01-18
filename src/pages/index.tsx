import { type NextPage } from "next";
import type { WindowSize } from "../types";

import { useReducer } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { reducer, initialState, action } from "../state";

import { MainWrapper } from "../styledTwComponents/mainWrapper";
import { GameBoard } from "../styledTwComponents/gameBoard";

import ScoreBoard from "../components/scoreBoard";
import { Rock } from "../components/rock";
import { Scissors } from "../components/scissors";
import { Paper } from "../components/paper";
import { Lizard } from "../components/lizard";
import { Spock } from "../components/spock";
import Rules from "../components/rules";
import { Pentagon } from "../components/pentagon";

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const windowDims = useWindowSize();
  const windowSize = (function (windowDims: WindowSize) {
    const { width = 0, height = 0 } = windowDims;

    return {
      width,
      height,
    };
  })(windowDims);
  console.log("windowSize: ", windowSize);

  return (
    <MainWrapper state={state} windowSize={windowSize}>
      <div className="rows-span-1 col-span-1">
        <ScoreBoard state={state} />
      </div>
      {/*  */}
      <GameBoard state={state} windowSize={windowSize}>
        <Pentagon windowSize={windowSize} />
        <Rock
          state={state}
          action={action}
          dispatch={dispatch}
          windowSize={windowSize}
        />
        <Paper
          state={state}
          action={action}
          dispatch={dispatch}
          windowSize={windowSize}
        />
        <Scissors
          state={state}
          action={action}
          dispatch={dispatch}
          windowSize={windowSize}
        />
        <Lizard
          state={state}
          action={action}
          dispatch={dispatch}
          windowSize={windowSize}
        />
        <Spock
          state={state}
          action={action}
          dispatch={dispatch}
          windowSize={windowSize}
        />
      </GameBoard>
      {/*  */}
      <Rules
        state={state}
        action={action}
        dispatch={dispatch}
        windowSize={windowSize}
      />
    </MainWrapper>
  );
};
//w:29, h:26

export default Home;
