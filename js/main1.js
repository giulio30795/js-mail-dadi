// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.

const message = document.querySelector('.message')

const mail = ['pippo@gmail.com', 'franco@gmail.com', 'giovanni@gmail.com']

const utente = prompt('Inserire Mail')

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
        if (utenteTrovato) {
        message.innerHTML = 'Utente Valido';
    } else {
    message.innerHTML = 'Utente NON Valido';
    }
}
