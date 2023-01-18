import { Choice, Winner } from "../../types";

function generateComputerChoice(): Choice {
  const choices: Array<Choice> = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock",
  ];
  const randomNumber = Math.floor(Math.random() * choices.length);

  let compChoice = choices[randomNumber];
  while (compChoice === undefined) compChoice = choices[randomNumber];

  return compChoice;
}

function generateWinner(playerChoice: Choice, computerChoice: Choice): Winner {
  let winner: "player" | "computer" | "draw" = "draw";

  if (playerChoice === "rock") {
    if (computerChoice === "scissors" || computerChoice === "lizard") {
      winner = "player";
    } else if (computerChoice === "paper" || computerChoice === "spock") {
      winner = "computer";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock" || computerChoice === "spock") {
      winner = "player";
    } else if (computerChoice === "scissors" || computerChoice === "lizard") {
      winner = "computer";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper" || computerChoice === "lizard") {
      winner = "player";
    } else if (computerChoice === "rock" || computerChoice === "spock") {
      winner = "computer";
    }
  }

  if (playerChoice === "lizard") {
    if (computerChoice === "paper" || computerChoice === "spock") {
      winner = "player";
    } else if (computerChoice === "rock" || computerChoice === "scissors") {
      winner = "computer";
    }
  }

  if (playerChoice === "spock") {
    if (computerChoice === "rock" || computerChoice === "scissors") {
      winner = "player";
    } else if (computerChoice === "paper" || computerChoice === "lizard") {
      winner = "computer";
    }
  }

  return winner;
}

export { generateComputerChoice, generateWinner };
