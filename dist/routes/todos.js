"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const express = require('express');
// const Router = express.Router;
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
// Rotta per aggiungere nuovi todo
router.post('/', todos_1.createTodo);
// Rotta per recuperare tutti i todo
router.get('/', todos_1.getTodos);
// Rotta per modificare i todo
router.patch('/:id', todos_1.updateTodos);
// Rotta per eliminare i todo
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
