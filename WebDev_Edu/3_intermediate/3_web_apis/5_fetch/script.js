function useFetch(){

    fetch('template.html')
    .then(response => response.text())
    .then(data => document.getElementById("fetchContainer").innerHTML=data);
}