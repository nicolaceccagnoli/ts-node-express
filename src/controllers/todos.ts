// Qui definirò le funzioni per puntare alle nostre rotte

/* 
    Importo RequestHandler così TS sarà in grado di riconoscere da solo
    i parametri richiesti da funzioni di questo type particolare 
*/
import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

// Creo un array di todos per la nostra lista
const TODOS: Todo[] =[]; 

export const createTodo: RequestHandler = (req, res, next) => {

    /*
        Di base TS non sa che type di dato preverrà dal body della request,
        perciò risultarà per inferenza come any e non string, allora 
        utilizzo il Type Casting visto che sappiamo ci sarà una proprietà text
        nel body
    */
    const text = (req.body as {text: string}).text;

    const newTodo = new Todo(Math.random(), text)

    TODOS.push(newTodo);

    res.status(201).json({message: 'Todo creato', createTodo: newTodo});
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(201).json({todos: TODOS})
}