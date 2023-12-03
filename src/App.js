
import React, { useState, useEffect } from 'react';
import TodoList from './ListItem';
import TodoForm from './AddList';
import StatusFilter from './StatusFilter';

const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo_list')));
  const [editingIndex, setEditingIndex] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const handleAdd = (task, description) => {
    if (task.trim() !== '') {
      const listitem = [...todos, { task, description, status: 'not-complete' }]
      setTodos(listitem);
      localStorage.setItem("todo_list", JSON.stringify(listitem))


    }


  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
    localStorage.setItem("todo_list", JSON.stringify(updatedTodos))
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (task, description) => {
    if (task.trim() !== '' && editingIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].task = task;
      updatedTodos[editingIndex].description = description;
      setTodos(updatedTodos);
      setEditingIndex(null);
      localStorage.setItem("todo_list", JSON.stringify(updatedTodos))
    }

  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleRemove = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditingIndex(null);
    localStorage.setItem("todo_list", JSON.stringify(updatedTodos))
  };

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === 'all') {
      return true;
    } else {
      return todo.status === (statusFilter === 'complete' ? 'complete' : 'not-complete');
    }
  });

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>My Todo</h1>
        <TodoForm
          onAdd={handleAdd}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          editingIndex={editingIndex}
        />
      </div>
      <div className='container' style={{ textAlign: "end" }}>

        <StatusFilter value={statusFilter} onChange={setStatusFilter} />
      </div>
      <TodoList
        todos={filteredTodos}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
        handleStatusChange={handleStatusChange}
      />
    </>
  );
};

export default Todo;
