function fetchTemplate(){

    fetch('template.html')
    .then(response => response.text())
    .then(data => document.getElementById("fetchContainer").innerHTML=data);
}

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => console.log(posts[0]["title"]));
}

function fetchCats() {
    fetch('https://cat-fact.herokuapp.com/facts/random')
        .then(response => response.json())
        .then(catFact => console.log(catFact["text"]));
}
