import React, { useContext } from 'react';
import Context from './Context';

import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, isLoading, isSubmitting } = useContext(Context);

  if (isLoading)
    return <div className='mt-5 text-center'>Loading...</div>;

  return (
    <div style={{ opacity: isSubmitting ? 0.5 : 1 }}>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;