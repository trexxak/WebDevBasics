// Definieren Sie eine globale Variable 'i' mit dem Startwert 5000
let i = 5000;

function timedCount() {
  // Dekrementieren Sie 'i' um eins
  i--;

  // Senden Sie den aktuellen Wert von 'i' als Nachricht zurück zum Hauptthread
  postMessage(i);

  // Rufen Sie diese Funktion erneut auf, nachdem 0 Millisekunden vergangen sind (d.h., so schnell wie möglich, aber nachdem alle anderen Aufgaben in der Warteschlange des Event Loops abgearbeitet wurden)
  setTimeout(timedCount, 0);
}

// Starten Sie den Countdown
timedCount();
