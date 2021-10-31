import express from 'express';

let app = express()
let port = 3000

app.get('/', (req, res) => {
    res.header({'Access-Control-Allow-Origin': '*'})
    res.json({ username: 'Flavio' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})