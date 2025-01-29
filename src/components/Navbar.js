import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Navbar(props) {
    const identity = Cookies.get('identity');
    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('id');
        Cookies.remove('name');
        Cookies.remove('identity');
        navigate('/'); // Redirect to login after logout
    };

    const name = Cookies.get('name'); // Get name once and use it below

    return (
        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <a href="/home" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: "50px" }}>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span className="text-primary">EduSync</span>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav font-weight-bold mx-auto py-0">
                        <li className="nav-item">
                            <Link className="nav-link hover-effect" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link hover-effect" to="/about">About</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link hover-effect" to="/class">Classes</Link>
                        </li> */}
                        
                        {/* Conditional links based on user identity */}
                        {identity === 'institute' ? (
                <>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">{name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={logout}>Logout</a>
                    </li>
                </>
            ) : identity === 'student' ? (
                <>
                    <li className="nav-item">
                        <Link to="/studentProfile" className="nav-link">{name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={logout}>Logout</a>
                    </li>
                </>
            ) : (
                <>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </>
            )}

                    </div>
                </div>
            </nav>
        </div>
    );
}
