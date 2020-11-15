import React from 'react';

import TodoProvider from './Provider';
import TodoUI from './TodoUI'

const TodoApp = () => (
  <TodoProvider>
    <TodoUI />
  </TodoProvider>
)

export default TodoApp;
