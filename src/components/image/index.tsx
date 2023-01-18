import type { WindowSize } from "../../types";

import Image from "next/image";
import React from "react";

type MyImageProps = {
  windowsize: WindowSize;
  src: string;
  alt: string;
};

function MyImage({ windowsize: { width = 0 }, src, alt }: MyImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${
        width < 400
          ? "scale-75"
          : width < 640
          ? "scale-90"
          : width < 768
          ? "scale-100"
          : width < 1024
          ? "scale-100"
          : width < 1280
          ? "scale-125"
          : "scale-125"
      } `}
    />
  );
}

export { MyImage };
