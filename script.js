console.log("Run");
let gameVal = ['rock','paper','scissor'];
let computerScore = 0;
let playerScore = 0;
function randomPick(){
   let pickedElement =  gameVal[Math.floor(Math.random()*gameVal.length)];
   console.log('Picked',pickedElement)
   return pickedElement;
}
randomPick()
function hideRules(){
    let ruleDiv = document.getElementById("rules-container")
    ruleDiv.innerHTML = ""
}

function showRules() {
    let ruleDiv = document.getElementById("rules-container")
    let rule = ` <div class="rules-list">
    <img src="./images/Group 4.png">
    <span onclick="hideRules()"></span>
  </div>`
  ruleDiv.innerHTML = rule
}

function clickedValue(val){
    console.log("Clicked",val);

    let randomVal = randomPick();

    if(val == randomVal){
        console.log("Tie")
    }

    manageGame(val,randomVal)
}

function manageGame(player,computer){
    let computerScoreBoard = document.getElementById("computer-score");
    let playerScoreBoard = document.getElementById("player-score");
    if(player === computer){
        console.log('Tie')
        manageView(player,computer,'tie')

    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            console.log('Computer Won');
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            manageView(player,computer,'computer')
        }else{
            console.log('Player Won')
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            manageView(player,computer,'player')

        }
    }
    else if(player == 'scissor'){
        if(computer == 'rock'){
            console.log('Computer Won');
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            manageView(player,computer,'computer')
            
        }else{
            console.log('Player Won');
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            manageView(player,computer,'player')
            
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            console.log('Computer Won');
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            manageView(player,computer,'computer')

        }else{
            console.log('Player Won');
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            manageView(player,computer,'player')

        }
    }
    setScoreToLocal()
}


function manageView(player,computer,result){
    let mainContainer = document.getElementById("main-container");
    if(result == 'player'){
        let playerD = `<div class="game-result">
        <div class="game-result-left">
          <div class="game-result-button game-result-${player} win-game">
            <img src="./images/${player}.png" alt="${player}">
            <span></span>
          </div>
        </div>
        <div class="game-result-center">
          <div class="win-message">YOU WIN</div>
          <div class="win-message-info" id="win-message">AGAINST PC</div>
          <div class="win-message-btn">
            <button><span id="win-message-btn" onclick="restartGame()">PLAY AGAIN</span></button>
          </div>
        </div>
        <div class="game-result-right">
          <div class="game-result-button game-result-${computer}">
            <img src="./images/${computer}.png" alt="${computer}">
            <span></span>
          </div>
        </div>
      </div>`
        
      mainContainer.innerHTML = playerD;

      let btnManage = document.getElementById("button-manage-container");
      btnManage.innerHTML = `<button onclick="showRules()">Rules</button>
      <button onclick="hurrayShow()" style="margin-left:15px">NEXT</button>`;

    }else if(result == 'computer'){
        let computerD = `<div class="game-result">
        <div class="game-result-left">
          <div class="game-result-button game-result-${player}">
            <img src="./images/${player}.png" alt="${player}">
            <span></span>
          </div>
        </div>
        <div class="game-result-center">
          <div class="win-message">YOU LOST</div>
          <div class="win-message-info" id="win-message">AGAINST PC</div>
          <div class="win-message-btn">
            <button><span id="win-message-btn" onclick="restartGame()">PLAY AGAIN</span></button>
          </div>
        </div>
        <div class="game-result-right">
          <div class="game-result-button game-result-${computer} win-game">
            <img src="./images/${computer}.png" alt="${computer}">
            <span></span>
          </div>
        </div>
      </div>`
      mainContainer.innerHTML = computerD;
      

    }else{
        let tieUp = ` <div class="game-result">
        <div class="game-result-left">
          <div class="game-result-button game-result-${player}">
            <img src="./images/${player}.png" alt="${player}">
            <span></span>
          </div>
        </div>
        <div class="game-result-center">
          <div class="win-message">TIE UP</div>
          <div class="win-message-btn">
            <button><span id="win-message-btn" onclick="restartGame()">REPLAY</span></button>
          </div>
        </div>
        <div class="game-result-right">
          <div class="game-result-button game-result-${computer}">
            <img src="./images/${computer}.png" alt="${computer}">
            <span></span>
          </div>
        </div>
      </div>`
      mainContainer.innerHTML = tieUp;
    }
}


function restartGame(){
    let gameContainer = document.getElementById("game-container");
    let game = `
    <div class="box">
      <div class="leftside">
        <div class="textbox">ROCK PAPPER SCISSOR</div>
      </div>
      <div class="rightside">
        <div class="score">COMPUTER SCORE
          <span id="computer-score">${computerScore}</span>
        </div>
        <div class="score">YOUR SCORE
          <span id="player-score">${playerScore}</span>
        </div>
      </div>
    </div>

    <div class="main" id="main-container">
      <div class="play-game">
        <div class="rock game-button" onclick="clickedValue('rock')">
          <img src="./images/rock.png" alt="rock">
        </div>
        <div class="paper game-button" onclick="clickedValue('paper')">
          <img src="./images/paper.png" alt="paper">
        </div>
        <div class="scissor game-button" onclick="clickedValue('scissor')">
          <img src="./images/scissor.png" alt="scissor">
        </div>
        <div class="line-1">
          <img src="./images/Line 1.png">
        </div>
        <div class="line-2">
          <img src="./images/Line 2.png">
        </div>
        <div class="line-3">
          <img src="./images/Line 3.png">
        </div>
      </div>
    </div>
  `
    gameContainer.innerHTML = game;
    let btnManage = document.getElementById("button-manage-container");
    btnManage.innerHTML = ` <button onclick="showRules()">Rules</button>`;
}



function hurrayShow(){
    let hurray = `<div class="hurrah-container">
    <div class="hurrah-img">
      <img class="cup-img" src="./images/cup.jpg">
      <img class="start-img" src="./images/star.jpg">
    </div>
    <div class="hurrah-msg">
      <div class="hurrah-won">HURRAY!!</div>
      <div class="hurrah-won-text">YOU WON THE GAME</div>
      <div class="hurrah-won-btn">
        <div class="win-message-btn">
          <button><span id="win-message-btn" onclick="restartGame()">PLAY AGAIN</span></button>
        </div>
      </div>
    </div>
  </div>`
   let gameContainer = document.getElementById("game-container");
   gameContainer.innerHTML = hurray;
   let btnManage = document.getElementById("button-manage-container");
   btnManage.innerHTML = ` <button onclick="showRules()">Rules</button>`;


}


function setScoreToLocal(){
    localStorage.setItem('computerScore111',JSON.stringify(computerScore));
    localStorage.setItem('playerScore111',JSON.stringify(playerScore));
}

function getScoreFromLocal(){
    if(localStorage.getItem('computerScore111')){
        computerScore = parseInt(localStorage.getItem('computerScore111'))
    }
    if(localStorage.getItem('playerScore111')){
        playerScore = parseInt(localStorage.getItem('playerScore111'))
    }

    
    let computerScoreBoard = document.getElementById("computer-score");
    let playerScoreBoard = document.getElementById("player-score");
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
   
}

getScoreFromLocal();