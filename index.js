const personas = [
    {id: 1, nombre: 'Barbara', edad: 39, pais: 'Argentina'},
    {id: 2, nombre: 'Alejandro', edad: 46, pais: 'Argentina'},
    {id: 3, nombre: 'Federico', edad: 13, pais: 'Argentina'},
    {id: 4, nombre: 'Lola', edad: 9, pais: 'Argentina'},
];

const express = require('express');
const app = express();

app.get('/personas', (req, res) =>{
    res.json(personas);
});

app.get('/personas/:id', (req, res) => {
    const persona = personas.find(p => p.id === Number(req.params.id));
    res.json(persona);
});

app.listen(3000); 