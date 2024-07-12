// Qui definirò le funzioni per puntare alle nostre rotte

/* 
    Importo RequestHandler così TS sarà in grado di riconoscere da solo
    i parametri richiesti da funzioni di questo type particolare 
*/
import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

// Creo un array di todos per la nostra lista
const TODOS: Todo[] =[]; 

// Rotta per creare i TODO
export const createTodo: RequestHandler = (req, res, next) => {

    /*
        Di base TS non sa che type di dato preverrà dal body della request,
        perciò risultarà per inferenza come any e non string, allora 
        utilizzo il Type Casting visto che sappiamo ci sarà una proprietà text
        nel body
    */
    const text = (req.body as {text: string}).text;

    const newTodo = new Todo(Math.random().toString(), text)

    TODOS.push(newTodo);

    res.status(201).json({message: 'Todo creato', createTodo: newTodo});
}

// Rotta per visualizzare i TODO
export const getTodos: RequestHandler = (req, res, next) => {
    res.status(201).json({todos: TODOS})
}

/*
    Rotta per modificare i TODO, uso RequestHandler come Generic Type e
    dire a TS quali parametri avrà, visto che altrimenti per inferenza i parametri della 
    request saranno sempre any
*/
export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const todoID = req.params.id;

    const updatedText = (req.body as {text:string}).text

    // Trovo l'indice del todo da modificare
    const todoIndex = TODOS.findIndex( todo => todo.id === todoID);

    // Se l'indice è negativo allora qualcosa è andato storto
    if (todoIndex < 0) {
        throw new Error('Impossibile trovare il todo da modificare');
    } 

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id , updatedText);

    res.json({message: 'Todo Aggiornato!', updatedTodo: TODOS[todoIndex]});
    
}

// Definisco la rotta per eliminare il todo
export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoID = req.params.id;

    // Trovo l'indice del todo da modificare
    const todoIndex = TODOS.findIndex( todo => todo.id === todoID);

    // Se l'indice è negativo allora qualcosa è andato storto
    if (todoIndex < 0) {
        throw new Error('Impossibile trovare il todo da modificare');
    } 

    //Elimino il todo dai TODOS
    TODOS.splice(todoIndex, 1);

    res.json({message: 'Todo eliminato!'});

}