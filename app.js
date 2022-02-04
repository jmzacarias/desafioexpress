const express = require('express');
const fs = require('fs');

const app = express();

const connectedServer = app.listen(8080, ()=>{
    console.log('Listening on port 8080');
})

app.get('/', (req,res)=>{
    res.send('Desafío Clase 5');
})
app.get('/productos', async (req,res)=>{
        let productos = await fs.promises.readFile('./productos.json', 'UTF-8');
        res.send(productos);
})

app.get('/productoRandom', async (req,res)=>{
    const productoRandom = (productos)=>{
        let index = Math.floor(Math.random()*productos.length);
        return productos[index];
    }
    let data = await fs.promises.readFile('./productos.json', 'UTF-8');
    let productos = JSON.parse(data);
    res.send(JSON.stringify(productoRandom(productos)));
})