// Dichiarazione Variabili
const message = document.querySelector('.message')
const mail = ['pippo@gmail.com', 'franco@gmail.com', 'giovanni@gmail.com']
const utente = prompt('Inserire Mail')

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
