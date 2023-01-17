import tw from "tailwind-styled-components";

type MainWrapperProps = {
  state: any;
};

const MainWrapper = tw.div<MainWrapperProps>`
  grid
  h-screen
  w-full
  grid-cols-1
  grid-rows-[9]
  bg-gradient-to-b
  from-radialGradientFrom
  to-radialGradientTo
  p-6
  text-white
  outline-dotted



`;

export { MainWrapper };
