import type {
  Action,
  Colours,
  ColoursMap,
  Dispatch,
  State,
  WindowSize,
} from "../../types";

import React from "react";
import iconScissors from "../../assets/images/icon-scissors.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";
import { generateComputerChoice, generateWinner } from "../utils";

type ScissorsProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowsize: WindowSize;
  coloursMap: ColoursMap;
};

function Scissors({
  state,
  action,
  dispatch,
  windowsize,
  coloursMap,
}: ScissorsProps) {
  function handleScissorsIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // only allow the player to click on the icon if the game has not started
    if (!state.appState.isGameStarted) {
      const computerChoice = generateComputerChoice();
      const winner = generateWinner("scissors", computerChoice);
      const winnerColour = coloursMap.get(
        winner === "player" ? "scissors" : computerChoice
      ) as Colours;

      state.appState.isGameStarted = true;
      state.appState.playerChoice = "scissors";
      state.appState.computerChoice = computerChoice;
      state.appState.winner = winner;
      state.appState.score =
        winner === "player" ? state.appState.score + 1 : state.appState.score;
      state.designState.winnerColour = winnerColour;

      dispatch({
        type: action.appAction.setAll,
        payload: state,
      });
    }
  }

  const activeAnimation = state.appState.isGameStarted
    ? ""
    : "active:shadow-slate-300";

  return (
    <IconWrapper
      state={state}
      windowsize={windowsize}
      icontype="scissors"
      onClick={handleScissorsIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 ${activeAnimation}`}
      >
        <MyImage
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconScissors}
          alt="icon of a hand closed first representing Scissors"
          windowsize={windowsize}
        />
      </div>
    </IconWrapper>
  );
}

export { Scissors };
