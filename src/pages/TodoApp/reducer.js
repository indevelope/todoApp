export const initialTodoList = {
  todos: [],
};

export const todoReducer = (state = initialTodoList, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return { todos: action.payload };
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo => {
          if (todo._id === action.payload)
            return { ...todo, completed: !todo.completed }
          
          return todo;
        })
      }
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    default:
      return state;
  }
};
