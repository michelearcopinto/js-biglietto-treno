// Inserimento dei chilometri nel prompt
let numeroDistanza = prompt("Digita il numero di chilometri");

// Calcolo del prezzo a 0.21 al chilometro
let numeroDistanzaTariffa = (numeroDistanza * 0.21);

// Inserimento dell'età nel prompt
let eta = prompt("Digita la tua età");

// Dichiarazione delle variabili all'esterno dell'if
let scontoMinorenni;
let scontoOver;
let numeroDistanzaConDueDecimali

// Condizione alla validità dei valori inseriti
if ((numeroDistanza > 1000 || numeroDistanza === null || numeroDistanza <= 0) && (eta > 100 || eta === null || eta <= 0)) {
    alert("Entrambi i valori non sono corretti, riprovare.");

} else {

    if (numeroDistanza > 1000 || numeroDistanza === null || numeroDistanza <= 0) {
        alert("La distanza impostata non è valida, assicurati di inserire un valore compreso tra 0 e 1000 chilometri");

    } else if (eta > 100 || eta === null || eta <= 0) {
        alert("Il formato dell'età non è corretto, assicurati di inserire un valore compreso tra 0 e 100");

    } else {

        // Condizione relativa all'età
        if (eta < 18) {
            // Sconto del 20% per i clienti minorenni
            scontoMinorenni = (numeroDistanzaTariffa - ((numeroDistanzaTariffa * 20) / 100))
            numeroDistanzaConDueDecimali = scontoMinorenni.toFixed(2);

            document.writeln(scontoMinorenni);
            console.log(scontoMinorenni)

            document.writeln(numeroDistanzaConDueDecimali);
            console.log(numeroDistanzaConDueDecimali)

        } else if (eta > 65) {
            // Sconto del 40% per gli over 65
            scontoOver = (numeroDistanzaTariffa - ((numeroDistanzaTariffa * 40) / 100))
            numeroDistanzaConDueDecimali = scontoOver.toFixed(2);

            document.writeln(scontoOver);
            console.log(scontoOver)

            document.writeln(numeroDistanzaConDueDecimali);
            console.log(numeroDistanzaConDueDecimali)

        } else {
            // Prezzo normale tra i 18 ed i 65
            numeroDistanzaConDueDecimali = numeroDistanzaTariffa.toFixed(2);

            document.writeln(numeroDistanzaTariffa);
            console.log(numeroDistanzaTariffa)

            document.writeln(numeroDistanzaConDueDecimali);
            console.log(numeroDistanzaConDueDecimali)
        }
    }
} 
