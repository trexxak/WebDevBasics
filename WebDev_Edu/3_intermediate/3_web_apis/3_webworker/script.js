// Definiert die globale Variable 'w', die den Worker speichert
let w;

function useWorker(){
    // Überprüfen, ob die Worker-Variable bereits definiert ist
    if (typeof(w) == "undefined"){
        // Wenn nicht, erstellen Sie einen neuen Worker, der die worker.js-Datei ausführt
        w = new Worker("worker.js");
    }

    // Definieren Sie eine Funktion, die ausgeführt wird, wenn der Worker eine Nachricht sendet
    w.onmessage = function(event){
        // Setzen Sie den Inhalt des Elements mit der ID "workerContainer" auf die von der Nachricht des Workers gesendete Daten
        document.getElementById("workerContainer").innerHTML = event.data;

        // Überprüfen Sie, ob die gesendeten Daten 0 sind
        if (event.data === 0){
            // Wenn ja, stoppen Sie den Worker und ändern Sie die Hintergrundfarbe des HTML-Elements in Rot
            stopWorker();
            document.getElementsByTagName("html")[0].style.background = "red";
        }
    }
}

function stopWorker(){
    // Überprüfen Sie erneut, ob die Worker-Variable bereits definiert ist
    if (typeof(w) == "undefined"){
        // Erstellen Sie einen neuen Worker, wenn nicht (obwohl dieser Teil in einer "stopWorker"-Funktion seltsam erscheint)
        w = new Worker("worker.js");
    }

    // Beenden Sie den Worker
    w.terminate();

    // Setzen Sie die Worker-Variable zurück auf undefined
    w = undefined;
}
