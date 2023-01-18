function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomNumber = Math.floor(Math.random() * choices.length);

  let compChoice = choices[randomNumber];
  while (compChoice === undefined) compChoice = choices[randomNumber];

  return compChoice;
}

export { generateComputerChoice };
