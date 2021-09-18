import fetch from "node-fetch";

fetch('https://www.google.ru/')
    .then((r) => {
        console.log(r.status);
    });