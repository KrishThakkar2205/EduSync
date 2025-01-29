import React from 'react';

const Login = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-primary text-white">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
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
    );
};

export default Login;
