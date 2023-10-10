import express from 'express';

const app= express();
const PORT =45000;

//-------ROUTER------
app.get('/api', (req, res) => {
res.json({
    name: 'Deploy test API',
    version:'1.0.0',
    server: 'runing',
});
});

app.get('/api/data', (req, res) => {
    res.json([
        {
            name: 'Juan manuel',
            email: 'jmanuel@gmail.com'
        },
        {
            name: 'Maria Luz',
            email: 'mariLuz@gmail.com'
        },
        {
            name: 'Gabriel',
            email: 'gabo123l@gmail.com'
        }
    ]);
    });


app.use('*', (req, res) => {
    res.status(404).json({message: 'Resource not found'});
});

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
    
});

//como son solicitudes get vamos usar el navegador