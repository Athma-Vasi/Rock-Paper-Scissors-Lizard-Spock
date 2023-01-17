import type { State, WindowSize } from "../../types";

import React from "react";
import iconSpock from "../../assets/images/icon-spock.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type SpockProps = {
  state: State;
  windowSize: WindowSize;
};

function Spock({ state, windowSize }: SpockProps) {
  return (
    <IconWrapper state={state} windowSize={windowSize} iconType="spock">
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white `}
      >
        <MyImage // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconSpock}
          alt="icon of a hand closed first representing Spock"
          windowSize={windowSize}
        />
      </div>
    </IconWrapper>
  );
}

export { Spock };
