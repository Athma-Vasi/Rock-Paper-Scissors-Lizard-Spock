import type {
  Action,
  Colours,
  ColoursMap,
  Dispatch,
  State,
  WindowSize,
} from "../../types";

import React from "react";
import iconRock from "../../assets/images/icon-rock.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";
import { generateComputerChoice, generateWinner } from "../utils";

type RockProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowsize: WindowSize;
  coloursMap: ColoursMap;
};

function Rock({ state, action, dispatch, windowsize, coloursMap }: RockProps) {
  function handleRockIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    // only allow the player to click on the icon if the game has not started
    if (!state.appState.isGameStarted) {
      const computerChoice = generateComputerChoice();
      const winner = generateWinner("rock", computerChoice);
      const winnerColour = coloursMap.get(
        winner === "player" ? "rock" : computerChoice
      ) as Colours;

      state.appState.isGameStarted = true;
      state.appState.playerChoice = "rock";
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
      iconType="rock"
      onClick={handleRockIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 active:shadow-slate-300`}
      >
        <MyImage
          windowsize={windowsize}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconRock}
          alt="icon of a hand closed first representing rock"
        />
      </div>
    </IconWrapper>
  );
}

export { Rock };
