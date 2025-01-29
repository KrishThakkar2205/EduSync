import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function StudentList() {
    const [data,setData] = useState([])
    const req = {
        'id':Cookies.get('id')
    }
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await axios.post('http://localhost:8000/student/getstudents/',req)
                setData(res.data.message)    
            } catch (e){
                alert('Unexpected Error')
                navigate('/profile')
            }
            
        }
        fetchData()
    },[])

    return (
        <div>
            <div className="container">
                <h2 className='m-3' style={{textAlign:'center'}}>Student's List</h2>
                <div class="row">
                {data.map(user => (
                    <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{user.name}</h5>
                            <p class="card-text">Email Id : {user.email}</p>
                            <p class="card-text">Roll No : {user.rollNo}</p>
                            <p class="card-text">Phone No : {user.phoneNo}</p>
                            <p class="card-text">Course : {user.course}</p>
                            <p class="card-text">Password : {user.password}</p>
                            {/* <a href="#" class="btn btn-primary">Delete</a> */}
                        </div>
                    </div>
                </div>
                ))}
                    
                </div>
            </div>
        </div>
    )
}
