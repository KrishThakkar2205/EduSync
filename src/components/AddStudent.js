import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function AddStudent() {
    const [lsit,setList] = useState([])
    const [formData,setFormData] = useState({})
    const navigate = useNavigate()
    const id = Cookies.get('id')
    const data = {
        'id':id
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handelSubmit = async(e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            'id':id,
            'Institutename':Cookies.get('name')
        })
        try{
            console.log(formData)
            const res = await axios.post('http://localhost:8000/student/addstudent/',formData)
            navigate('/profile')
        } catch(e) {
            console.log(e)
            alert('Unexprected Error')
        }
    }

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const temp = await axios.post('http://localhost:8000/course/getcourse/',data)
                setList(temp.data.message)
                console.log(lsit)
            }
            catch (e) {
                alert("Cannot add Student")
            }
        }
        fetchData()
    },[])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-primary text-white">
                            <h3 style={{ fontSize: '25px' }}>Add Student</h3>
                        </div>
                        <div className="card-body">
                            <form method='post' onSubmit={handelSubmit}>
                                <div className="form-group mb-1">
                                    <label htmlFor="name">Student Name :</label>
                                    <input
                                    name='name'
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Student Name"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email Address :</label>
                                    <input
                                    name='email'
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="xyz@gmail.com"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="rollNo">Roll no :</label>
                                    <input
                                    name='rollno'
                                        type="number"
                                        className="form-control"
                                        id="rollNo"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="phoneNo">Phone Number :</label>
                                    <input
                                    name='phoneno'
                                        type="number"
                                        className="form-control"
                                        id="phoneNo"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="course">Course Name :</label>
                                    <select className='form-control' name="Course" onChange={handleChange}>
                                        <option value="" disabled selected>Select a course</option>
                                        {lsit.map((list) => (
                                        <option value={list.name}>{list.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Add Student
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
