import express, { json } from 'express';
import jsonfile from 'jsonfile'
import datos from './db/datos.json';

const app= express();
const PORT =45000;

app.use(json());

//-------ROUTER------
app.get('/api', (req, res) => {
res.json({
    name: 'Deploy test API',
    version:'1.0.0',
    server: 'runing',
});
});

app.get('/api/data', (req, res) => {
    res.json(datos);
    });

app.post('/api/data', (req, res) => {
    //agregar un nuevo dato a la base de datos
    datos.push(req.body);

    jsonfile.writeFileSync('./src/db/datos.json', datos);

    res.status(201).json(req.body);
    
    });


app.use('*', (req, res) => {
    res.status(404).json({message: 'Resource not found'});
});

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
    
});

//como son solicitudes get vamos usar el navegador