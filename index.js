const express = require('express')
const app = express()

app.use(express.json())

let cars = [
    {
        id: 0,
        name: 'volkswagen',
        color: 'purple',
        type: 'minivan'
    },
    {
        id: 1,
        name: 'audi',
        color: 'red',
        type: 'sportcar'
    }
]

app.listen(3000, () => {
    console.log('Example app is listening on port 3000.')
});

app.get('/cars', (req, res) => {
    res.send(cars);
});

app.get('/cars', (req, res) => {
    const {id, name } = req.query;
    cars.push({
        id: parseInt('2')
    })

    res.status(200).send({ id, name });
});
  


