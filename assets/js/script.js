//CREATE HTML
//CREATE DICE CONTAINER
const diceContainer = document.createElement('div');
diceContainer.id = 'diceContainer';
diceContainer.classList.add('diceContainer');
const diceBtn = document.createElement('button');
diceBtn.textContent = 'Roll the dice';

const diceImg = document.createElement('img');
diceImg.style.display = 'none';

const resultParagraph = document.createElement('p');

//CREATE COUNTER CONTAINER
//counter container
const counterContainer = document.createElement('div');
counterContainer.id = 'counterContainer';
counterContainer.className = 'counterContainer';

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

const decrementDisplay = document.createElement('p');
const minusBtn = document.createElement('button');
minusBtn.textContent = '-';
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
const plusBtn = document.createElement('button');
plusBtn.textContent = '+';
const incrementDisplay = document.createElement('p');

//div 3 --> rulesBtn
const rulesContainer = document.createElement('div');
rulesContainer.className = 'rulesContainer';

const rulesBtn = document.createElement('button');
rulesBtn.textContent = 'Read the rules';

//footer
const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.textContent = 'Copyright © 2023 by Fabio Tedesco | All Rights Reserved.';
const socialContainer = document.createElement('div');
const linkedin = document.createElement('a');
linkedin.setAttribute('href', "https://www.linkedin.com/in/fabio-tedesco-3bb865251/");
linkedin.setAttribute('target', '_blank');
const linkedinImg = document.createElement('img');
linkedinImg.src = 'assets/img/social/icons8-linkedin.svg';
const instagram = document.createElement('a');
instagram.setAttribute('href', "https://www.instagram.com/fabioo_pueblo/");
instagram.setAttribute('target', '_blank');
const instagramImg = document.createElement('img');
instagramImg.src = 'assets/img/social/icons8-instagram.svg';
const github = document.createElement('a');
github.setAttribute('href', "https://github.com/FabioTedesco?tab=repositories");
github.setAttribute('target', '_blank');
const githubImg = document.createElement('img');
githubImg.src = 'assets/img/social/icons8-github.svg';

document.body.append(diceContainer);
  diceContainer.appendChild(diceBtn);
document.body.append(counterContainer);
  counterContainer.appendChild(h2pContainer);
    h2pContainer.appendChild(counterH2);
    h2pContainer.appendChild(counterDisplay);
  counterContainer.appendChild(btnContainer);
    btnContainer.appendChild(minusBtn);
    btnContainer.appendChild(resetBtn);
    btnContainer.appendChild(plusBtn);
  counterContainer.appendChild(rulesContainer);
    rulesContainer.appendChild(rulesBtn);
document.body.append(footer);
  footer.appendChild(copyright);
  footer.appendChild(socialContainer);
    socialContainer.appendChild(linkedin);
      linkedin.appendChild(linkedinImg);
      instagram.appendChild(instagramImg);
      github.appendChild(githubImg);
    socialContainer.appendChild(instagram);
    socialContainer.appendChild(github);

//VARIABLES
  let diceResult;
  let isPlusBtnBlocked = true;
  let isMinusBtnBlocked = true;
  let count = 0;
  const boardContainer = document.getElementById('boardgame');
  const airplane = document.getElementById('airplane');


//FUNCTIONS
function rollDice() {
    isPlusBtnBlocked = false;
    diceContainer.appendChild(diceImg);
    diceContainer.appendChild(resultParagraph);
  
    const value = Math.floor(Math.random() * 6) + 1;
    diceResult = value;
    diceImg.src = `assets/img/dice-img/Dice-${diceResult}.png`;
    diceImg.style.display = 'block';
    resultParagraph.textContent = `Move your airplane by ${diceResult}`;
    incrementDisplay.innerHTML = '+' + diceResult;
    btnContainer.appendChild(incrementDisplay);
    isRollDiceBtnBlocked = true;
  

}

