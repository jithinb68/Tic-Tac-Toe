function isValidTicTacTow(patternArray) {
    // Handle false cases

    // 1. Both win case
    let [xWin, oWin] = getWinCounts(patternArray);

    if(xWin > 0 && oWin > 0) return false;

    // 2. X greater than O by more than 1 OR 0 is greater than X
    let countValid = checkIfCountIsValid(patternArray, xWin, oWin);
    if(!countValid) return false;

    return true
}

function getWinCounts(patternArray) {
    let x = 0;
    let o = 0;
    patternArray.forEach(element => {
        checkForRowWin(element);
    });
    for (let charPos = 0; charPos < 3; charPos++) {
        checkForColumnWin(charPos, patternArray)
    }
    checkForDiagonalWin()

    function checkForRowWin(pattern) {
        if (pattern === 'OOO') {
            o++;
        }
        if (pattern === 'XXX') {
            x++;
        }
    }
    
    function checkForColumnWin(charPos) {
        const firstRowChar = patternArray[0][charPos];
        // check if same charecters occurs for item 2 and item 3
        if (patternArray[1][charPos] === firstRowChar && patternArray[2][charPos] === firstRowChar) {
            if(firstRowChar === 'X') {
                x++;
            }  else {
                o++;
            }
        }
    }
    
    function checkForDiagonalWin() {
        let middleRowChar = patternArray[1][1];
         // check if same charecters occurs for diagonal values
        if ((patternArray[0][0] === middleRowChar && patternArray[2][2] === middleRowChar) || (patternArray[0][2] === middleRowChar && patternArray[2][0] === middleRowChar)) {
            if(middleRowChar === 'X') {
                x++;
            }  else {
                o++;
            }
        }
    }

    return[x, o];
}

function checkIfCountIsValid(patternArray, xWin, oWin) {
    let xCount = 0;
    let oCount = 0;
    // NEED VALUE OF X - WIN AND O - WIN
    for (const pattern of patternArray) {
        for (const item of pattern) {
            if(item === 'X') {
                xCount++
            }
            if(item === 'O') {
                oCount++
            }
        }
    }
    if(xCount - oCount > 1 || oCount > xCount || (xWin > 0 && oCount === xCount) || (oWin > 0 && xCount < oCount)) {
        return false
    }
    return true
}

// console.log(isValidTicTacTow(["XXX","OXO","OXO"]))

console.log(isValidTicTacTow(["XXX","OO ","O  "]))