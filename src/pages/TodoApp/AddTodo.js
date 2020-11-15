import React, { useContext } from 'react';
import Context from './Context';

const AddTodo = ({ onSubmit }) => {
  const { isSubmitting } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = { text: e.target.elements.text.value, completed: false };
    onSubmit(data);
    
    e.target.elements.text.value = '';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-gray-900 px-5 py-3 rounded-xl border-t-2 border-green-600'
    >
      <input
        className='text-gray-100 bg-gray-900 outline-none '
        name='text'
        type='text'
        placeholder='Task description...'
      />
      <button className='font-bold text-green-400' disabled={isSubmitting}>Add</button>
    </form>
  );
};

export default AddTodo;