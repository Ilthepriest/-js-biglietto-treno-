// Chiedo all'utente il numero di km

const numero_km = Number(prompt("Quanti chilometri deve percorrere?"));

// Chiedo l'età al passeggiero

const età_passeggiero = Number(prompt("Quanti anni ha?"));

// Prezzo biglietto in base ai km

const prezzo_biglietto = numero_km * 0.21;

// Calcolo percentuale

const sconto_percentuale_20 = (prezzo_biglietto * 20) / 100;

const sconto_percentuale_40 = (prezzo_biglietto * 40) / 100;

const totale_scontato_20 = prezzo_biglietto - sconto_percentuale_20;

const totale_scontato_40 = prezzo_biglietto - sconto_percentuale_40;

//Sconti per minori e anziani

if (età_passeggiero < 18){
    const sconto_minore = totale_scontato_20;
    document.getElementById("prezzo_minore").innerHTML = `Prezzo scontato del 20 % per minori: ${sconto_minore.toFixed(2)} euro invece di ${prezzo_biglietto} euro`;

}else if (età_passeggiero > 65){
    const sconto_anziano = totale_scontato_40 
    document.getElementById("prezzo_anziano").innerHTML = `Prezzo scontato del 40 % per anziani: ${sconto_anziano.toFixed(2)} euro  invece di ${prezzo_biglietto} euro`;
}else{
    document.getElementById("prezzo_pieno").innerHTML = `Prezzo pieno: ${prezzo_biglietto.toFixed(2)} euro`;
}




