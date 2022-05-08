
// Storage-Funktionen
function use_session_storage(){
    sessionStorage.setItem("name",document.getElementById("name").value)
    document.getElementById("name_result").innerHTML=sessionStorage.getItem("name")
}

function use_local_storage(){
    localStorage.setItem("name",document.getElementById("name").value)
    document.getElementById("name_result").innerHTML=localStorage.getItem("name")
}

// Fetch-Funktionen
function use_fetch(){

    fetch('template.html')
    .then(response => response.text())
    .then(data => document.getElementById("fetch_result").innerHTML=data);
}

// Worker-Funktionen
function use_worker(){
    if (typeof(w) == "undefined"){
        w = new Worker("worker.js");
    }

    w.onmessage = function(event){
        document.getElementById("worker_result").innerHTML = event.data;
        if (event.data === 0){
            stop_worker()
            document.getElementsByTagName("html")[0].style.background = "red";
        }
    }
}

function stop_worker(){
    if (typeof(w) == "undefined"){
        w = new Worker("worker.js");
    }
    w.terminate();
    w = undefined;
}

// File-System Funktionen

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

// 


// Kombinationen

function use_storage_and_fetch_api(){
    use_fetch()
    use_session_storage()
}