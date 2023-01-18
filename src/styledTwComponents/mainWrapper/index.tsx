import tw from "tailwind-styled-components";
import type { State } from "../../types";

type MainWrapperProps = {
  state: State;
};

const MainWrapper = tw.div<MainWrapperProps>`
  grid
  grid-cols-1
  grid-rows-[9]

  h-screen
  w-full
  p-6

  bg-gradient-to-b
  from-radialGradientFrom
  to-radialGradientTo
  text-white
  
  z-0


`;

export { MainWrapper };
