// Definieren Sie die globale Variable 'fileHandle', die den Dateihandle speichert
let fileHandle;

// Definieren Sie den Standardmodus. In diesem Fall ist es "x"
let mode = "x";

// Fügen Sie einen EventListener hinzu, der bei einem Klick auf das Element mit der ID "file_picker" ausgelöst wird
document.querySelector("#file_picker").onclick = async () => {

    // Öffnen Sie den Datei-Auswahl-Dialog und speichern Sie den ausgewählten Dateihandle in 'fileHandle'
    [fileHandle] = await window.showOpenFilePicker();
  
    // Abrufen der Datei aus dem Dateihandle
    const file = await fileHandle.getFile();

    // Je nach Modus verschiedene Aktionen ausführen
    switch (mode) {

        case "r": // Lesemodus
            // Dateiinhalt als Text lesen
            const content = await file.text(); 

            // Den gelesenen Textinhalt in das HTML-Element mit der ID "picker_result" schreiben
            document.getElementById("picker_result").innerHTML = content;
            break;
    
        case "w": // Schreibmodus
            // Erstellen eines schreibbaren Streams aus dem Dateihandle
            const writable = await fileHandle.createWritable();

            // Schreiben eines Textes in den Stream
            await writable.write("Hallo, dies ist ein Test.");

            // Schließen des Streams
            await writable.close();
            break;
        
        case "x": // Speichern als Modus
            // Optionen für den Datei-Speichern-Dialog definieren
            const options = {
                types: [
                    {
                        description: "Test files",
                        accept: {
                            "text/plain": [".txt"],
                        },
                    },
                ],
            };

            // Öffnen des Datei-Speichern-Dialogs mit den angegebenen Optionen und Speichern des ausgewählten Dateihandles in 'handle'
            const handle = await window.showSaveFilePicker(options);

            // Erstellen eines schreibbaren Streams aus dem Dateihandle
            const writableHandle = await handle.createWritable();
    
            // Schreiben eines Textes in den Stream
            await writableHandle.write("Hi, ich bin neu hier.");

            // Schließen des Streams
            await writableHandle.close();
            break;          
        
        // Weitere Modi können hier hinzugefügt werden

        default:
            console.log("Unbekannter Modus.")
            break;
        
    }
}
