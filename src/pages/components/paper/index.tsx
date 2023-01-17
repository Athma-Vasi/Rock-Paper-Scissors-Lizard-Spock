import React from "react";
import iconPaper from "../../../assets/images/icon-paper.svg";
import Image from "next/image";

function Paper() {
  return (
    <div className="h-full w-full rounded-full bg-gradient-to-b from-paperGradientFrom to-paperGradientTo p-4 ">
      <div className="grid h-full w-full place-content-center rounded-full bg-white ">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconPaper}
          alt="icon of a hand with fingers spread representing paper"
        />
      </div>
    </div>
  );
}

export default Paper;
