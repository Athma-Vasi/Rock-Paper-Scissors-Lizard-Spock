import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type IconWrapperProps = {
  state: State;
  windowSize: WindowSize;
  iconType: "rock" | "paper" | "scissors" | "lizard" | "spock";
};

const IconWrapper = tw.div<IconWrapperProps>`
  rounded-full
  z-30
  cursor-pointer
  shadow-md shadow-slate-900  

  active:shadow-none
  active:translate-y-[2px]
  active:duration-150

  bg-gradient-to-b
  ${({ iconType }) =>
    iconType === "rock"
      ? "from-rockGradientFrom to-rockGradientTo col-start-[16] col-end-[25] row-start-[18] row-end-[26]"
      : iconType === "paper"
      ? "from-paperGradientFrom to-paperGradientTo col-start-[21] col-end-[29] row-start-[9] row-end-[16]"
      : iconType === "scissors"
      ? "from-scissorsGradientFrom to-scissorsGradientTo col-start-[11] col-end-[18] row-start-1 row-end-[8]"
      : iconType === "lizard"
      ? "from-lizardGradientFrom to-lizardGradientTo col-start-6 col-end-[13] row-start-[18] row-end-[26]"
      : "from-spockGradientFrom to-spockGradientTo col-start-1 col-end-[9] row-start-[9] row-end-[16]"}  
  

  ${({ windowSize: { width = 0 } }) =>
    width < 400
      ? "h-[75px] w-[75px] p-2"
      : width < 640
      ? "h-[100px] w-[100px] p-3"
      : width < 768
      ? "h-[115px] w-[115px] p-3"
      : width < 1024
      ? "h-[125px] w-[125px] p-4"
      : width < 1280
      ? "h-[150px] w-[150px] p-5"
      : "h-[150px] w-[150px] p-5"}
  
`;

export { IconWrapper };
