import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type GameBoardProps = {
  state: State;
  windowSize: WindowSize;
};

const GameBoard = tw.div<GameBoardProps>`
  h-full
  w-full

  grid
  grid-cols-[29]
  grid-rows-[26]
  p-6

  outline-dotted
`;

export { GameBoard };

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
