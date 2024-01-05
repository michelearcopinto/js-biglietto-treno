let numeroDistanzaTariffa;
let numeroDistanzaInput;
let etaInput;

document.getElementById('calcolaBottone').addEventListener('click', calcolaTariffa);

function calcolaTariffa() {
    // Ottieni i valori dai campi di input
    let numeroDistanza = document.getElementById('numeroDistanza');
    let eta = document.getElementById('eta');

    // Converte i valori in numeri decimali
    numeroDistanzaInput = parseFloat(numeroDistanza.value);
    etaInput = parseFloat(eta.value);
    numeroDistanzaTariffa = (numeroDistanzaInput * 0.21);  // Correggi l'operazione di moltiplicazione

    // Puoi ora utilizzare numeroDistanzaInput e etaInput nelle tue operazioni

    // Ad esempio, mostra i valori ottenuti nella console
    console.log("Numero di chilometri:", numeroDistanzaInput);
    console.log("Età:", etaInput);
    console.log("Tariffa:", numeroDistanzaTariffa);

    // Dichiarazione delle variabili all'esterno dell'if
    let scontoMinorenni;
    let scontoOver;
    let numeroDistanzaConDueDecimali

    // Condizione alla validità dei valori inseriti
    if ((numeroDistanzaInput > 1000 || isNaN(numeroDistanzaInput) || numeroDistanzaInput <= 0) && (etaInput > 100 || isNaN(etaInput) || etaInput <= 0)) {
        alert("Entrambi i valori non sono corretti, riprovare.");

    } else {

        if (numeroDistanzaInput > 1000 || isNaN(numeroDistanzaInput) || numeroDistanzaInput <= 0) {
            alert("La distanza impostata non è valida, assicurati di inserire un valore compreso tra 0 e 1000 chilometri");

        } else if (etaInput > 100 || isNaN(etaInput) || etaInput <= 0) {
            alert("Il formato dell'età non è corretto, assicurati di inserire un valore compreso tra 0 e 100");

        } else {

            // Condizione relativa all'età
            if (etaInput < 18) {
                // Sconto del 20% per i clienti minorenni
                scontoMinorenni = (numeroDistanzaTariffa - ((numeroDistanzaTariffa * 20) / 100))
                numeroDistanzaConDueDecimali = scontoMinorenni.toFixed(2);

                console.log("Tariffa Junior:", scontoMinorenni)

                console.log("Stringa:", numeroDistanzaConDueDecimali)

                let priceOutput = document.getElementById('priceOutput')

                priceOutput.value = numeroDistanzaConDueDecimali

            } else if (etaInput > 65) {
                // Sconto del 40% per gli over 65
                scontoOver = (numeroDistanzaTariffa - ((numeroDistanzaTariffa * 40) / 100))
                numeroDistanzaConDueDecimali = scontoOver.toFixed(2);

                console.log("Tariffa Over:", scontoOver)

                console.log("Stringa:", numeroDistanzaConDueDecimali)

                let priceOutput = document.getElementById('priceOutput')

                priceOutput.value = numeroDistanzaConDueDecimali

            } else {
                // Prezzo normale tra i 18 ed i 65
                numeroDistanzaConDueDecimali = numeroDistanzaTariffa.toFixed(2);

                console.log("Stringa:", numeroDistanzaConDueDecimali)

                let priceOutput = document.getElementById('priceOutput')

                priceOutput.value = numeroDistanzaConDueDecimali
            }
        }
    }
}