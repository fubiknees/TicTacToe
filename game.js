// alert("Hello world");

// const game = (function(){
    let playerOne; //establishing player objects
    let playerTwo; //establishing player objects
// })

GameBoard = (function() {
    const gameboard = ["","","","","","", "", "", ""]
    return {gameboard}
})();

function createPlayer(name,symbol){ //factory function used to create new player objects
    return {
            name,
            symbol
           };
}




// const displayController = (function() {
    
    // const nameInputs = document.querySelectorAll('inputs'); //pulls all player names from inputs 
    // const playerNames = []; //array created to receive names that were input '
    const startbtn = document.querySelector('#start-btn');
    startbtn.addEventListener('click', () => {
        const inputOne = document.getElementById('player-one').value; //links to respective input
        const playerOneName = inputOne;
        console.log(playerOneName);
        const inputTwo = document.getElementById('player-two').value; //links to respective input
        const playerTwoName = inputTwo;
        console.log(playerTwoName);
        const startGame = (p1Name, p2Name) => {
            playerOne = createPlayer(p1Name,'X');
            playerTwo = createPlayer(p2Name,'O');
            console.log(playerOne,playerTwo);
        };
        startGame(playerOneName, playerTwoName);

    })
    const message = document.querySelector('#message-game');

    


    // function getNames() {
    //     nameInputs.forEach(input => playerNames.push(input.value))
    // };
    // return{playerOneName, playerTwoName}
// })();




//to-do
//gameboard inside gameboard array

//object to control game itself> ==---> game object
//modular functions 
//checkwin,checktie

//add event listeners to all boxes which allows players to click and add their symbol
//do not allow symbols to override eachother


//Done
//allow player to input names
//player is stored inside object
//function to assign symbol to player 'o' 'x'




