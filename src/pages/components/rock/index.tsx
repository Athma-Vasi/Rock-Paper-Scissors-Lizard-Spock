import Image from "next/image";
import React from "react";
import iconRock from "../../../assets/images/icon-rock.svg";

function Rock() {
  return (
    <div className="h-full w-full rounded-full bg-gradient-to-b from-rockGradientFrom to-rockGradientTo p-4 ">
      <div className="grid h-full w-full place-content-center rounded-full bg-white ">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={iconRock}
          alt="icon of a hand closed first representing rock"
        />
      </div>
    </div>
  );
}

export default Rock;
