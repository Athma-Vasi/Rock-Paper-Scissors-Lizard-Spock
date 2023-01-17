import type { State, WindowSize } from "../../types";

import React from "react";
import iconLizard from "../../assets/images/icon-lizard.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type LizardProps = {
  state: State;
  windowSize: WindowSize;
};

function Lizard({ state, windowSize }: LizardProps) {
  return (
    <IconWrapper state={state} windowSize={windowSize} iconType="lizard">
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white `}
      >
        <MyImage
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconLizard}
          alt="icon of a hand closed first representing Lizard"
          windowSize={windowSize}
        />
      </div>
    </IconWrapper>
  );
}

export { Lizard };
