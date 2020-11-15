import React, { useContext } from 'react';
import Context from './Context';

import cx from 'classnames';

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useContext(Context);
  return (
    <div
      className={
        cx(
          'relative cursor-pointer mt-4 ml-2 px-3 py-2 bg-gray-900 border-l-2',
          {
            'border-orange-500': !todo.completed,
            'border-green-500': todo.completed
          }
        )
      }
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();

        toggleTodo(todo._id, !todo.completed);
      }}
    >
      {todo.text}
      <button 
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          deleteTodo(todo._id);
        }}
        className='absolute right-0 mr-3 text-red-600'
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;