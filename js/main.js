let diceResult;


//CREATE DICE CONTAINER
const diceContainer = document.createElement('div');
diceContainer.id = 'diceContainer';
diceContainer.style.backgroundColor = 'yellow';
diceContainer.classList.add('diceContainer');

const diceBtn = document.createElement('button');
diceBtn.textContent = 'Roll the dice';

const diceImg = document.createElement('img');
diceImg.style.display = 'none';


const resultParagraph = document.createElement('p');

document.body.append(diceContainer);
diceContainer.appendChild(diceBtn);
diceContainer.appendChild(diceImg);
diceContainer.appendChild(resultParagraph);


//CREATE COUNTER CONTAINER
//counter container
const counterContainer = document.createElement('div');
counterContainer.id = 'counterContainer';
counterContainer.className = 'counterContainer';
counterContainer.style.backgroundColor = 'green';

//Div 1 --> h1 and counter display
const h2pContainer = document.createElement('div');
h2pContainer.className = 'h2pContainer';
const counterH2 = document.createElement('h2');
counterH2.textContent = 'Counter';
const counterDisplay = document.createElement('p');
counterDisplay.textContent = 0;

//Div 2 --> -btn   resetBtn  +btn
const btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';


const minusBtn = document.createElement('button');
minusBtn.textContent = '-';
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
const plusBtn = document.createElement('button');
plusBtn.textContent = '+';
const incrementDisplay = document.createElement('p');



//div 3 --> playGameBtn & rulesBtn
const playGameContainer = document.createElement('div');
playGameContainer.className = 'playGameContainer';

const playGameBtn = document.createElement('button');
playGameBtn.textContent = 'Play the game';
const rulesBtn = document.createElement('button');
rulesBtn.textContent = 'Read the rules';


document.body.append(counterContainer);
  counterContainer.appendChild(h2pContainer);
    h2pContainer.appendChild(counterH2);
    h2pContainer.appendChild(counterDisplay);
  counterContainer.appendChild(btnContainer);
    btnContainer.appendChild(minusBtn);
    btnContainer.appendChild(resetBtn);
    btnContainer.appendChild(plusBtn);
  counterContainer.appendChild(playGameContainer);
    playGameContainer.appendChild(playGameBtn);
    playGameContainer.appendChild(rulesBtn);
  


//COUNTER 


minusBtn.addEventListener('click', () => {
  count--;
  counterDisplay.textContent = count;
})
resetBtn.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
})
// plusBtn.addEventListener('click', () => {
  
// })

//RULES


//FUNCTIONS
function rollDice() {
  const value = Math.floor(Math.random() * 6) + 1;
  diceResult = value;
  diceImg.src = `/img/Dice-${diceResult}.png`;
  diceImg.style.display = 'block';
  resultParagraph.textContent = `Move your player ${diceResult} spaces`;
  incrementDisplay.innerHTML = '+' + diceResult;
  btnContainer.appendChild(incrementDisplay);
}

let count = 0;
const boardContainer = document.getElementById('boardgame');
const airplane = document.getElementById('airplane');

function plusCounter() {
  let incrementDisplayContent = incrementDisplay.textContent;
  incrementDisplayContent = parseInt(incrementDisplayContent);
  
  if(incrementDisplayContent > 1) {
    incrementDisplay.textContent = `+${incrementDisplayContent-1}`;
    console.log(incrementDisplayContent);
  } else {
    btnContainer.removeChild(incrementDisplay);
  }

  if(incrementDisplayContent>=1) {
    count++;
    counterDisplay.textContent = count;
  }
  
  document.getElementById(`flag-${count}`).removeChild(airplane);
  const nextFlag = document.getElementById(`flag-${count}`).nextElementSibling;
  nextFlag.appendChild(airplane);
  if(count === 29) {                
    Swal.fire({
      title: "Good job!",
      text: "You Win!",
      icon: "success"
    });  
    count = 0;
    counterDisplay.textContent = count;
  }
}


//EVENTS

//Roll the dice
diceBtn.addEventListener('click', () => {
  rollDice();
  
});


//counter



  plusBtn.addEventListener('click', () => {
    plusCounter();
  })



  minusBtn.addEventListener('click', () => {
    minusCounter();
    // document.getElementById(`flag-${count+1}`).removeChild(airplane);
    // const previousFlag = document.getElementById(`flag-${count+1}`).previousElementSibling;
    // previousFlag.appendChild(airplane);
  })





//rules
rulesBtn.addEventListener('click', () => {
  Swal.fire({
    title: "Rules",
    text: "questa è una riga",
    icon: "info"
  });
})



// const gameBoard = [];

// function storeGameBoard() {
//   const gameBoardContainer = document.getElementById('boardgame');
//   const gameBoardBoxes = gameBoardContainer.children;
//   Array.from(gameBoardBoxes).forEach(box => {
//     gameBoard.push(box);
//   });
// }

// storeGameBoard();