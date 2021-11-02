import fetch from "node-fetch";

// let a = fetch('http://localhost:3000')
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     });

fetch('http://localhost:3000/app-post', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify({name: "pavel"})// body data type must match "Content-Type" header
})
    .then((response) => {
        return response.json();
    }).then((data) => {
    console.log(data);
});