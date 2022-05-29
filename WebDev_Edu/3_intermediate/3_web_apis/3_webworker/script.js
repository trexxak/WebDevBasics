function useWorker(){
    if (typeof(w) == "undefined"){
        w = new Worker("worker.js");
    }

    w.onmessage = function(event){
        document.getElementById("workerContainer").innerHTML = event.data;
        if (event.data === 0){
            stopWorker()
            document.getElementsByTagName("html")[0].style.background = "red";
        }
    }
}

function stopWorker(){
    if (typeof(w) == "undefined"){
        w = new Worker("worker.js");
    }
    w.terminate();
    w = undefined;
}