import type { State, WindowSize } from "../../types";

import React from "react";
import iconPaper from "../../assets/images/icon-paper.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type PaperProps = {
  state: State;
  windowSize: WindowSize;
};

function Paper({ state, windowSize }: PaperProps) {
  return (
    <IconWrapper state={state} windowSize={windowSize} iconType="paper">
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white `}
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
