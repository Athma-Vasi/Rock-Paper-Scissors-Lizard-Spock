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

  ${
    ({ windowsize: { width = 0, height = 0 } }) =>
      width < 400 && height < 700 //iphone SE & iphone minis
        ? "w-[290.4px] h-[600px]"
        : width < 400 && height < 850 // iphone X/XS/11 Pro/12/13+ Pro
        ? "w-[290.4px] h-[750px]"
        : width < 450 && height < 900 // iphone XR/11/11 Pro Max
        ? "w-[371.22px] h-[825px]"
        : width < 450 && height < 950 //iphone 12/13 Pro Max
        ? "w-[371.22px] h-[875px]"
        : width < 768 && height < 950
        ? "w-[419.7px] h-[900px]"
        : width < 1024 && height < 950
        ? "w-[452px] h-[900px]"
        : "w-[532.85px] h-[900px]" // desktop resolutions
  }
  w-full  
  py-6 

  bg-gradient-to-b
  from-radialGradientFrom
  to-radialGradientTo
  
  z-0

  relative

`;

export { MainWrapper };
