import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import iconRock from "../../assets/images/icon-rock.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type RockProps = {
  state: State;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
  windowSize: WindowSize;
};

function Rock({ state, action, dispatch, windowSize }: RockProps) {
  function handleRockIconClick() {
    // event: React.MouseEvent<HTMLDivElement, MouseEvent>
    state.appState.playerChoice = "rock";
    dispatch({
      type: action.appAction.setPlayerChoice,
      payload: state,
    });
  }

  return (
    <IconWrapper
      state={state}
      windowSize={windowSize}
      iconType="rock"
      onClick={handleRockIconClick}
    >
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-500 active:shadow-slate-300`}
      >
        <MyImage
          windowSize={windowSize}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconRock}
          alt="icon of a hand closed first representing rock"
        />
      </div>
    </IconWrapper>
  );
}

export { Rock };
