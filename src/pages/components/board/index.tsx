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
  return (
    <div className="grid h-full w-full grid-cols-[32] grid-rows-[32] outline-dotted">
      {/* rock */}
      <div className="col-start-[19] col-end-[29] row-start-[22] row-end-[32]">
        <Rock />
      </div>

      {/* paper */}
      <div className="col-start-[22] col-end-[32] row-start-[10] row-end-[19]">
        <Paper />
      </div>

      {/* scissors */}
      <div className="col-start-[12] col-end-[21] row-start-1 row-end-[10]">
        <Scissors />
      </div>

      {/* spock */}
      <div className="col-start-1 col-end-[11] row-start-[10] row-end-[19]">
        <Spock />
      </div>

      {/* lizard */}
      <div className="col-start-5 col-end-[14] row-start-[22] row-end-[32]">
        <Lizard />
      </div>
    </div>
  );
}

export default Board;
