let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generating a target number
const generateTarget = () => {
    let randomInteger = Math.floor(Math.random() * 10);
    return randomInteger;
}

// Comparing both guesses via absolute differences (custom function, not Math.abs())
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let humanDifference = 0;
    let computerDifference = 0;

    if (humanGuess !== '') {
        // Calculating the absolute difference between the human guess and the target number
        if (humanGuess >= targetNumber) {
            humanDifference = humanGuess - targetNumber;
        } else humanDifference = targetNumber - humanGuess;

        // Calculating the absolute difference between the computer guess and the target number
        if (computerGuess >= targetNumber) {
            computerDifference = computerGuess - targetNumber;
        } else computerDifference = targetNumber - computerGuess;

        // Comparing the absolute differences of the human and the computer guess with each others
        if (humanDifference <= computerDifference) {
            return true;
        } else return false;
    }

}

// Updating the winner's score after each round
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else computerScore += 1;
}

// Increasing the current round's number
const advanceRound = () => {
    currentRoundNumber += 1;
}
