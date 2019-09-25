let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const choice1_div = document.getElementById("c1");
const choice2_div = document.getElementById("c2");
const choice3_div = document.getElementById("c3");
const choice4_div = document.getElementById("c4");
const choice5_div = document.getElementById("c5");
const choice6_div = document.getElementById("c6");

function getComputerChoice() {
  const choices = ['c1', 'c2', 'c3'];
  const randomNumber =Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "c1") return "choice 1";
  if(letter === "c2") return "choice 2";
  return "choice 6";


}
function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'),600);
  console.log("win");
}

function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} .You lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'),600);
  console.log("lose");
}
function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} .Draw!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'),600);
  console.log("draw");
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
  case "c1c3":
  case "c2c1":
  case "c3c2":

  win(userChoice, computerChoice);
    break;
  case "c1c2":
  case "c2c3":
  case "c3c1":
  lose(userChoice, computerChoice);
  break;
  case "c1c1":
  case "c2c2":
  case "c3c3":
  draw(userChoice, computerChoice);
  break;
}
}
main();
function main() {
choice1_div.addEventListener('click', () => game("c1"));
choice2_div.addEventListener('click',() => game("c2"));
choice3_div.addEventListener('click', () => game("c3"));
}
main();
