import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import iconLizard from "../../assets/images/icon-lizard.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type LizardProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowsize: WindowSize;
};

function Lizard({ state, action, dispatch, windowsize }: LizardProps) {
  function handleLizardIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    state.appState.playerChoice = "lizard";
    dispatch({
      type: action.appAction.setPlayerChoice,
      payload: state,
    });
  }

  return (
    <IconWrapper
      state={state}
      windowsize={windowsize}
      iconType="lizard"
      onClick={handleLizardIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 active:shadow-slate-300`}
      >
        <MyImage
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconLizard}
          alt="icon of a hand closed first representing Lizard"
          windowsize={windowsize}
        />
      </div>
    </IconWrapper>
  );
}

export { Lizard };
