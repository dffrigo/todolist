const todosService = require('../services/todos.service');

const findTodosController = (req, res) => {
  const allTodos = todosService.findTodosService();
  res.send(allTodos);
};

const findTodoByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenTodo = todosService.findTodoByIdService(idParam);
  res.send(chosenTodo);
};

const createTodoController = (req, res) => {
  const todo = req.body;
  const newTodo = todosService.createTodoService(todo);
  res.send(newTodo);
};

const updateTodoController = (req, res) => {
  const idParam = +req.params.id;
  const todoEdit = req.body;
  const updatedTodo = todosService.updateTodoService(idParam, todoEdit);
  res.send(updatedTodo);
};

const deleteTodoController = (req, res) => {
  const idParam = req.params.id;
  todosService.deleteTodoService(idParam);
  res.send({ message: 'To do deleted!' });
};

module.exports = {
  findTodosController,
  findTodoByIdController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
};
