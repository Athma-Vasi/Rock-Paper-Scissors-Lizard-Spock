import type {
  State,
  Action,
  Dispatch,
  Choice,
  Colours,
  ColoursMap,
} from "../types";

const initialState: State = {
  appState: {
    score: 0,
    playerChoice: null,
    computerChoice: null,
    winner: null,
    isGameStarted: false,
    wasRulesClicked: false,
  },
  designState: {
    winnerColour: null,
  },
};

const coloursMap: ColoursMap = new Map([
  ["rock", "text-rockText"],
  ["paper", "text-paperText"],
  ["scissors", "text-scissorsText"],
  ["lizard", "text-lizardText"],
  ["spock", "text-spockText"],
]);

const action: Action = {
  appAction: {
    setScore: "setScore",
    setPlayerChoice: "setPlayerChoice",
    setComputerChoice: "setComputerChoice",
    setWinner: "setWinner",
    setIsGameStarted: "setIsGameStarted",
    setWasRulesClicked: "setWasRulesClicked",
    setAll: "setAll",
  },
  designAction: {
    setWinnerColour: "setWinnerColour",
  },
};

function reducer(state: State, dispatch: Dispatch) {
  //deep clone state
  const clone = structuredClone(state);
  const {
    appState: {
      score,
      playerChoice,
      computerChoice,
      winner,
      isGameStarted,
      wasRulesClicked,
    },
    designState: { winnerColour },
  } = dispatch.payload;

  switch (dispatch.type) {
    //appstate
    case action.appAction.setScore: {
      clone.appState.score = score;
      return clone;
    }
    case action.appAction.setPlayerChoice: {
      clone.appState.playerChoice = playerChoice;
      return clone;
    }
    case action.appAction.setComputerChoice: {
      clone.appState.computerChoice = computerChoice;
      return clone;
    }
    case action.appAction.setWinner: {
      clone.appState.winner = winner;
      return clone;
    }
    case action.appAction.setIsGameStarted: {
      clone.appState.isGameStarted = isGameStarted;
      return clone;
    }
    case action.appAction.setWasRulesClicked: {
      clone.appState.wasRulesClicked = wasRulesClicked;
      return clone;
    }
    case action.appAction.setAll: {
      clone.appState = dispatch.payload.appState;
      clone.designState = dispatch.payload.designState;
      return clone;
    }
    //designstate
    case action.designAction.setWinnerColour: {
      clone.designState.winnerColour = winnerColour;
      return clone;
    }

    default:
      return clone;
  }
}

export { initialState, reducer, action, coloursMap };
