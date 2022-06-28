    document.addEventListener('DOMContentLoaded', () => {

const squares = document.querySelectorAll(".grid div");
const scoreDisplay = document.querySelector("span");
const startBtn = document.querySelector(".start");

const width = 10;
let currentIndex = 0; //primeiro div em nossa grade
let appleIndex = 0; //primeiro div em nossa grade
let currentSnake = [2, 1, 0]; // o 3º div em nossa grade sendo 2 (ou o HEAD), e 0 sendo o final (TAIL, com todos os 1's sendo o corpo a partir de agora)
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

//iniciar, e reiniciar o jogo
function startGame() {
  currentSnake.forEach(index => squares[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(interval);
  score = 0;
  randomApple();
  direction = 1;
  scoreDisplay.innerText = score;
  intervalTime = 500;
  currentSnake = [2, 1, 0];
  currentIndex = 0;
  currentSnake.forEach(index => squares[index].classList.add("snake"));
  interval = setInterval(moveOutcomes, intervalTime);
}

//função que trata de TODOS os resultados da Serpente
function moveOutcomes() {
  //lida com cobra batendo na borda e cobra batendo em si mesmo
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //se a cobra bater no fundo
    (currentSnake[0] % width === width - 1 && direction === 1) || //se a cobra bate na parede direita
    (currentSnake[0] % width === 0 && direction === -1) || //se a cobra bater na parede esquerda
    (currentSnake[0] - width < 0 && direction === -width) || //se a cobra atingir o topo
    squares[currentSnake[0] + direction].classList.contains("snake") //se a cobra entrar em si mesma
  ) {
    return clearInterval(interval); //impar o intervalo se alguma das situações acima acontecer
  }

  const tail = currentSnake.pop(); //remove o último item do array e o mostra
  squares[tail].classList.remove("snake"); //remove classe de cobra do TAIL
  currentSnake.unshift(currentSnake[0] + direction); //dá direção à cabeça da matriz

  //lida com cobra pegando maçã
  if (squares[currentSnake[0]].classList.contains("apple")) {
    squares[currentSnake[0]].classList.remove("apple");
    squares[tail].classList.add("snake");
    currentSnake.push(tail);
    randomApple();
    score++;
    scoreDisplay.textContent = score;
    clearInterval(interval);
    intervalTime = intervalTime * speed;
    interval = setInterval(moveOutcomes, intervalTime);
  }
  squares[currentSnake[0]].classList.add("snake");
}

//gerar nova maçã uma vez que a maçã é comida
function randomApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake")); //certificando-se de que as maçãs não apareçam na cobra
  squares[appleIndex].classList.add("apple");
}

//atribui funções a códigos de teclas
function control(e) {
  squares[currentIndex].classList.remove("snake"); //remover a classe de cobra de TODOS os quadrados.

  if (e.keyCode === 39) {
    direction = 1; //se pressionarmos a seta para a direita em nosso teclado, a cobra irá para a direita
  } else if (e.keyCode === 38) {
    direction = -width; // se pressionarmos a seta para cima, a cobra voltará dez divs, parecendo subir
  } else if (e.keyCode === 37) {
    direction = -1; // se pressionarmos para a esquerda, a cobra irá para a esquerda um div
  } else if (e.keyCode === 40) {
    direction = +width; //se pressionarmos, a cabeça da cobra aparecerá instantaneamente na div dez divs de onde você está agora
  }
}

document.addEventListener("keyup", control);
startBtn.addEventListener("click", startGame);

})  
    
    