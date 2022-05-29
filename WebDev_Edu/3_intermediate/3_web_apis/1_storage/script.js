/* 
    Browser Storage API 
*/

function update(storageType){
if (storageType.getItem("name") != undefined){
    document.getElementById("ausgabe").innerHTML="<p> Hi "+storageType.getItem("name")+"! </p>";
    storageType.clear()
}}

function useSessionStorage(){
    sessionStorage.setItem("name",document.getElementById("name").value);
    document.getElementById("ausgabe").innerHTML="<p> Hi "+sessionStorage.getItem("name")+"! </p>";
}

function useLocalStorage(){
    localStorage.setItem("name",document.getElementById("name").value)
    document.getElementById("ausgabe").innerHTML="<p> Hi "+localStorage.getItem("name")+"! </p>";
}