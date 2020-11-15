import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Context from './Context';

const TodoUI = () => {
  const { addTodo } = useContext(Context);
  return (
    <Wrapper>
      <Container>
        <Header>TN Todo App</Header>
        <AddTodo onSubmit={addTodo} />
        <TodoList />
        <Link to='/contacts' className='block text-center mt-10 underline'>
          Contacts
        </Link>
      </Container>
    </Wrapper>
  );
};

export default TodoUI;

const Wrapper = ({ children }) => (
  <div className='flex flex-col h-full items-center justify-center bg-gray-800 text-gray-100'>
    {children}
  </div>
);

const Container = ({ children }) => <div>{children}</div>;

const Header = ({ children }) => (
  <h1 className='mb-5 text-center font-bold text-gray-300 text-2xl'>
    {children}
  </h1>
);
