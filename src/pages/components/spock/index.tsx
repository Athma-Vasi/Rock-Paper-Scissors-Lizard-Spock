import React from "react";
import Image from "next/image";
import iconSpock from "../../../assets/images/icon-spock.svg";

function Spock() {
  return (
    <div className="h-full w-full rounded-full bg-gradient-to-b from-spockGradientFrom to-spockGradientTo p-4 ">
      <div className="grid h-full w-full place-content-center rounded-full bg-white ">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconSpock}
          alt="icon of a hand with index and middle fingers extended and rest closed, representing scissors"
        />
      </div>
    </div>
  );
}

export default Spock;
