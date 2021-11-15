/* 
//Ejercitacion en clase

const express = require('express');
const app = express();
const PORT = 8043



app.get('/', (req,res) => {
    res.send('SIII!!! VAMOOOOS');
});

app.get('/emoji',(req,res) => {
    res.status(200).send('Muestra errores');
});

app.get('*',(req,res) => {
    res.status(404).send('404');
});

app.listen(PORT, ()=>{
    console.log(`BIEN!, SERVER ARRIBAA ${PORT}`);
}); */


// Ejercicio propuesto

const express = require('express');
const app = express();
const PORT = 8043;

const response = {
    id: 01,
    nombre: 'SmartPhone',
    precio: 600, 
    descripcion: 'Xiaomi',
    stock: 3
    
}

app.get('/products', (req,res) => {
    res.status(200).json(response);
    res.status(500).json({ error: 'message' })
});

app.listen(PORT, 
    console.log(`BIEN!, SERVER ARRIBAA ${PORT}`)
); 