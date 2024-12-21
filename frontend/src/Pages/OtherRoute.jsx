import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accessOtherRoute } from '../services/apiServices'
import Button from '../compnent/Button';
function OtherRoute() {
    const navigate = useNavigate();
    useEffect(() => {
        const verifyAccess = async () => {
            const verify = await accessOtherRoute();
            if (!verify.success) {
                navigate('/signin');
            }
        };
        verifyAccess();

    }, []);
    const [listItem, setListItem] = useState([]);
    const [todoItem, setTodoItem] = useState({ task: "", completed: false });

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
            There is Logout button
            <Button onClick={() => {
                localStorage.removeItem('token');
                navigate('/signin')

            }} />
        </div>

    );
}

export default OtherRoute;