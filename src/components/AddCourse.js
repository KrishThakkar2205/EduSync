import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

export default function AddCourse() {
    const [formData,setFormData] = useState({})
    const navigate = useNavigate()
    const handelSubmit = async(e) =>{
        e.preventDefault()
        setFormData({
            ...formData,
            'id':Cookies.get('id')
        })
        try{
            const res = await axios.post('http://localhost:8000/course/addcourse/',formData)
            alert('Course Added Successfully')
            navigate('/profile')
        } catch (e){
            console.log(e)
            alert('Unexpected Error')
        }
        

    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-primary text-white">
                            <h3 style={{ fontSize: '25px' }}>Add Course</h3>
                        </div>
                        <div className="card-body">
                            <form method='post' onSubmit={handelSubmit}>
                                <div className="form-group mb-2">
                                    <label htmlFor="name">Course Name :</label>
                                    <input
                                        name = 'name'
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="django"
                                        required
                                        onChange={(e)=>setFormData({
                                            ...formData,
                                            [e.target.name]:e.target.value
                                        })}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                Add Course
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
