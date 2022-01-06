

function callbackendapi(){

    const url = `https://jsonplaceholder.typicode.com/posts`;

    fetch(url)
    .then(response => response.json())
  .then(json => console.log(json))
}