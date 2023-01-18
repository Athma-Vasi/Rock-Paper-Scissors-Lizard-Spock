type State = {
  appState: {
    score: number;
    playerChoice: null | "rock" | "paper" | "scissors" | "lizard" | "spock";
    computerChoice: string | null;
    winner: string | null;
    isGameStarted: boolean;
    wasRulesClicked: boolean;
  };
  designState: {
    winnerColour: Colours | null;
  };
};

type Action = {
  appAction: {
    setScore: "setScore";
    setPlayerChoice: "setPlayerChoice";
    setComputerChoice: "setComputerChoice";
    setWinner: "setWinner";
    setIsGameStarted: "setIsGameStarted";
    setWasRulesClicked: "setWasRulesClicked";
    setAll: "setAll";
  };
  designAction: {
    setWinnerColour: "setWinnerColour";
  };
};

type Dispatch = {
  type:
    | "setScore"
    | "setPlayerChoice"
    | "setComputerChoice"
    | "setWinner"
    | "setIsGameStarted"
    | "setWasRulesClicked"
    | "setAll"
    | "setWinnerColour";
  payload: State;
};

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

type Choice = "rock" | "paper" | "scissors" | "lizard" | "spock";

type Winner = "player" | "computer" | "draw";

type Colours =
  | "hsl(349, 71%, 52%)"
  | "hsl(230, 89%, 62%)"
  | "hsl(39, 89%, 49%)"
  | "hsl(261, 73%, 60%)"
  | "hsl(189, 59%, 53%)";

type ColoursMap = Map<Choice, Colours>;

export {
  State,
  Action,
  Dispatch,
  WindowSize,
  Choice,
  Winner,
  Colours,
  ColoursMap,
};
