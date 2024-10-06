import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';

const TodosListing = () => {
    const columns = [
        {
            name: 'No.',
            selector: row => row._id,
        },
        {
            name: 'Todo',
            selector: row => row.todo,
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
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/todo`)
        setTodos(response.data.todos)
    }
    useEffect(() => {
        fetchData()
    }, [])   
    return (
        <div>
            <DataTable
                columns={columns}
                data={todos}
                pagination
            />
        </div>
    )
}

export default TodosListing
