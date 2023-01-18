import type { State, Action, Dispatch } from "../types";

const initialState: State = {
  appState: {
    score: 0,
    round: 0,
    playerChoice: null,
    computerChoice: null,
    winner: null,
    isGameStarted: false,
    isGameFinished: false,
    wasRulesClicked: false,
  },
};

const action: Action = {
  appAction: {
    setScore: "setScore",
    setRound: "setRound",
    setPlayerChoice: "setPlayerChoice",
    setComputerChoice: "setComputerChoice",
    setWinner: "setWinner",
    setIsGameStarted: "setIsGameStarted",
    setIsGameFinished: "setIsGameFinished",
    setWasRulesClicked: "setWasRulesClicked",
    setAll: "setAll",
  },
};

function reducer(state: State, dispatch: Dispatch) {
  //deep clone state
  const clone = structuredClone(state);
  const {
    appState: {
      score,
      round,
      playerChoice,
      computerChoice,
      winner,
      isGameStarted,
      isGameFinished,
      wasRulesClicked,
    },
  } = dispatch.payload;

  switch (dispatch.type) {
    //appstate
    case action.appAction.setScore: {
      clone.appState.score = score;
      return clone;
    }
    case action.appAction.setRound: {
      clone.appState.round = round;
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
    case action.appAction.setIsGameFinished: {
      clone.appState.isGameFinished = isGameFinished;
      return clone;
    }
    case action.appAction.setWasRulesClicked: {
      clone.appState.wasRulesClicked = wasRulesClicked;
      return clone;
    }
    case action.appAction.setAll: {
      clone.appState = dispatch.payload.appState;
      return clone;
    }

    default:
      return clone;
  }
}

export { initialState, reducer, action };
