import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

const User = () => {
    const [user, setUser] = useState({
        name: "Arslan AKmal",
        age: "28",
        phone: "03074254897"
    })
    const [isMarried, setIsMarried] = useState(false)
    const { name, age, phone } = user;

    const updateIsMarried = () => {
        setIsMarried(!isMarried)
    }
    return (
        <div>
            <Button className="btn btn-primary" onClick={updateIsMarried}>Update Marrige Status</Button>
            {
                isMarried ? (
                    <>
                        <h1>{name}</h1>
                        <h1>{age}</h1>
                        <h1>{phone}</h1>
                    </>
                ) :
                    null
            }


        </div>
    )
}

export default User
