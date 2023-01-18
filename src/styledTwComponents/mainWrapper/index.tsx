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
  w-full  
  p-6 
  
  z-0

  outline-double

`;

export { MainWrapper };
