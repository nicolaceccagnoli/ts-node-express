import { Router } from 'express';
// const express = require('express');
// const Router = express.Router;

import { createTodo } from '../controllers/todos';

const router = Router();

// Rotta per aggiungere nuovi todo
router.post('/', createTodo);

// Rotta per recuperare tutti i todo
router.get('/', );

// Rotta per modificare i todo
router.patch('/:id', );

// Rotta per eliminare i todo
router.delete('/:id', );

export default router;
