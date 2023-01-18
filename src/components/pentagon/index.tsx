import type { WindowSize } from "../../types";
import React from "react";
import { BsPentagon } from "react-icons/bs";

type PentagonProps = {
  windowSize: WindowSize;
};

function Pentagon({ windowSize: { width = 0 } }: PentagonProps) {
  const scaleAndPosition =
    width < 640
      ? "top-[47%] left-[48.5%] scale-x-[17] scale-y-[17]"
      : width < 768
      ? "top-[48%] left-[48.5%] scale-x-[19] scale-y-[18] "
      : width < 1024
      ? "top-[49%] left-[48.5%] scale-x-[20] scale-y-[18]"
      : "top-[49%] left-[48.5%] scale-x-[25] scale-y-[20.5]";

  return (
    <BsPentagon className={`${scaleAndPosition} absolute z-10 text-pentagon`} />
  );
}

export { Pentagon };
