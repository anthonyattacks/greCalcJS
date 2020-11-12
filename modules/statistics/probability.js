
//Need for several functions on this page
function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};
//Delete post production

//When values can be repeated in the outcome
function multiPrinci(numOutcomes, numTimes) {
    return Math.pow(numOutcomes, numTimes);
}

//When a value cannot be repeated and the outcome must be in a particular order
function permut(numChoices, numCount) {
    return fact(numChoices) / (fact(numChoices - numCount))
}

//When a value cannot be repeated and the outcome need not be in any particular order
function combin(numChoices, numCount) {
    top = fact(numChoices);
    bottom = fact(numChoices - numCount) * fact(numCount);
    return top / bottom;
}

// P(X) = number of possible outcomes for x / number of total possible outcomes
function genProb(possOutOfN, totalPossOut) {
    return possOutOfN / totalPossOut;
}

//formula for two independent events -- P(A and B) = P(A) * P(B)
function twoIndEvents(possOutOfX, totalPossOutOfX, possOutOfY, totalPossOutOfY) {
    return genProb(possOutOfX, totalPossOutOfX) * genProb(possOutOfY, totalPossOutOfY);
}

function twoDepEvents(pick, quant1, quant2, total) {
    return genProb(quant1, total) * genProb(quant2, (total - pick));
}

//formula for either event a or event b -- P(A or B) = P(A) + P(B)
function orInde(possOutOfX, totalPossOutOfX, possOutOfY, totalPossOutOfY) {
    return genProb(possOutOfX, totalPossOutOfX) + genProb(possOutOfY, totalPossOutOfY)
}

//formula for either event a or event b when events might co-occur -- P(A or B) = P(A) + P(B) - P(A and B)
function orCoOccur(possOutOfX, totalPossOut, possOutOfY, crossOver) {
    return genProb(possOutOfX, totalPossOut) + genProb(possOutOfY, totalPossOut) - crossOver;
}

// console.log(genProb(1, 6)) // => .167...
// console.log(twoIndEvents(1, 6, 1, 6)) // => .028...
// console.log(twoDepEvents(1, 10, 9, 20)) // => .237...
// console.log(orInde(4, 52, 4, 52)) // => .154...
// console.log(orCoOccur(4, 52, 13, 1/52)) // => .308...