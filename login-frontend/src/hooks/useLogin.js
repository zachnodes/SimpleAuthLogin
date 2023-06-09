import React from 'react';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const useLogin = () => {
    const {dispatch} = useAuthContext()
    const [error, seterror] = useState(null);

    const login = async (form) => {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
            
        })
        const json = await res.json()

        if (!res.ok) {
            seterror(json.error)
        }
        if (res.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
        }

    }
    return {error, login}
}

export default useLogin;
