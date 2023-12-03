
import React from 'react';
import TodoItem from './ListCard';

const TodoList = ({ todos, handleEdit, handleRemove, handleStatusChange }) => {
  return (
    <>
    <h1>My Todos</h1>

      <div className='card-container'>
        <div className='row'>
        {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onEdit={() => handleEdit(index)}
          onRemove={() => handleRemove(index)}
          onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
        />
      ))}
    
        </div>
      </div>
      </>
  );
};

export default TodoList;
