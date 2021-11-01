async function hello() {
    return await wait()
}

async function wait() {
    return 'Hello';
}

hello()
    .then(
    (a) => {console.log(a)}
)

console.log(hello());

