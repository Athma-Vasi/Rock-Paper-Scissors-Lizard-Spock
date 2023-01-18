import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type IconWrapperProps = {
  state: State;
  windowsize: WindowSize;
  icontype: "rock" | "paper" | "scissors" | "lizard" | "spock";
};

const IconWrapper = tw.div<IconWrapperProps>`
  rounded-full
  z-30
  ${({
    state: {
      appState: { isGameStarted },
    },
  }) =>
    isGameStarted
      ? ""
      : "cursor-pointer active:shadow-none active:translate-y-[2px] active:duration-150"}
  shadow-md shadow-slate-900  

  

  bg-gradient-to-b
  ${({ icontype }) =>
    icontype === "rock"
      ? "from-rockGradientFrom to-rockGradientTo col-start-[16] col-end-[25] row-start-[18] row-end-[26]"
      : icontype === "paper"
      ? "from-paperGradientFrom to-paperGradientTo col-start-[20] col-end-[28] row-start-[7] row-end-[14]"
      : icontype === "scissors"
      ? "from-scissorsGradientFrom to-scissorsGradientTo col-start-[11] col-end-[18] row-start-1 row-end-[8]"
      : icontype === "lizard"
      ? "from-lizardGradientFrom to-lizardGradientTo col-start-6 col-end-[13] row-start-[18] row-end-[26]"
      : "from-spockGradientFrom to-spockGradientTo col-start-2 col-end-[10] row-start-[7] row-end-[14]"}  
  

  ${({ windowsize: { width = 0 } }) =>
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
