function generaNumero() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);

    // Genera un numero casuale tra min e max (inclusivo)
    var numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;

    // Visualizza il risultato
    document.getElementById('box-numero').innerHTML = numeroCasuale;
}