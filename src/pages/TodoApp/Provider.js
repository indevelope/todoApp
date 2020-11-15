import React, { useEffect, useState, useReducer } from 'react';

import httpClient from './util/httpClient';

import { todoReducer, initialTodoList } from './reducer';
import Context from './Context';

function TodoProvider(props) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoList);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = (await httpClient.get('/todos')).data;
      dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: response });
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const addTodo = async (data) => {
    setIsSubmitting(true);
    const res = await httpClient.post('/todos', data);

    const { _id, text, completed } = res.data;

    dispatch({
      type: 'ADD_TODO',
      payload: { _id, text, completed },
    });

    setIsSubmitting(false);
  };

  const toggleTodo = async (id, completed) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id,
    });

    await httpClient.put(`/todos/${id}`, { completed });
  };

  const deleteTodo = async (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
    await httpClient.delete(`/todos/${id}`);
  };

  const context = {
    addTodo,
    toggleTodo,
    deleteTodo,
    isSubmitting,
    isLoading,
    todos: state.todos,
  };

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  );
}

export default TodoProvider;
