import type { WindowSize } from "../../types";
import React from "react";
import { BsPentagon } from "react-icons/bs";

type PentagonProps = {
  windowsize: WindowSize;
};

function Pentagon({ windowsize: { width = 0, height = 0 } }: PentagonProps) {
  const scaleAndPosition =
    width < 400 && height < 700 // iphone resolutions
      ? "top-[46%] left-[45.5%] scale-x-[12] scale-y-[11]"
      : width < 400 && height < 850
      ? "top-[43%] left-[45.5%] scale-x-[12] scale-y-[16]"
      : width < 450 && height < 900
      ? "top-[44%] left-[47%] scale-x-[16] scale-y-[20]"
      : width < 450 && height < 950
      ? "top-[42%] left-[47%] scale-x-[14] scale-y-[20]"
      : width < 640 // desktop resolutions
      ? "top-[43%] left-[45.5%] scale-x-[16] scale-y-[21]"
      : width < 768
      ? "top-[44%] left-[47%] scale-x-[17] scale-y-[22] "
      : width < 1024
      ? "top-[44%] left-[47%] scale-x-[19] scale-y-[23]"
      : "top-[46%] left-[48%] scale-x-[23] scale-y-[24]";

  return (
    <BsPentagon className={`${scaleAndPosition} absolute z-10 text-pentagon`} />
  );
}

export { Pentagon };
