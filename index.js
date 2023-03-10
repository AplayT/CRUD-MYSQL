const express = require('express');
const app = express();
const port = 3000;
const programingLanguajes = require('./routes/programingLanguajes');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.json({message: 'ok' });
});

app.use('/lenguajes', programingLanguajes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, ()=>{
    console.log(`App escuchando en http://localhost:${port}`)
})