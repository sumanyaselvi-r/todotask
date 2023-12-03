
import React, { useState } from 'react';

const TodoForm = ({ onAdd, onSaveEdit, onCancelEdit, editingIndex, task: initialTask, description: initialDescription }) => {
  const [task, setTask] = useState(initialTask || '');
  const [description, setDescription] = useState(initialDescription || '');

  const handleAdd = () => {
    onAdd(task, description);
    setTask('');
    setDescription('');
  };

  const handleSaveEdit = () => {
    onSaveEdit(task, description);
    setTask('');
    setDescription('');
  };

  const handleCancelEdit = () => {
    onCancelEdit();
    setTask('');
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Todo Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
      <input
        type='text'
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
      {editingIndex === null ? (
        <button className='btn btn-success' onClick={() => { handleAdd() }} >Add Todo</button>
      ) : (
        <>
          <button className='btn btn-success' onClick={() => { handleSaveEdit() }} style={{ marginRight: '8px', fontSize: "20px" }}>Save</button>
          <button className='btn btn-danger' onClick={() => { handleCancelEdit() }} style={{ marginRight: '8px', fontSize: "20px" }}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default TodoForm;
