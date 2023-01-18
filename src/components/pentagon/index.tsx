import type { WindowSize } from "../../types";
import React from "react";
import { BsPentagon } from "react-icons/bs";

type PentagonProps = {
  windowSize: WindowSize;
};

function Pentagon({ windowSize: { width = 0 } }: PentagonProps) {
  const pentagonClass =
    width < 768
      ? "scale-[18] top-[45%] left-[48.5%] scale-x-[18] scale-y-[19.5] "
      : "";

  return (
    <BsPentagon className={`${pentagonClass} absolute z-10 text-pentagon`} />
  );
}

export { Pentagon };
