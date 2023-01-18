import type { Action, Dispatch, State, WindowSize } from "../../types";

import React from "react";
import Image from "next/image";
import imageRulesBonus from "../../assets/images/image-rules-bonus.svg";
import { AiOutlineClose } from "react-icons/ai";

type RulesProps = {
  state: State;
  windowsize: WindowSize;
  action: Action;
  dispatch: React.Dispatch<Dispatch>;
};

function Rules({
  state,
  action,
  dispatch,
  windowsize: { width = 0 },
}: RulesProps) {
  function handleRulesClick() {
    // event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
    state.appState.wasRulesClicked = true;
    dispatch({
      type: action.appAction.setWasRulesClicked,
      payload: state,
    });
  }

  function handleRulesCloseIconClick() {
    // event: React.MouseEvent<SVGElement, MouseEvent>
    state.appState.wasRulesClicked = false;
    dispatch({
      type: action.appAction.setWasRulesClicked,
      payload: state,
    });
  }

  const {
    appState: { wasRulesClicked },
  } = state;

  return wasRulesClicked ? (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-around bg-gradient-to-b from-radialGradientFrom to-radialGradientTo p-8">
      <h2 className="text-2xl tracking-widest text-slate-300">RULES</h2>
      <Image
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src={imageRulesBonus}
        alt="diagram of rules explaining which icon beats the other"
      />
      <AiOutlineClose
        className="cursor-pointer text-4xl text-slate-300"
        onClick={handleRulesCloseIconClick}
      />
    </div>
  ) : (
    <div className="col-span-1 row-start-[8] row-end-[9] grid h-full w-full place-content-center p-4 outline-dashed">
      <h2
        className="w-full cursor-pointer rounded-lg border-2 border-headerOutline py-2 px-8 text-2xl tracking-widest"
        onClick={handleRulesClick}
      >
        RULES
      </h2>
    </div>
  );
}

export default Rules;
