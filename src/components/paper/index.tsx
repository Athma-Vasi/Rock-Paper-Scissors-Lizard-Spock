import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import iconPaper from "../../assets/images/icon-paper.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type PaperProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowSize: WindowSize;
};

function Paper({ state, action, dispatch, windowSize }: PaperProps) {
  function handlePaperIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    state.appState.playerChoice = "paper";
    dispatch({
      type: action.appAction.setPlayerChoice,
      payload: state,
    });
  }

  return (
    <IconWrapper
      state={state}
      windowSize={windowSize}
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
          windowSize={windowSize}
        />
      </div>
    </IconWrapper>
  );
}

export { Paper };
