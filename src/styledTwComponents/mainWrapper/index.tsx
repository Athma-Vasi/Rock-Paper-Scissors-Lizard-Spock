import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type MainWrapperProps = {
  state: State;
  windowSize: WindowSize;
};

const MainWrapper = tw.div<MainWrapperProps>`
  grid
  grid-cols-1
  grid-rows-[9]

  h-screen  
  p-6 
  
  z-0

  outline-double

  ${({ windowSize: { width = 0 } }) =>
    width < 640
      ? "w-full"
      : width < 768
      ? "w-[full]"
      : width < 1024
      ? "w-full"
      : width < 1280
      ? "w-full"
      : "w-full"}

`;

export { MainWrapper };
