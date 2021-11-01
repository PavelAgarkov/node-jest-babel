import express from 'express';

let app = express(), port;

app.get('/', (req, res) => {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.json({ username: 'Flavio' });
});

app.get('/app', (req, res) => {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.json({ username: 'lol' });
})

app.listen( port = 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});