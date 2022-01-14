import React, { useState, useEffect } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    function register() {
        if (password !== confirmPassword) {
            document.querySelector('#error').innerHTML = 'passwords not match';
            return;
        }
        document.querySelector('#error').innerHTML = ''
        const user = {
            email,
            name,
            password
        }
        console.log(user);
    }
    return (
        <div className="mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h5 className="text-uppercase">register</h5>
                    <div className="form">
                        <input type="text"
                            placeholder="name"
                            className="form-control mt-3"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="email"
                            className="form-control mt-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="password"
                            className="form-control mt-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <input type="text"
                            placeholder="confirm password"
                            className="form-control mt-3"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required />
                            <p id="error"></p>
                        <button onClick={register} className="btn custom-btn mt-3" >REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
