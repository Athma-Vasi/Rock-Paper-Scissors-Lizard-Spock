import type { State, WindowSize } from "../../types";

import React from "react";
import Image from "next/image";
import imageRules from "../../assets/images/image-rules.svg";

type RulesProps = {
  state: State;
  windowSize: WindowSize;
};

function Rules({
  state: {
    appState: { wasRulesClicked },
  },
  windowSize: { width = 0 },
}: RulesProps) {
  return wasRulesClicked ? (
    <div className="">
      <Image
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src={imageRules}
        alt="diagram of rules explaining which icon beats the other"
      />
    </div>
  ) : (
    <div className="col-span-1 row-span-1 grid h-full w-full place-content-center p-4 outline-dashed">
      <h2 className="w-full cursor-pointer rounded-lg border-2 border-white py-2 px-8 text-2xl tracking-widest">
        RULES
      </h2>
    </div>
  );
}

export default Rules;
