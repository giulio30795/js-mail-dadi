// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Definizione Variabili

const winner = document.querySelector('.winner')

const player = Math.floor(Math.random() * 6 + 1);
const computer = Math.floor(Math.random() * 6 + 1);

console.log(player);
console.log(computer);

if (player > computer){
    winner.innerHTML += 'player'
} else if (player < computer){
    winner.innerHTML += 'computer'
}
else {
    winner.innerHTML = 'La partita è finita in pareggio'
}