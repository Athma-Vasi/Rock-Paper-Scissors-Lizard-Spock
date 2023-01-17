import React from "react";
import Image from "next/image";
import iconLizard from "../../../assets/images/icon-lizard.svg";

function Lizard() {
  return (
    <div className="h-full w-full rounded-full bg-gradient-to-b from-lizardGradientFrom to-lizardGradientTo p-4 ">
      <div className="grid h-full w-full place-content-center rounded-full bg-white ">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconLizard}
          alt="icon of a hand with index and middle fingers extended and rest closed, representing scissors"
        />
      </div>
    </div>
  );
}

export default Lizard;
