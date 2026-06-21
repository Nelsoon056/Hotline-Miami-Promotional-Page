const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'nelsoon',     
    password: 'nelson24sandoval',      
    database: 'hotline_miami_db'
});

// localhost
// nelsoon
// nelson24sandoval
// nombre (db)

db.connect(err => {
    if (err) console.error('Error conectando a la DB: ', err);
    else console.log('Conectado a phpMyAdmin (hotline_db)');
});


//mostrar opiniones
app.get('/api/opiniones', (req, res) => {
    const sql = "SELECT * FROM usuario ORDER BY id DESC"; 
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

//publicar opiniones
app.post('/api/opiniones', (req, res) => {
    const { nombre, email, genero, opinion } = req.body;
    const sql = "INSERT INTO usuario (nombre, email, genero, opinion) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [nombre, email, genero, opinion], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: "Opinión guardada con éxito", id: result.insertId });
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});