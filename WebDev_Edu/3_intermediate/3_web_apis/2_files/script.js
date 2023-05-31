// Globale Variable, die den Dateihandle speichert
let fileHandle;

// Funktion, die beim Klicken auf den "Datei öffnen"-Button ausgelöst wird
document.querySelector("#openFile").onclick = async () => {
    // Öffnen des Datei-Auswahl-Dialogs und Speichern des ausgewählten Dateihandles in 'fileHandle'
    [fileHandle] = await window.showOpenFilePicker();

    // Abrufen der Datei aus dem Dateihandle
    const file = await fileHandle.getFile();

    // Lesen des Dateiinhalts als Text
    const content = await file.text();

    // Anzeigen des Dateiinhalts im HTML-Element mit der ID "fileContent"
    document.querySelector("#fileContent").innerText = content;
}

// Funktion, die beim Klicken auf den "Datei speichern"-Button ausgelöst wird
document.querySelector("#saveFile").onclick = async () => {
    // Optionen für den Datei-Speichern-Dialog definieren
    const options = {
        types: [{
            description: "Text files",
            accept: { "text/plain": [".txt"] },
        }],
    };

    // Öffnen des Datei-Speichern-Dialogs mit den angegebenen Optionen und Speichern des ausgewählten Dateihandles in 'handle'
    const handle = await window.showSaveFilePicker(options);

    // Erstellen eines schreibbaren Streams aus dem neuen Dateihandle
    const writable = await handle.createWritable();

    // Schreiben eines Textes in den Stream
    await writable.write("Hi, ich bin neu hier.");

    // Schließen des Streams
    await writable.close();
}
