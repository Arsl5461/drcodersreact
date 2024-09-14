import React, { useState, useMemo } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import countryList from 'react-select-country-list'


const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        comments: "",
        gender: "",
    })
    const [country, setCountry] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    console.log(country);


    const { email, password, comments } = formData;
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={onChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        name="comments"
                        value={comments}
                        onChange={onChange}
                    />
                </FloatingLabel>
                <Select
                    options={options}
                    value={country}
                    onChange={(selectedOption) => setCountry(selectedOption.value)}
                />
                <div className="d-flex gap-3">
                    <Form.Check
                        type="radio"
                        name='gender'
                        value={"Male"}
                        onChange={onChange}
                    />
                    <Form.Label>Male</Form.Label>
                    <Form.Check
                        type="radio"
                        name='gender'
                        value={"Female"}
                        onChange={onChange}
                    />
                    <Form.Label>Female</Form.Label>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>

            </Form>
        </div>
    )
}

export default Register
