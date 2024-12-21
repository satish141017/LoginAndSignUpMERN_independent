import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accessOtherRoute } from '../services/apiServices';
import Button from '../component/Button';

function OtherRoute() {
    const navigate = useNavigate();
    const [isError, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [listItem, setListItem] = useState([]);
    const [todoItem, setTodoItem] = useState({ task: "", completed: false });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const verify = await accessOtherRoute();
                if (!verify.success) {
                    navigate('/signin');
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong</div>;
    }

    function handleTodoitem(event) {
        setTodoItem(prv => ({ ...prv, task: event.target.value }));
    }

    function addTodo() {
        const item = todoItem;
        setTodoItem(prv => ({ ...prv, task: "" }));
        if (item.task.trim().length > 0) setListItem(l => [...l, item]);
    }

    function remove(i) {
        setListItem(l => l.filter((ele, index) => index !== i));
    }

    return (
        <div className="app">
            <h1>TODO LIST</h1>
            <input type="text" value={todoItem.task} onChange={handleTodoitem} className="todo-input" />
            <button onClick={addTodo} className="add-button">Add Todo</button>
            <ul className="todo-list">
                {listItem.map((item, index) => (
                    <li key={index} className="todo-item">
                        {index + 1}. {item.task}
                        <button onClick={() => remove(index)} className="finish-button">Finish</button>
                    </li>
                ))}
            </ul>
            <Button onClick={() => {
                localStorage.removeItem('token');
                navigate('/signin');
            }} text="Logout" />
        </div>
    );
}

export default OtherRoute;