import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTodo = () => {
    const [input, setInput] = useState({
        todo: "",
        completed:false
    });

    const params = useParams();

    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // Handle status change
    const onStatusChange = () => {
        setInput({ ...input, completed: !input.completed });
    };

    const fetchTodo = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/todo/${params.id}`);
            setInput({
                todo: data.todo.todo,
                completed: data.todo.completed // Assuming the status is part of the todo data
            });
        } catch (error) {
            console.error('Error fetching todo:', error);
            toast.error("Failed to fetch todo");
        }
    };

    const onSubmit = async () => {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/todo/${params.id}`;
            const response = await axios.put(url, { todo: input.todo, completed: input.completed });

            if (response.data.success) {
                toast.success("Todo Updated Successfully!");
                setInput({ todo: "", status: false });
            } else {
                toast.error("Failed to update todo");
            }
        } catch (error) {
            console.error('Error updating todo:', error);
            toast.error("Error updating todo");
        }
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    return (
        <div>
            <input
                type="text"
                name="todo"
                value={input.todo}
                placeholder="Update Todo Here"
                className="border-2 border-black rounded-lg mt-5 ml-10 w-1/2 p-4 placeholder:font-bold font-serif"
                onChange={onChange}
            />
            <div className="flex items-center mt-5 ml-10">
                <input
                    type="checkbox"
                    name="status"
                    checked={input.status}
                    onChange={onStatusChange}
                    className="mr-2"
                />
             
            </div>
            <button
                className="border-2 border-black rounded-lg mt-5 ml-2 p-4 font-bold font-serif bg-blue-500 text-white"
                type="submit"
                onClick={onSubmit}
            >
                Update
            </button>
        </div>
    );
};

export default UpdateTodo;
