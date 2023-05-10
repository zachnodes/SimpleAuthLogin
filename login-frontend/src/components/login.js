import React from 'react';
import formStyles from '../styles/Form.module.css'
import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const {login, error} = useLogin()

    const [form, setform] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setform((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await login(form)
    }

    return (
        <div className={formStyles.form}>
            <form action="">
                <div>
                    <div>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="text" name="username" value={form.username} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input type="text" name="password" value={form.password} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <button onClick={onSubmit}>Login</button>
                </div>
                <div>
                    Don't have an account? <Link to={'/register'}><strong>Sign up</strong></Link>
                </div>
                <div>
                    <p>{error}</p>
                </div>
            </form>
        </div>
    );
}

export default Login;
