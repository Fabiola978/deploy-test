import express from 'express';

const app= express();
const PORT =45000;

app.get('/api', (req, res) => {
res.json({
    name: 'Deploy test API',
    version:'1.0.0',
    server: 'runing',
});
});

app.get('/api/data', (req, res) => {
res.json({
    {
        username: 'jrodrigez',
        email:'jrodri@hotmail.com'
    }
})
})