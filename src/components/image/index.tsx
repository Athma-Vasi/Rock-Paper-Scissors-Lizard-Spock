import type { WindowSize } from "../../types";

import Image from "next/image";
import React from "react";

type MyImageProps = {
  windowSize: WindowSize;
  src: string;
  alt: string;
};

function MyImage({ windowSize: { width = 0 }, src, alt }: MyImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${
        width < 640
          ? "scale-90"
          : width < 768
          ? "scale-x-90"
          : width < 1024
          ? "scale-125"
          : width < 1280
          ? "scale-150"
          : "scale-150"
      } `}
    />
  );
}

export { MyImage };
