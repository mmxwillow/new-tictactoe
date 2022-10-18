const gameBoard = (() => {
    const gameboard = document.querySelector('.gameboard');

    const board = [
        ["X","",""],
        ["","",""],
        ["","","O"]
    ];

    const printBoard = () => {
        board.forEach((array, row) => {
            array.forEach((item, column) => {
                const box = document.createElement('div');

                box.id = `${row}${column}`;
                box.innerHTML = item;
                
                gameboard.appendChild(box);
            });
        });
    };

    return {printBoard};
})();
const displayController = (() => {

})();
const playerFactory = (name) => {

}
gameBoard.printBoard();