function plusCounter() {
  if(isPlusBtnBlocked === false) {
    let incrementDisplayValue = incrementDisplay.textContent;
    incrementDisplayValue = parseInt(incrementDisplayValue);
    if(incrementDisplayValue>0) {
      incrementDisplay.textContent = `+${incrementDisplayValue-1}`;
      incrementDisplayValue--;

      if(incrementDisplay.textContent === '+0') {
        incrementDisplay.textContent = '';
      }

      count++;
      counterDisplay.textContent = count;

      document.getElementById(`flag-${count}`).removeChild(airplane);
      const nextFlag = document.getElementById(`flag-${count}`).nextElementSibling;
      nextFlag.appendChild(airplane);

      msg(incrementDisplayValue, incrementDisplay);
      
      if(count === 29) {                
        Swal.fire({
          title: "Good job!",
          text: "You Win!",
          icon: "success"
        });  
        reset();
        }
    } else {
      isPlusBtnBlocked = true;
    }
  } 
  else {
    Swal.fire("Roll the dice first!");
  }
}

function minusCounter() {
  if(isMinusBtnBlocked === false) {
    let decrementDisplayValue = decrementDisplay.textContent;
    decrementDisplayValue = parseInt(decrementDisplayValue);

    if(decrementDisplayValue < 0) {
      decrementDisplayValue++;
      decrementDisplay.textContent = decrementDisplayValue;

      document.getElementById(`flag-${count+1}`).removeChild(airplane);
      const prevFlag = document.getElementById(`flag-${count+1}`).previousElementSibling;
      prevFlag.appendChild(airplane);

      count--;
      counterDisplay.textContent = count;

      if(decrementDisplayValue === 0) {
        isMinusBtnBlocked = true;
        decrementDisplay.textContent = '';
      }
    }
  }
}

function reset() {   
  document.getElementById(`flag-${count+1}`).removeChild(airplane);
  const nextFlag = document.getElementById('flag-1');
  nextFlag.appendChild(airplane);

  count = 0;
  counterDisplay.textContent = count;
  btnContainer.removeChild(incrementDisplay);
  decrementDisplay.textContent = '';


  diceContainer.removeChild(diceImg);
  diceContainer.removeChild(resultParagraph);

  isPlusBtnBlocked = true;
  isMinusBtnBlocked = true;
}

function msg(incrementDisplayValue, incrementDisplay) {
  if(incrementDisplayValue === 0) {
    generateProbability(incrementDisplayValue, incrementDisplay);
  }
}

function generateProbability(incrementDisplayValue, incrementDisplay) {
  const negativeMsg = ['You lost the passport', 'Lost the flight', 'You finished your budget', 'You are turned away at the border', 'Your visa expired' ];
  const negativeMsgRandomIndex = Math.floor(Math.random() * negativeMsg.length) ;
  const positiveMsg = ['You win a flight ticket', 'You meet a new travel buddy', 'Take an unforgettable photo', 'Hostel party', 'You are living your best life'];
  const positiveMsgRandomIndex = Math.floor(Math.random() * positiveMsg.length);
  const extraMovement = Math.floor(Math.random() * 4) + 1;
  const probability = Math.round(Math.random() * 100);

  if(probability <= 30 && count > 4 && count !== 29) {
    console.log(count);
    Swal.fire({
      title: negativeMsg[negativeMsgRandomIndex],
      text: `Go back by ${extraMovement}`,
    });
    isMinusBtnBlocked = false;

    decrementDisplay.textContent = `-${extraMovement}`;
    btnContainer.prepend(decrementDisplay);

  } else if(probability > 70 && count !== 29) {
    Swal.fire({
      title: positiveMsg[positiveMsgRandomIndex],
      text: `Go forward by ${extraMovement}`,
    });
    incrementDisplayValue = extraMovement;
    incrementDisplay.textContent = `+${incrementDisplayValue}`;  
  } 
}

//EVENTS
//Roll the dice
diceBtn.addEventListener('click', () => {
  rollDice();
});

//Counter events
  plusBtn.addEventListener('click', () => {
     plusCounter();
  })

  resetBtn.addEventListener('click', () => {
    reset();
  })

  minusBtn.addEventListener('click', () => {
    minusCounter();
  })

//rules
rulesBtn.addEventListener('click', () => {
  Swal.fire({
    icon: "info",
    title: "Rules",
    text: `Welcome in Counter Journey,
    your goal is to arrive at the end of the gameboard.
    Roll the dice, then go forward with your plane clicking '+' (Who knows where it will take you).
    Look out, there could be some unforeseen events on the way.`,
    footer: `"To travel is to take a journey into yourself." - Danny Kaye`,
  });
})



