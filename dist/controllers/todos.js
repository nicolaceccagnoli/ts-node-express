"use strict";
// Qui definirò le funzioni per puntare alle nostre rotte
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// Creo un array di todos per la nostra lista
const TODOS = [];
const createTodo = (req, res, next) => {
    /*
        Di base TS non sa che type di dato preverrà dal body della request,
        perciò risultarà per inferenza come any e non string, allora
        utilizzo il Type Casting visto che sappiamo ci sarà una proprietà text
        nel body
    */
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo creato', createTodo: newTodo });
};
exports.createTodo = createTodo;
