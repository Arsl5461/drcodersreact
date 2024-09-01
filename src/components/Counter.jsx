import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { toast } from 'react-toastify'

const Counter = () => {
    const [count, setCounter] = useState(0)
    const add = () => {
        if(count<10){
            setCounter(count + 1)
        }
        else{
            toast.warning("You cannot add more than 10")
        }
    }
    const sub = () => {
        if(count>0){
            setCounter(count - 1)
        }
        else{
            toast.warning("Items cannot be less than 0")
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-4 gap-3'>
            <Button className='btn btn-danger' onClick={sub}>-</Button>
            <h1>{count}</h1>
            <Button className='btn btn-success' onClick={add}>+</Button>
        </div>
    )
}

export default Counter
