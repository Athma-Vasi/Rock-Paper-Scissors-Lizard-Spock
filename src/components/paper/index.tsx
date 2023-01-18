import type {
  Action,
  Colours,
  ColoursMap,
  Dispatch,
  State,
  WindowSize,
} from "../../types";

import React from "react";
import iconPaper from "../../assets/images/icon-paper.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";
import { generateComputerChoice, generateWinner } from "../utils";

type PaperProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowsize: WindowSize;
  coloursMap: ColoursMap;
};

function Paper({
  state,
  action,
  dispatch,
  windowsize,
  coloursMap,
}: PaperProps) {
  function handlePaperIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // only allow the player to click on the icon if the game has not started
    if (!state.appState.isGameStarted) {
      const computerChoice = generateComputerChoice();
      const winner = generateWinner("paper", computerChoice);
      const winnerColour = coloursMap.get(
        winner === "player" ? "paper" : computerChoice
      ) as Colours;

      state.appState.isGameStarted = true;
      state.appState.playerChoice = "paper";
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

  return (
    <IconWrapper
      state={state}
      windowsize={windowsize}
      iconType="paper"
      onClick={handlePaperIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 active:shadow-slate-300`}
      >
        <MyImage
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconPaper}
          alt="icon of a hand closed first representing Paper"
          windowsize={windowsize}
        />
      </div>
    </IconWrapper>
  );
}

export { Paper };
