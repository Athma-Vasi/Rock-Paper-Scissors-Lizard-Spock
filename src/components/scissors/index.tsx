import type { State, WindowSize } from "../../types";

import React from "react";
import iconScissors from "../../assets/images/icon-scissors.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type ScissorsProps = {
  state: State;
  windowSize: WindowSize;
};

function Scissors({ state, windowSize }: ScissorsProps) {
  return (
    <IconWrapper state={state} windowSize={windowSize} iconType="scissors">
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white shadow-inner shadow-slate-400`}
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
