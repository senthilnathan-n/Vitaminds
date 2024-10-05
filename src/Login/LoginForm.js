import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import im from '../Images/Vita.png';
import im2 from '../Images/fff.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';

const LoginForm = (props) => {
    const [data1, setData1] = useState(false);
    const [al, setAl] = useState(true);
    const [ag, setAg] = useState(true);
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState();
    const [print, setPrint] = useState(true);
    const [user1, setUser1] = useState(false);

    const navigate = useNavigate();

    const handleUser = (e) => {
        setUser(e.target.value);
    };

    const handlePass = (e) => {
        setPass(e.target.value);
    };

    const handleCheck = () => {
        setData1(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();  // Prevent default form submission behavior

        // Fetch users and validate login credentials when the login button is clicked
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        const userdata = response.data;

        // Find the user by username
        const use = userdata.find(userObj => userObj.username === user);

        // Check if the entered password matches the 'city' from the user's address
        if (use && pass === use.address.city) {  
            setUser1(true);  // Valid user
            if (data1) {
                navigate('/home');  // Navigate if terms are agreed
            } else {
                setAg(false);  // Show warning for terms and conditions
            }
        } else {
            setUser1(false);  // Invalid credentials
            setAl(false);  // Show invalid credentials error
        }
    })
    .catch(error => {
        setError(error.message);
        setPrint(false);
    });

    };

    const handleSign = () => {
        navigate('/sign');
    };

    return (
        <>
            {!print && <h1 style={{ marginLeft: "550px", marginTop: "100px", color: "red" }}>{error}</h1>}
            {print &&
                <body style={{ backgroundImage: `url(${im2})`, backgroundSize: "cover" }}>
                    <br />
                    <div style={{ backgroundColor: "rgba(0,128,0,0.3)" }}>
                        <br />
                        <h1 style={{ color: "whitesmoke", fontFamily: "cursive", textAlign: "center", marginTop: "20px", fontSize: "60px" }}>
                            <b>"EAT HEALTHY"</b>
                        </h1>
                        <br />
                    </div>

                    <div className='body1'>
                        <div className='wrapper'>
                            <img src={im} style={{ height: "80px", marginLeft: "70px" }} alt="logo" />

                            <form onSubmit={handleLogin}>
                                {!al && <Alert severity="error">Invalid Username or Password</Alert>}
                                {!ag && <Alert severity="warning">Agree to Terms and Conditions</Alert>}

                                <div className="input-box">
                                    <input type="text" placeholder='username' required onChange={handleUser} />
                                    <FaUser className='icon' />
                                </div>

                                <div className="input-box">
                                    <input type="password" onChange={handlePass} placeholder='password' required />
                                    <FaLock className='icon' />
                                </div>

                                <div className="remember-forgot">
                                    <label>
                                        <input type="checkbox" onChange={handleCheck} /> Agree Terms & Conditions
                                    </label>
                                    <a href='#'>Forgot Password?</a>
                                </div>

                                <button type="submit">Login</button>

                                <div className="register-link">
                                    <p>Don't have an account? <a onClick={handleSign}>Sign Up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </body>
            }
        </>
    );
};

export default LoginForm;
