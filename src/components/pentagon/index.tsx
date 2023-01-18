import type { WindowSize } from "../../types";
import React from "react";
import { BsPentagon } from "react-icons/bs";

type PentagonProps = {
  windowSize: WindowSize;
};

function Pentagon({ windowSize: { width = 0 } }: PentagonProps) {
  const scaleAndPosition =
    width < 640
      ? "top-[45%] left-[48.5%] scale-x-[16.5] scale-y-[19.5]"
      : width < 768
      ? "top-[45%] left-[48.5%] scale-x-[19] scale-y-[21] "
      : width < 1024
      ? "top-[45%] left-[48.5%] scale-x-[21] scale-y-[22]"
      : "top-[46%] left-[48.5%] scale-x-[25] scale-y-[25]";

  return (
    <BsPentagon className={`${scaleAndPosition} absolute z-10 text-pentagon`} />
  );
}

export { Pentagon };
