import { type NextPage } from "next";
import type { WindowSize } from "../types";

import React, { useReducer } from "react";
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

  function handlePlayAgainClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    state.appState.playerChoice = null;
    state.appState.computerChoice = null;
    state.appState.winner = null;
    state.appState.isGameStarted = false;

    state.designState.winnerColour = null;

    dispatch({
      type: action.appAction.setAll,
      payload: state,
    });
  }

  return (
    <MainWrapper state={state} windowsize={windowsize}>
      <div className="rows-span-1 col-span-1">
        <ScoreBoard state={state} />
      </div>
      {/*  */}
      {state.appState.isGameStarted ? (
        <div className="row-start-2 row-end-[8] flex flex-col items-center justify-center">
          {/* player choice icon */}
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              {state.appState.playerChoice === "rock" ? (
                <Rock
                  state={state}
                  windowsize={windowsize}
                  action={action}
                  dispatch={dispatch}
                  coloursMap={coloursMap}
                />
              ) : state.appState.playerChoice === "paper" ? (
                <Paper
                  state={state}
                  windowsize={windowsize}
                  action={action}
                  dispatch={dispatch}
                  coloursMap={coloursMap}
                />
              ) : state.appState.playerChoice === "scissors" ? (
                <Scissors
                  state={state}
                  windowsize={windowsize}
                  action={action}
                  dispatch={dispatch}
                  coloursMap={coloursMap}
                />
              ) : state.appState.playerChoice === "lizard" ? (
                <Lizard
                  state={state}
                  windowsize={windowsize}
                  action={action}
                  dispatch={dispatch}
                  coloursMap={coloursMap}
                />
              ) : (
                <Spock
                  state={state}
                  windowsize={windowsize}
                  action={action}
                  dispatch={dispatch}
                  coloursMap={coloursMap}
                />
              )}
              <p>YOU PICKED</p>
            </div>
            {/* computer choice icon */}
            <div className="flex flex-col items-center justify-center">
              {state.appState.computerChoice === "rock" ? (
                <Rock
                  state={state}
                  windowsize={windowsize}
                  coloursMap={coloursMap}
                  action={action}
                  dispatch={dispatch}
                />
              ) : state.appState.computerChoice === "paper" ? (
                <Paper
                  state={state}
                  windowsize={windowsize}
                  coloursMap={coloursMap}
                  action={action}
                  dispatch={dispatch}
                />
              ) : state.appState.computerChoice === "scissors" ? (
                <Scissors
                  state={state}
                  windowsize={windowsize}
                  coloursMap={coloursMap}
                  action={action}
                  dispatch={dispatch}
                />
              ) : state.appState.computerChoice === "lizard" ? (
                <Lizard
                  state={state}
                  windowsize={windowsize}
                  coloursMap={coloursMap}
                  action={action}
                  dispatch={dispatch}
                />
              ) : (
                <Spock
                  state={state}
                  windowsize={windowsize}
                  coloursMap={coloursMap}
                  action={action}
                  dispatch={dispatch}
                />
              )}
              <p>HOUSE PICKED</p>
            </div>
          </div>
          {/* winner and play again button */}
          <div className="flex flex-col items-center justify-center">
            <p
              className={`${
                state.designState.winnerColour ?? ""
              } text-2xl font-bold`}
            >
              {state.appState.winner === "player"
                ? "YOU WIN"
                : state.appState.winner === "computer"
                ? "HOUSE WINS"
                : "DRAW"}
            </p>
            <button
              className="cursor-pointer rounded-lg border-2 border-headerOutline py-2 px-8 text-2xl tracking-widest"
              onClick={handlePlayAgainClick}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
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
