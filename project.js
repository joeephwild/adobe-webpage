const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const value = parseFloat(depositAmount);

    if (isNaN(value) || value <= 0) {
      console.log("invalid amount pls try again");
    }else{
        return value
    }
  }
};

const numberOfLines = () => {
    while (true) {
      const linePrompt = prompt("Enter number of Lines to bet on (1-3) ");
      const line = parseFloat(linePrompt);
  
      if (isNaN(line) || line <= 0 || line > 3) {
        console.log("invalid number of lines");
      }else{
          return line
      }
    }
  };

  const getBet = (balance, lines) => {
    while (true) {
      const betPrompt = prompt("Enter bet ");
      const bet = parseFloat(betPrompt);
  
      if (isNaN(bet) || bet <= 0 || bet > balance / lines) {
        console.log("invalid number of lines");
      }else{
          return bet;
      }
    }
  }

let depositValue = deposit();
console.log(depositValue)
const lineValue = numberOfLines();
const bets = getBet(depositValue, lineValue);
console.log(lineValue)
console.log(bets)
