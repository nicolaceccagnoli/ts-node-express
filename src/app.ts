// Qui avvierò il mio server

import express, { Request, Response, NextFunction} from 'express';

// const express = require('express');

/*
    Importo il middleware per estrarre tutti i dati JSON 
    che trova per popolare il body della req 
*/
import { json } from 'body-parser'

import todoRoutes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

// Funzione middleware per la gestione degli errori
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
})

app.listen(3000);