// Dichiarazione Variabili
const message = document.querySelector('.message')
const mail = ['girgioo@gmail.com', 'francesco@gmail.com', 'giovanni@gmail.com']
const utente = prompt('Inserire Mail').trim().toLocaleLowerCase();

// Controllo Campo Vuoto
if(utente === ''){
    alert('Inserire un nome valido')
} else {

    let utenteTrovato = false

    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === utente) {
            utenteTrovato = true
            break;
        } 
    }
    // Output
    if (utenteTrovato) {
    message.innerHTML = 'Utente Valido, accesso Autorizzato';
    } else {
    message.innerHTML = 'Utente NON Valido, accesso negato';
    }
}
