'use strict'

function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function resetNums() {
    gNums = []
    for (var i = 0; i < gNumsRange; i++) {
        gNums.push(i + 1)
    }
}

function hideShowElements(selectors, shouldOpen = true) {
    for(var i = 0; i < selectors.length; i++){
        const selector = selectors[i]
        const el = document.querySelector(selector)
        shouldOpen ? el.classList.add('hidden') : el.classList.remove('hidden')
    } 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getAllEmptyCell(board){
    const emptyCells = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            const cell = gBoard[i][j]
            if(cell) emptyCells.push({i, j})
        }
    }

    return emptyCells
}

function getClassName(location) {
    const cellClass = 'cell-' + location.i + '-' + location.j
    return cellClass
}

function renderCell(location, value) {
    const cellSelector = '.' + getClassName(location) 
    const elCell = document.querySelector(cellSelector)
    elCell.innerHTML = value
    
}

function drawCell(cells) {
    const drawIdx = getRandomInt(0, cells.length)
    const cell = cells.splice(drawIdx, 1)[0]
    return cell
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getCellCoord(strCellId){
    const parts = strCellId.split('-')
    return {i: +parts[1], j: +parts[2]}
}

function convertTime(second) {
    var minute = Math.floor(second / 60)
    second = second % 60
    const strSecond = second < 10 ? '0' + second : second
    const strMinutes = minute < 10 ? '0' + minute : minute 

    return strMinutes + ':' + strSecond
}