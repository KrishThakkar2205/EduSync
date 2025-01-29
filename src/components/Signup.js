import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({})

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  
  const HandleSubmit = async (e) => {
    let res = ''
    e.preventDefault();
    if(formData.password.length<8){
      alert("Password is Too Short ")
    } else if (formData.password === formData.confirmPassword){
      try {
        res = await axios.post('http://localhost:8000/addInstitute/', formData);
        console.log("Added Successfully");
        console.log(res.data.instituteName);
    
        // Set cookies for id, institute name, and identity
        Cookies.set("id", res.data.id);
        Cookies.set('name', res.data.instituteName);
        Cookies.set("identity", "institute");
    
        alert("Added Successfully");
        navigate('/');
      } catch (error) {
        console.log(error);
        alert("University Already Registered Login");
      }
    } else {
      alert("Password Mismatch Try again")
    }
    
  };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h3 style={{fontSize: '25px'}}>Institute Sign Up</h3>
            </div>
            <div className="card-body">
              <form method='post' onSubmit={HandleSubmit}>
                <div className="form-group mb-1">
                  <label htmlFor="name">Institute Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="ABC University"
                    name = 'name'
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name = 'email'
                    placeholder="Institute@gmail.com"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name = 'password'
                    className="form-control"
                    id="password"
                    placeholder="........"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name = 'confirmPassword'
                    id="confirmPassword"
                    placeholder="........"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  {/* <Link className='text-white'  to="/profile">Signup</Link> */}
                  Signup
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
            <p className="text-muted">Already have an account?  <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
