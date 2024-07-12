"use strict";
// Qui definirò le funzioni per puntare alle nostre rotte
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// Creo un array di todos per la nostra lista
const TODOS = [];
// Rotta per creare i TODO
const createTodo = (req, res, next) => {
    /*
        Di base TS non sa che type di dato preverrà dal body della request,
        perciò risultarà per inferenza come any e non string, allora
        utilizzo il Type Casting visto che sappiamo ci sarà una proprietà text
        nel body
    */
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo creato', createTodo: newTodo });
};
exports.createTodo = createTodo;
// Rotta per visualizzare i TODO
const getTodos = (req, res, next) => {
    res.status(201).json({ todos: TODOS });
};
exports.getTodos = getTodos;
/*
    Rotta per modificare i TODO, uso RequestHandler come Generic Type e
    dire a TS quali parametri avrà, visto che altrimenti per inferenza i parametri della
    request saranno sempre any
*/
const updateTodos = (req, res, next) => {
    const todoID = req.params.id;
    const updatedText = req.body.text;
    // Trovo l'indice del todo da modificare
    const todoIndex = TODOS.findIndex(todo => todo.id === todoID);
    // Se l'indice è negativo allora qualcosa è andato storto
    if (todoIndex < 0) {
        throw new Error('Impossibile trovare il todo da modificare');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Todo Aggiornato!', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
