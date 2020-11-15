import { createContext } from 'react';

export default createContext({
  addTodo: function (todo) {},
  toggleTodo: function (id, completed) {},
  deleteTodo: function (id) {},
  todos: [],
  isSubmitting: false,
  isLoading: false,
});