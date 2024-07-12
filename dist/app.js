"use strict";
// Qui avvierò il mio server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express');
/*
    Importo il middleware per estrarre tutti i dati JSON
    che trova per popolare il body della req
*/
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/todos', todos_1.default);
// Funzione middleware per la gestione degli errori
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
