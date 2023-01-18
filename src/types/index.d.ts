type State = {
  appState: {
    score: number;
    round: number;
    playerChoice: null | "rock" | "paper" | "scissors" | "lizard" | "spock";
    computerChoice: string | null;
    winner: string | null;
    isGameStarted: boolean;
    isGameFinished: boolean;
    wasRulesClicked: boolean;
  };
};

type Action = {
  appAction: {
    setScore: "setScore";
    setRound: "setRound";
    setPlayerChoice: "setPlayerChoice";
    setComputerChoice: "setComputerChoice";
    setWinner: "setWinner";
    setIsGameStarted: "setIsGameStarted";
    setIsGameFinished: "setIsGameFinished";
    setWasRulesClicked: "setWasRulesClicked";
    setAll: "setAll";
  };
};

type Dispatch = {
  type:
    | "setScore"
    | "setRound"
    | "setPlayerChoice"
    | "setComputerChoice"
    | "setWinner"
    | "setIsGameStarted"
    | "setIsGameFinished"
    | "setWasRulesClicked"
    | "setAll";
  payload: State;
};

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export { State, Action, Dispatch, WindowSize };
