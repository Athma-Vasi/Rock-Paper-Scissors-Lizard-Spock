import tw from "tailwind-styled-components";
import type { State, WindowSize } from "../../types";

type BoardProps = {
  state: State;
  windowsize: WindowSize;
};

const Board = tw.div<BoardProps>`
  h-full
  w-full
  relative
  
  row-start-2 row-end-[8]
  col-span-1
    
  grid
  grid-cols-[29]
  grid-rows-[26]
  py-36

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
