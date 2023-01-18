import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import iconScissors from "../../assets/images/icon-scissors.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type ScissorsProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowSize: WindowSize;
};

function Scissors({ state, action, dispatch, windowSize }: ScissorsProps) {
  function handleScissorsIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    state.appState.playerChoice = "scissors";
    dispatch({
      type: action.appAction.setPlayerChoice,
      payload: state,
    });
  }

  return (
    <IconWrapper
      state={state}
      windowSize={windowSize}
      iconType="scissors"
      onClick={handleScissorsIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 active:shadow-slate-300`}
      >
        <MyImage
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconScissors}
          alt="icon of a hand closed first representing Scissors"
          windowSize={windowSize}
        />
      </div>
    </IconWrapper>
  );
}

export { Scissors };
