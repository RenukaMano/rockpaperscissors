const getUserChoice = userInput => {
    userInput =userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    }
    else {
      console.log('error')
    }
  }
  console.log(getUserChoice('paper')); 
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3);
  if (randomNumber === 0){
    return 'rock';
  } else if (randomNumber === 1){ 
    return 'paper';
    } else if(randomNumber === 2) {
      return 'scissor';
    } else {
      return 'no value'
    }
  
  }
  /*const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
    case 0: 
      return 'rock';
    case 1:
      return 'paper';
      case 2:
      return 'scissor';
  }
  } ;*/
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
  return 'It is a tie!'; 
  }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
  return "Sorry!";
  }
  else {
  return "congrats!"
  }
  }
  if (userChoice === 'paper') {
  if (computerChoice === 'scissor'){
  return "Sorry!";
  }
  else {
  return "congrats!"
  }
  }
  if (userChoice === 'scissor') {
  if (computerChoice === 'rock') {
  return "Sorry!";
  }
  else {
  return "congrats!"
  }
  }
  };
  console.log(determineWinner('rock', 'paper'));
  console.log(determineWinner('paper', 'paper'));
  console.log(determineWinner('rock', 'scissor'));
  
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();