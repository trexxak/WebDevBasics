// File-System Funktionen - AUFRÄUMEN!!!

let fileHandle;
let mode = "x"

document.querySelector("#file_picker").onclick = async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    let content;
    let options;
    let writable;
    let handle;

 
    switch (mode) {

        case "r":

            content = await file.text(); 
            document.getElementById("picker_result").innerHTML = content;
            
            break;
    
        case "w":

            writable = await fileHandle.createWritable();
            await writable.write("Hallo, dies ist ein Test.");
            await writable.close();
            
            break;
        
        case "x":
            options = {
                types: [
                    {
                    description: "Test files",
                    accept: {
                        "text/plain": [".txt"],
                    },
                },
                ],
            };
            handle = await window.showSaveFilePicker(options);
            writable = await handle.createWritable();
    
            await writable.write("Hi, ich bin neu hier.");
            await writable.close();
    
            break;          
        
        // case "del":

        //     await fileHandle.remove();
               
        //     break;
        
        default:
            console.log("upps.")
            break;
        
    }


}