import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import iconSpock from "../../assets/images/icon-spock.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type SpockProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowsize: WindowSize;
};

function Spock({ state, action, dispatch, windowsize }: SpockProps) {
  function handleSpockIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    state.appState.playerChoice = "spock";
    dispatch({
      type: action.appAction.setPlayerChoice,
      payload: state,
    });
  }

  return (
    <IconWrapper
      state={state}
      windowsize={windowsize}
      iconType="spock"
      onClick={handleSpockIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 active:shadow-slate-300`}
      >
        <MyImage // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconSpock}
          alt="icon of a hand closed first representing Spock"
          windowsize={windowsize}
        />
      </div>
    </IconWrapper>
  );
}

export { Spock };
