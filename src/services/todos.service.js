const todos = [
    {
      id: 1,
      todo: 'Practice JavaScript coding',
      status: 'Ongoing',
    },
    {
      id: 2,
      todo: 'Practice HTML / CSS coding',
      status: 'Delayed',
    },
    {
      id: 3,
      todo: 'Study extra class material',
      status: 'Done',
    },
  ];
  
  // ID number control
  const totalTodos = todos.length + 1;
  let countTodos = totalTodos;
  
  const findTodosService = () => {
    return todos;
  };
  
  const findTodoByIdService = (id) => {
    return todos.find((todo) => todo.id == id);
  };
  
  const createTodoService = (newTodo) => {
    const newId = countTodos++;
    newTodo.id = newId;
    todos.push(newTodo);
    return newTodo;
  };
  
  const updateTodoService = (id, todoEdited) => {
    todoEdited['id'] = id;
    const todoIndex = todos.findIndex((todos) => todos.id == id);
    todos[todoIndex] = todoEdited;
    return todoEdited;
  };
  
  const deleteTodoService = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    return todos.splice(todoIndex, 1);
  };
  
  module.exports = {
    findTodosService,
    findTodoByIdService,
    createTodoService,
    updateTodoService,
    deleteTodoService,
  };
