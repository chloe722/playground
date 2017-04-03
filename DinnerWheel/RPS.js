$(document).ready(function(){
  function rockPaperScissors(userInput) {
      var computerChoice = Math.floor(Math.random() * 3);
      var userChoice1 = userInput.toUpperCase();
      if (userChoice1 === 'ROCK') {
          userChoice2 = 1;
      } 
      else if (userChoice1 === 'PAPER'){
          userChoice2 = 2;
      }
      else if (userChoice1 === 'SCISSORS'){
          userChoice2 = 3;
      }
  }

  if (userChoice2 === 1){
      if ( computerChoice === 1) {
         alert('FAIR! Seems computer does not want to lose:P');
      }
      else if (computerChoice === 2) {
         alert('You lost hehehe!');
      }
      else if (computerChoice === 3) {
         alert('Oh no..You win!');
      } 
  }

  if (userChoice2 === 2){
      if (computerChoice === 1) {
         alert('Your paper wrapped my rock! You rock!!');
      }
      else if (computerChoice === 2) {
         alert('What we can do with two papers? draw?! You will need a pen!');
      }
      else if (computerChoice === 3) {
         alert('I am going to cut cut cut your paper');
      }
  }

  if (userChoice2 === 3){
      if (computerChoice === 1) {
          alert('Rock is powerful enough to destroy your scissors!');
      }
      else if (computerChoice === 2) {
          alert('Oppos.. my paper.. I lost:(');
      }
      else if (computerChoice === 3) {
          alert('HaHaHa..Seems we can be friend!');
      }
  }

})

rockPaperScissors(prompt('Battle time! Rock, Paper or scissors?'));