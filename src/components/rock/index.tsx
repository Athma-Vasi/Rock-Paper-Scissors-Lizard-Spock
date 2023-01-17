import type { State, WindowSize } from "../../types";

import React from "react";
import iconRock from "../../assets/images/icon-rock.svg";
import { IconWrapper } from "../../styledTwComponents/iconWrapper";
import { MyImage } from "../image";

type RockProps = {
  state: State;
  windowSize: WindowSize;
};

function Rock({ state, windowSize }: RockProps) {
  return (
    <IconWrapper state={state} windowSize={windowSize} iconType="rock">
      <div
        className={`grid h-full w-full place-content-center rounded-full bg-white `}
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
