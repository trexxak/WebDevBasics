function hide_last_data(){
    document.getElementById("container").innerHTML="";
}

function load_new_data(url){
    hide_last_data();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


// Ready-States: 0 Unsent, 1 Opened, 2 Headers Received, 3 Loading, 4 Done
// Status-Codes: 1xx Continue, 2xx Successful, 3xx Redirection, 4xx Client Error, 5xx Server Error