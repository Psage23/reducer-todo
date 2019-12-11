import React, {useState} from 'react';

export default function TodoForm({dispatch}) {
    const [ newTodoText, setNewTodoText] = useState('');

    const handleChanges = (e) => {
        setNewTodoText(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        setNewTodoText('');
        dispatch(
            {
                type: "ADD_TODO",
                payload: newTodoText
            }
        );
        setNewTodoText('');
    }

    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch(
            {
                type: "CLEAR_COMPLETED"
            }
        );
    }

    return (
        <div>
            <form className="form">
                <input type="text" placeholder="New Christmas Todo" name="newTodoText" value={newTodoText} onChange={handleChanges}/>
                <button onClick={addTodo}>Add</button>
                <button onClick={clearCompleted}>Clear</button>
            </form>
        </div>
    )
}