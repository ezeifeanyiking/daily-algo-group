function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());

function diceGameSimulation(numSimulations) {
  const results = [];
  for (let i = 0; i < numSimulations; i++) {
    const Dice1 = rollDice();
    const Dice2 = rollDice();
    const Sum = Dice1 + Dice2;
    let result = "";
    if (Sum === 7 || Sum === 11) {
      result = "win";
    } else if (Sum === 2 || Sum === 3 || Sum === 12) {
      result = "loss";
    } else {
      result = "roll again";
    }
    results.push({ Dice1, Dice2, Sum, result });
  }
  return results;
}

console.log(diceGameSimulation(5));
