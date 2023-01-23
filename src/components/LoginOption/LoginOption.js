import './LoginOption.css';
import { useState } from 'react';
import loginDetails1 from '../../loginDetails.json';

const Details = {
    "email": "e@text.com",
        "password": "p",
}

function LoginOption({ updateState }) {

    const [formData, setFormData] = useState({

    });
    const { email1, password1 } = formData;

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        console.log("checking")
        if (loginDetails1.email === email1 && loginDetails1.password === password1) {
            console.log(loginDetails1.email)
            console.log(loginDetails1.password)
            updateState(true);
            console.log("true loginDetails  1 checked")
        }else if (Details.email === email1 && Details.password === password1) {
            updateState(true);
            console.log("true loginDetails  0 checked")
        }
        else console.log("false loginDetails")
    }

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...setFormData, [name]: value });
        console.log(formData);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    <h4 className="label-name">Email</h4>
                    <input className="label-input" type="email" name="email" onChange={handleChange} value={email1} />
                </label><br />
                <label>
                    <h4 className="label-name">Password</h4>
                    <input className="label-input" type="password" name="password" onChange={handleChange} value={password1} />
                </label><br />
                <button type="submit" name="submit" onChange={handleChange} >Submit</button>
            </form>
        </>
    )
}

export default LoginOption;

