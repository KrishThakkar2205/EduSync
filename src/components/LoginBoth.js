
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'
export default function LoginForm() {
    const navigate = useNavigate()
    const [selectedForm, setSelectedForm] = useState('student'); // Default to Student form
    const [studentData,setStudentData] = useState({})
    const [instituteData,setInstituteData] = useState({})

    const handleStudentChange=(e)=>{
        setStudentData({
            ...studentData,
            [e.target.name]:e.target.value}
        )
    }

    const handleInstituteChange=(e)=>{
        setInstituteData({
            ...instituteData,
            [e.target.name]:e.target.value}
        )
    }

    const handleInstituteSubmit = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:8000/login/',instituteData)
            if(res.data.message === "Founded"){
                Cookies.set("id", res.data.id);
                Cookies.set('name', res.data.instituteName);
                Cookies.set("identity", "institute");
                navigate('/')
            } else {
                console.log(res.data)
                alert("Institute Not Found")
            }
        } catch(e){
            alert('Unexpected error occoured')
            console.log(e)
        }
    }

    const handleStudentSubmit = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:8000/student/login/',studentData)
            if(res.data.message === "Founded"){
                Cookies.set("id", res.data.id);
                Cookies.set('name', res.data.name);
                Cookies.set("identity", "student");
                navigate('/')
            } else {
                console.log(res.data)
                alert("Student Not Found")
            }
        } catch(e){
            alert('Unexpected error occoured')
            console.log(e)
        }
    }


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-2">Login</h2>

            {/* Toggle Buttons */}
            <div className="d-flex justify-content-center">
                <button
                    className={`btn ${selectedForm === 'student' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => setSelectedForm('student')}
                >
                    Student Login
                </button>
                <button
                    className={`btn ${selectedForm === 'institute' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedForm('institute')}
                >
                    Institute Login
                </button>
            </div>

            {/* Forms Side by Side */}
            <div className="row">
                {/* Student Login Form */}
                {selectedForm === 'student' && (
                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card shadow-lg">
                                    <div className="card-header text-center bg-primary text-white">
                                        <h2>Student Login</h2>
                                    </div>
                                    <div className="card-body">
                                        <form method='post' onSubmit={handleStudentSubmit}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    name='email'
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="student@gmail.com"
                                                    required
                                                    onChange={handleStudentChange}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    name='password'
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="........"
                                                    required
                                                    onChange={handleStudentChange}
                                                />
                                            </div>
                                            {/* <div className="form-group mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                            </div> */}
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <p className="text-muted">Don't have an account?  <a href="/signup">Sign up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Institute Login Form */}
                {selectedForm === 'institute' && (
                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card shadow-lg">
                                    <div className="card-header text-center bg-primary text-white">
                                        <h2>Institue Login</h2>
                                    </div>
                                    <div className="card-body">
                                        <form method='post' onSubmit={handleInstituteSubmit}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name='email'
                                                    placeholder="Enter your email"
                                                    required
                                                    onChange={handleInstituteChange}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    name='password'
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    required
                                                    onChange={handleInstituteChange}
                                                />
                                            </div>
                                            {/* <div className="form-group mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                            </div> */}
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <p className="text-muted">Don't have an account?  <a href="/signup">Sign up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

