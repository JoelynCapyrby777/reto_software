const db = require('../config/database');

const createPlayer = async (req, res) => {
    try {
        const { name, gamerTag, email, password } = req.body;

        if (!name || !gamerTag || !email || !password) {
            return res.status(400).json({ 
                msg: 'Todos los campos (name, gamerTag, email, password) son obligatorios.' 
            });
        }

        const [rows] = await db.query(
            'SELECT * FROM Usuario WHERE GamerTag = ? OR Correo = ?', 
            [gamerTag, email]
        );

        if (rows.length > 0) {
            return res.status(400).json({ 
                msg: 'El gamerTag o el email ya están registrados. Por favor elige otro.' 
            });
        }

        const [result] = await db.query(
            'INSERT INTO Usuario (Nombre, GamerTag, Correo, Contraseña) VALUES (?, ?, ?, ?)',
            [name, gamerTag, email, password]
        );

        res.status(201).json({
            mensaje: 'Jugador creado exitosamente',
            id: result.insertId
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo al guardar' });
    }
};

const getPlayers = async (req, res ) => {
    try {
        const [players] = await db.query('SELECT * FROM Usuario');
        res.json(players);
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

module.exports = { createPlayer, getPlayers };