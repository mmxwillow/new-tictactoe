const playerFactory = (name, mark) => {
    return {name, mark}
}
const gameBoard = (() => {
    const gameboard = document.querySelector('.gameboard');

    const player1 = playerFactory('player1','❌');
    const player2 = playerFactory('player2','⭕');

    let turn = -1;

    const board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    const printBoard = () => {
        board.forEach((array, row) => {
            array.forEach((item, column) => {
                const box = document.createElement('div');

                box.id = `${row}${column}`;
                box.innerHTML = item;
                box.addEventListener('click', displayController.addMark);
                
                gameboard.appendChild(box);
            });
        });
    };

    const currentPlayer = () => {
        turn++;
        return (turn % 2 == 0) ? player1 : player2;
    }

    return {board, printBoard, currentPlayer};
})();
const displayController = (() => {
    const addMark = (e) => {
        if(!e.currentTarget.innerHTML) {
            let row = e.currentTarget.id.slice(0,1);
            let column = e.currentTarget.id.slice(1,2);
            let marker = gameBoard.currentPlayer().mark;
            gameBoard.board[row][column] = marker;
            e.currentTarget.innerHTML = marker;
        }
    }

    return{addMark}
})();
gameBoard.printBoard();