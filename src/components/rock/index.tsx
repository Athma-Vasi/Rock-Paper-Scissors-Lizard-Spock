import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import iconRock from "../../assets/images/icon-rock.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";
import { generateComputerChoice } from "../utils";

type RockProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowsize: WindowSize;
};

function Rock({ state, action, dispatch, windowsize }: RockProps) {
  function handleRockIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    const computerChoice = generateComputerChoice();

    state.appState.computerChoice = computerChoice;
    state.appState.playerChoice = "rock";
    state.appState.isGameStarted = true;

    dispatch({
      type: action.appAction.setAll,
      payload: state,
    });
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
