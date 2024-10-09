import React from 'react';
import "../Style_Sheet/NavBar.css";
import logo from "../img/mono.svg";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const t = localStorage.getItem('token');
        if (t) {
            const base64Url = t.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
                '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            ).join(''));

            // Assuming the JSON payload is an object
            const payload = JSON.parse(jsonPayload);
            setUsername(payload.username); // Adjust based on your token structure
            setToken(t);
            console.log(payload);
        }
    }, []);


    const handlelog = () => {
        localStorage.clear();
    }


    return (
        <nav className='main-nav'>
            <div className="main-nav-left">
                <ul>
                    <li>
                        <div className="main-logo">
                            <Link to="/"><img src={logo} alt="" /><h3>CodePair</h3></Link>
                        </div>
                    </li>
                    <li><Link to="/problemset">Problem</Link></li>
                    <li><Link to="/contest">Contest</Link></li>
                </ul>
            </div>
            <div className="main-nav-right">
                <div className="main-nav-pre">
                    <p><Link to="/buypre">Premium</Link></p>
                </div>

                {!token ? (
                    <div className='main-login'>
                        <button><Link to="/signin">Register</Link></button>
                        <p>or</p>
                        <button><Link to="/login">Log in</Link></button>
                    </div>
                ) : (
                    <div className='main-login'>
                        <Link to={`/u/${username}`} className="profile-icon"><CgProfile />
                        </Link>
                        <Link onClick={handlelog} to="/load" className="profile-icon"><MdLogout /></Link>
                    </div>
                )}
        </div>
        </nav >
    );
}

export default NavBar;