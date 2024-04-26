const prompt = require("prompt-sync")();

const ROWS = 3
const COLS = 3

const SYMBOL_COUNT = {
    'A': 2,
    'B': 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    'A': 5,
    'B': 4,
    "C": 3,
    "D": 2
}

// deposit
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numDepositAmount = parseFloat(depositAmount)

        if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
            console.log("Number is Invalid, Please try again.");
        } else {
            return numDepositAmount
        }
    }
}

// Determine Number of Lines to bet
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on ( 1-3 ): ")
        const numberOfLines = parseFloat(lines)

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, Please try again.");
        } else {
            return numberOfLines
        }
    }
}

// Collect a bet amount
const getBetAmount = (bal, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet)

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > bal / lines) {
            console.log("Invalid bet, Please try again.");
        } else {
            return numberBet
        }
    }
}

//  spin
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }

    const reels = []
    for (let i = 0; i < COLS; i++) {
        reels.push([])
        const reelSymbols = [...symbols]
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            // console.log(reelSymbols);
            // console.log("randomIndex", randomIndex);
            const selectedSymbol = reelSymbols[randomIndex]
            // console.log("selectedSymbol", selectedSymbol);
            reels[i].push(selectedSymbol)
            // console.log("reels[i].push(selectedSymbol)", reels[i].push(selectedSymbol));
            reelSymbols.splice(randomIndex, 1)
            // console.log("reelSymbols.splice(randomIndex, 1)", reelSymbols.splice(randomIndex, 1));
        }
    }
    return reels
}

const transpose = (reels) => {
    const rows = []

    for (let i = 0; i < ROWS; i++) {
        rows.push([])
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = ""
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row]
        let allSame = true

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false
                break
            }
        }
        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }
    return winnings
}

const game = () => {
    let balance = deposit()

    while (true) {
        console.log(`You have a balance Rs.${balance}`);
        const line = getNumberOfLines()
        const bet = getBetAmount(balance, line)
        balance -= bet * line
        const reels = spin()
        const rows = transpose(reels)
        printRows(rows)
        const winnings = getWinnings(rows, bet, line)
        balance += winnings
        console.log(`You Won Rs. ${winnings}`);

        if (balance <= 0) {
            console.log("You ran out of money");
            break
        }
        const playAgain = prompt("Do you want to play again (y/n)? ")
        if (playAgain != "y") break
    }
}

game()