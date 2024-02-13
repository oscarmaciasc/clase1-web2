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

app.get('/', (req, res) => {
    res.send(cars)
});

app.post('/', (req, res) => {

    const {name, color, type, id} = req.body
    let items = cars.map(item => item.id);
    let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1;

    let newItem = {
        id: newId,
        name,
        color,
        type
    }

    cars.push(newItem);
    res.send(`Car with the name ${newItem.name} added!`)
})

// /cars/2 => req.params { id: 2}

app.get('/:id', (req, res) => {
    const {id} = req.params

    const foundCar = cars.find((car) => car.id == id);

    res.send(foundCar)
})

app.delete('/:id', function (req, res) {
    const {id} = req.params

    cars = cars.filter((car) => car.id != id)

    res.send(`User with the id ${id} deleted`)
});

app.patch('/:id', (req,res) => {
    const {id} = req.params
    const { name, color, type } = req.body

    const car = cars.find((car) => car.id == id)

    if(name) {
        car.name = name;
    }    
    
    if(color) {
        car.color = color;
    }

    if(type) {
        car.type = type;
    }

    res.send(`User with id ${id} updated`)
})

  


