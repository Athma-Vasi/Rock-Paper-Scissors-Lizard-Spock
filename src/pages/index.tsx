import { type NextPage } from "next";
import type { WindowSize } from "../types";

import { useReducer } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { reducer, initialState } from "../state";

import Rules from "../components/rules";
import ScoreBoard from "../components/scoreBoard";
import { Rock } from "../components/rock";

import { MainWrapper } from "../styledTwComponents/mainWrapper";
import { GameBoard } from "../styledTwComponents/gameBoard";
import { Scissors } from "../components/scissors";
import { Paper } from "../components/paper";
import { Lizard } from "../components/lizard";
import { Spock } from "../components/spock";

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

  return (
    <MainWrapper state={state}>
      <div className="rows-span-1 col-span-1">
        <ScoreBoard state={state} />
      </div>

      <GameBoard state={state} windowSize={windowSize}>
        <Rock state={state} windowSize={windowSize} />
        <Paper state={state} windowSize={windowSize} />
        <Scissors state={state} windowSize={windowSize} />
        <Lizard state={state} windowSize={windowSize} />
        <Spock state={state} windowSize={windowSize} />
      </GameBoard>

      <div className="">
        <Rules />
      </div>
    </MainWrapper>
  );
};
//w:29, h:26

export default Home;
