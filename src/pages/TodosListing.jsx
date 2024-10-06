import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const TodosListing = () => {
    const handleDelete=async(todoId)=>{
        const response=await axios.delete(`${process.env.REACT_APP_BASE_URL}/todo/${todoId}`)
        if(response.data.success){
            fetchData()   
        }
    }
    const handleUpdate=async(todoId)=>{

    }
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
        },
        {
            name: 'Actions',
            cell: row => (
                <div>
                    <Link 
                       to={`/todos/${row._id}`}
                        style={{ marginRight: '10px', cursor: 'pointer' }}
                    >
                        U
                    </Link>
                    <button 
                        onClick={() => handleDelete(row._id)} 
                        style={{ cursor: 'pointer' }}
                    >
                    X
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
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
