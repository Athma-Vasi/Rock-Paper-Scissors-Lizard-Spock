import type { WindowSize } from "../../types";
import React from "react";
import { BsPentagon } from "react-icons/bs";

type PentagonProps = {
  windowsize: WindowSize;
};

function Pentagon({ windowsize: { width = 0 } }: PentagonProps) {
  const scaleAndPosition =
    width < 400
      ? "top-[49%] left-[48.5%] scale-x-[12] scale-y-[11.5]"
      : width < 640
      ? "top-[48%] left-[48.5%] scale-x-[17] scale-y-[16]"
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
