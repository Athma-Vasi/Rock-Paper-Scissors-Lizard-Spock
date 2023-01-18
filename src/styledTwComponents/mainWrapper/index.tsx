import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type MainWrapperProps = {
  state: State;
  windowsize: WindowSize;
};

const MainWrapper = tw.div<MainWrapperProps>`
  grid
  grid-cols-1
  grid-rows-[9]

  h-full
  w-full  
  p-6 

  bg-gradient-to-b
  from-radialGradientFrom
  to-radialGradientTo
  
  z-0

  outline-double

  relative

`;

export { MainWrapper };
