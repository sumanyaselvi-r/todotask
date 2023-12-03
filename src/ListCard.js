
import React from 'react';

const TodoItem = ({ todo, onEdit, onRemove, onStatusChange }) => {
    const { task, description, status } = todo;
    const bgColor = status === 'complete' ? 'green' : 'red';

    return (
        <>

            <div className='col-lg-4 mt-2'>
                <div className="card" style={{ fontFamily: "Times new Roman", fontSize: "20px", backgroundColor: "rgb(184, 223, 196)" }}>

                    <div className="card-body">
                        <h5 className="card-title">Name:{task}</h5>
                        <p className="card-text">Descritption :{description}</p>
                        <label>
                            Status:
                            <select value={status} onChange={(e) => onStatusChange(e.target.value)} className={`todo-item ${status}`} style={{ backgroundColor: bgColor, color: "white" }}>
                                <option value="not-complete">Not Complete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <br></br><br></br>
                        <div id='btn'>
                            <button className='btn btn-success' id='editbtn' onClick={onEdit} style={{ marginRight: '8px', fontSize: "20px" }} >Edit</button>
                            <button className="btn btn-danger " id='delbtn' onClick={onRemove}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoItem;
