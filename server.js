import express from 'express';
import bodyParser from "body-parser";

let
    app = express(),
    port = 3000,
    jsonParser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false })
;

app.use(
    jsonParser,
    urlencodedParser
);

app.get('/', (req, res) => {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.json({ username: 'Flavio' });
});

app.get('/app', (req, res) => {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.json({ username: 'lol' });
})

app.post('/app-post', (req, res) => {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.json(req.body);
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});