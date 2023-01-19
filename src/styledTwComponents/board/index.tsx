import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type BoardProps = {
  state: State;
  windowsize: WindowSize;
};

const Board = tw.div<BoardProps>`
  
  h-full
  ${({ windowsize: { width = 0, height = 0 } }) =>
    width < 400 && height < 700
      ? "w-[290.4px]"
      : width < 400 && height < 850
      ? "w-[290.4px]"
      : width < 450 && height < 900
      ? "w-[371.22px]"
      : width < 450 && height < 950
      ? "w-[371.22px]"
      : width < 768 && height < 950
      ? "w-[419.7px]"
      : width < 1024 && height < 950
      ? "w-[452px]"
      : "w-[532.85px]"}
  relative
  
  row-start-2 row-end-[8]
  col-span-1
  
  grid
  grid-cols-[29]
  grid-rows-[26]

  ${({
    state: {
      appState: { isGameStarted },
    },
  }) => (isGameStarted ? "py-[59px] mb-16" : "py-8")}
  
  

  outline-dotted
`;

export { Board };

/**
  <div className="grid h-full w-full grid-cols-[29] grid-rows-[26] outline-dotted">
      
      <div className="col-start-[16] col-end-[25] row-start-[18] row-end-[26]">
        <Rock />
      </div>

      
      <div className="col-start-[21] col-end-[29] row-start-[9] row-end-[16]">
        <Paper />
      </div>

      
      <div className="col-start-[11] col-end-[18] row-start-1 row-end-[8]">
        <Scissors />
      </div>

      
      <div className="col-start-1 col-end-[9] row-start-[9] row-end-[16]">
        <Spock />
      </div>

      
      <div className="col-start-6 col-end-[13] row-start-[18] row-end-[26]">
        <Lizard />
      </div>
    </div>

 */
