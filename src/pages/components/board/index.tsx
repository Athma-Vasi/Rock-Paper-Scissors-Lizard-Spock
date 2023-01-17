import React from "react";
import Lizard from "../lizard";
import Paper from "../paper";
import Rock from "../rock";
import Scissors from "../scissors";
import Spock from "../spock";

// type BoardProps = {
//   state: any;
// };

function Board() {
  return <div className="grid h-full w-full outline-dotted"></div>;
}
// 6 across white 2 across colour
//w:29, h:26
export default Board;

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
