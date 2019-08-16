import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUserName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', { username });

        const { _id } = response.data;
        console.log(response);

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <Link to="/">
                    <img src={logo} alt="Tindev" />
                </Link>
                <input
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div >
    );
}