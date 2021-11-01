import fetch from "node-fetch";

let a = fetch('http://localhost:3000')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });

console.log(a);