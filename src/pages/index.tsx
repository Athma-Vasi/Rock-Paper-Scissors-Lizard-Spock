import { type NextPage } from "next";
import type { WindowSize } from "../types";

import { useReducer } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { reducer, initialState, action, coloursMap } from "../state";

import { MainWrapper } from "../styledTwComponents/mainWrapper";
import { Board } from "../styledTwComponents/board";

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
  const windowsize = (function (windowDims: WindowSize) {
    const { width = 0, height = 0 } = windowDims;

    return {
      width,
      height,
    };
  })(windowDims);

  return (
    <MainWrapper state={state} windowsize={windowsize}>
      <div className="rows-span-1 col-span-1">
        <ScoreBoard state={state} />
      </div>
      {/*  */}
      {state.appState.isGameStarted ? (
        <div className=""></div>
      ) : (
        <Board state={state} windowsize={windowsize}>
          <Pentagon windowsize={windowsize} />
          <Rock
            state={state}
            action={action}
            dispatch={dispatch}
            windowsize={windowsize}
            coloursMap={coloursMap}
          />
          <Paper
            state={state}
            action={action}
            dispatch={dispatch}
            windowsize={windowsize}
            coloursMap={coloursMap}
          />
          <Scissors
            state={state}
            action={action}
            dispatch={dispatch}
            windowsize={windowsize}
            coloursMap={coloursMap}
          />
          <Lizard
            state={state}
            action={action}
            dispatch={dispatch}
            windowsize={windowsize}
            coloursMap={coloursMap}
          />
          <Spock
            state={state}
            action={action}
            dispatch={dispatch}
            windowsize={windowsize}
            coloursMap={coloursMap}
          />
        </Board>
      )}
      {/*  */}
      <Rules
        state={state}
        action={action}
        dispatch={dispatch}
        windowsize={windowsize}
      />
    </MainWrapper>
  );
};
//w:29, h:26

export default Home;
