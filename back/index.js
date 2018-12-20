const express = require('express');
const app = express();
const port = 5000;
const connection = require('./conf.js');


const cors = require('cors')

const corsOptions = {

}
app.use(cors(corsOptions))



app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});

app.get('/api/score/get', (req, res) => {
    connection.query('SELECT nombre FROM washmail.score WHERE id=1;', (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération du score');
        } else {
            res.json(results);
        }
    });
});

app.post('/api/score/post', (req, res) => {
    connection.query('UPDATE score SET nombre = ? WHERE id=1;', (err, results) => {

        if (err) {
            res.status(500).send('Erreur lors de la récupération du score');
        } else {
            res.json(results);
        }
    });
});