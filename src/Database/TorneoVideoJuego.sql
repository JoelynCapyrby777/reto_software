CREATE DATABASE TorneoVideoJuego;

USE TorneoVideoJuego;

CREATE TABLE Usuario(
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Gamertag VARCHAR(50) NOT NULL UNIQUE,
    Correo VARCHAR(50),
    Contraseña VARCHAR(50),
    FechaRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    /* 0 = false para jugador, 1 = true para administrador*/
    IsAdmin BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE VideoJuego(
    idVideoJuego INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    Nombre VARCHAR(100) NOT NULL UNIQUE,
    Genero VARCHAR(50),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Puntuacion(
    idPuntuacion INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkVideoJuego INT,
    Puntuacion DECIMAL (5,2),
    FechaPuntuacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (fkVideoJuego) REFERENCES VideoJuego(idVideoJuego)
);
