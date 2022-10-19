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

    const checkForWin = () => {
        for(let i=0; i<3; i++){
            if(board[i][0] == board[i][1] && board[i][1] === board[i][2]  && board[i][2] != "") return board[i][2];
            if(board[0][i] == board[1][i] && board[1][i] === board[2][i]  && board[2][i] != "") return board[2][i];
        }
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] != "") return board[2][2];
        if(board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[0][2] !="") return board[0][2];
        return checkForDraw();
    }

    const checkForDraw = () => {
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(!board[i][j]) return;
            }
        }
        return true;
    }

    const results = () => {
        let marker = checkForWin();
        switch(marker){
            case "❌":
                console.log(`${player1.name} won`);
                break;
            case "⭕":
                console.log(`${player2.name} won`);
                break;
            case true:
                console.log("It's a draw");
                break;
        }
    }

    return {board, printBoard, currentPlayer, results};
})();
const displayController = (() => {
    const addMark = (e) => {
        if(!e.currentTarget.innerHTML) {
            let row = e.currentTarget.id.slice(0,1);
            let column = e.currentTarget.id.slice(1,2);
            let marker = gameBoard.currentPlayer().mark;
            gameBoard.board[row][column] = marker;
            e.currentTarget.innerHTML = marker;
            gameBoard.results();
        }
    }

    return{addMark}
})();
gameBoard.printBoard();