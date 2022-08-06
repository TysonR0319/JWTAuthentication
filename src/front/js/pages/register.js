import React from "react";
import { RegisterUser } from "../Requests/user.js";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css"

let emails = "";
let passwords = "";

const Register = () => {

    let history = useNavigate();

    const handleChange = async (e) => {
        try {
            const user = {
                email: emails,
                password: passwords
            }
            e.preventDefault()
            await RegisterUser(user)
            history.push("/login")

        } catch { (err) => console.log(err) }

    };

    return (
        <div className="register-container justify-content-center m-auto p-auto mt-3">
            <div className="title">Register</div>
            <form onSubmit={handleChange}>
                <label>Email:</label>
                <input onChange={(e) => emails = e.target.value} className="form-control" id="email" type="text" name="email" />

                <label>Password:</label>
                <input onChange={(e) => passwords = e.target.value} className="form-control" id="password" type="text" name="password" />

                <button className="register-button" type="submit">Submit</button>

            </form>
        </div>

    )
}

export default Register;