
// Definizione Variabili

const winner = document.querySelector('.winner')
const player = Math.floor(Math.random() * 6 + 1);
const computer = Math.floor(Math.random() * 6 + 1);


// Determinare il vincitore
if (player > computer){
    winner.innerHTML += 'player'
} else if (player < computer){
    winner.innerHTML += 'computer'
}
else {
    winner.innerHTML = 'La partita è finita in pareggio'
}