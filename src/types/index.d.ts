type State = {
  appState: {
    score: number;
    playerChoice: Choice | null;
    computerChoice: Choice | null;
    winner: Winner | null;
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
  | "text-rockText"
  | "text-paperText"
  | "text-scissorsText"
  | "text-lizardText"
  | "text-spockText";

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
