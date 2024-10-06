import React, { useState } from 'react'
import "./CreateTodo.css"
import axios from "axios"
import { toast } from 'react-toastify';

const CreateTodo = () => {
    const [input, setInput] = useState({
        input: "",
    });
    const onChange = (e) => {
        setInput(e.target.value);
    };
    const onSubmit = async () => {
        const url = `${process.env.REACT_APP_BASE_URL}/todo`

        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/todo`, { todo: input })
        if (response.data.success) {
            toast.success("Todo Created Successfully!")
            setInput({
                input: ""
            })
        }
    }
    return (
        <div>
            <>
                <input
                    type="text"
                    name="input"
                    placeholder="Enter your to do here "
                    className="border-2 border-black rounded-lg mt-5 ml-10 w-1/2 p-4 placeholder:font-bold font-serif"
                    onChange={onChange}
                />
                <button
                    className="border-2 border-black rounded-lg mt-5 ml-2 p-4 font-bold font-serif bg-blue-500 text-white"
                    type="submit"
                    onClick={onSubmit}
                >
                    Add
                </button>
            </>
        </div>
    )
}

export default CreateTodo  
