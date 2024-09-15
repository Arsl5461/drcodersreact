import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';

const TodosListing = () => {
    const columns = [
        {
            name: 'No.',
            selector: row => row.id,
        },
        {
            name: 'UserId',
            selector: row => row.userId,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Completed',
            selector: row => (
                <span style={{ color: row.completed ? 'green' : 'red' }}>
                    {row.completed ? "Completed" : "Pending"}
                </span>
            ),
        }
    ];
    const [todos, setTodos] = useState([])
    const [userId, setUserId] = useState(null)
    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setTodos(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const filterTodos = todos.filter((todo) => todo.userId == userId)
   
    return (
        <div>
            <label>Select user</label>
            <select name='userId' onChange={(e) => setUserId(e.target.value)}>
                <option selected>Select User</option>
                <option value={1}>User1</option>
                <option value={2}>User2</option>
                <option value={3}>User3</option>
                <option value={4}>User4</option>
                <option value={5}>User5</option>
                <option value={6}>User6</option>
                <option value={7}>User7</option>
                <option value={8}>User8</option>
            </select>
            <DataTable
                columns={columns}
                data={userId != null?filterTodos:todos}
                pagination
            />
        </div>
    )
}

export default TodosListing
