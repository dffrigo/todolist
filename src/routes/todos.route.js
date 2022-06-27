const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos.controller');

router.get('/alltodos', todosController.findTodosController);
router.get('/todo/:id', todosController.findTodoByIdController);
router.post('/create', todosController.createTodoController);
router.put('/update/:id', todosController.updateTodoController);
router.delete('/delete/:id', todosController.deleteTodoController);

module.exports = router;
