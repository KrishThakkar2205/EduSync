import React from 'react';
import t1 from '../img/testimonial-1.jpg'
import t2 from '../img/testimonial-2.jpg'
import t3 from '../img/testimonial-3.jpg'
import t4 from '../img/testimonial-4.jpg'

const Home1 = () => {
    return (
        <div className="container-fluid p-5 bg-light">

            {/* Hero Section */}
            <div className="row mb-5 text-center align-items-center hero-section">
                <div className="col-md-6">
                    <h1 className="display-4">Welcome to <span className="text-primary">Institute Management System</span></h1>
                    <p className="lead">
                        An all-in-one solution to manage classes, teachers, and student records effortlessly.
                    </p>
                    <a href="/about" className="btn btn-primary btn-lg mr-2">Learn More</a>
                    <a href="/signup" className="btn btn-outline-primary btn-lg">Get Started</a>
                </div>
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/600x400" alt="Hero" className="img-fluid" />
                </div>
            </div>


            <section className="text-center p-5 bg-light">
                <h1>Streamlining Education Management</h1>
                <div className="mt-4">
                    <a href="/signup" className="btn btn-primary mx-2">Register Your Institute</a>
                    <a href="/login2" className="btn btn-primary mx-2">Student Login</a>
                </div>
            </section>



            {/* Features Section */}
            <div className="row text-center">
                <h2 className="mb-4">Key Features</h2>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Class Management" />
                        <div className="card-body">
                            <h5 className="card-title">Class Management</h5>
                            <p className="card-text">
                                Easily manage class schedules, assignments, and academic resources.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Teacher Management" />
                        <div className="card-body">
                            <h5 className="card-title">Teacher Management</h5>
                            <p className="card-text">
                                Oversee teacher schedules, performance, and subject allocations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Student Records" />
                        <div className="card-body">
                            <h5 className="card-title">Student Records</h5>
                            <p className="card-text">
                                Manage student grades, attendance, and performance with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}


            <div className="container-fluid py-5">
                <div class="text-center pb-2">
                    <h1 class="section-title px-5 mb-4"><span class="px-2">Testimonial</span></h1>
                </div>
                <div className="row text-center mb-4">
                    <div className="col">
                        <h1>What Institute Says</h1>
                        <p className="lead">See how our system has transformed their educational experience</p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "Our institute's efficiency has drastically improved since we implemented the Institute Management System!"
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Principal, ABC Institute</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "Managing student records and teacher schedules is now a breeze. Highly recommended!"
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Director, XYZ Academy</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "The ease of use and intuitive interface has allowed our staff to focus more on education than administration."
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">Administrator, LMN School</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/*  Testimonial Start */}
            <div class="container-fluid py-5">
                <div class="container p-0">
                    <div class="owl-carousel testimonial-carousel">
                    <div class="text-center pb-2">
                        <h1 class="mb-4">What Parents Say!</h1>
                    </div>
                        <div class="testimonial-item px-3">
                            <div class="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 class="fas fa-quote-left text-primary mr-3"> </h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle" src={t1} style={{ width: "70px", height: "70px" }} alt="" />
                                <div class="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item px-3">
                            <div class="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 class="fas fa-quote-left text-primary mr-3"> </h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle" src={t2} style={{ width: "70px", height: "70px" }} alt="" />
                                <div class="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item px-3">
                            <div class="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 class="fas fa-quote-left text-primary mr-3"> </h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle" src={t3} style={{ width: "70px", height: "70px" }} alt="" />
                                <div class="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item px-3">
                            <div class="bg-light shadow-sm rounded mb-4 p-4">
                                <h3 class="fas fa-quote-left text-primary mr-3"> </h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle" src={t4} style={{ width: "70px", height: "70px" }} alt="" />
                                <div class="pl-3">
                                    <h5>Parent Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}

            {/* Call to Action */}
            {/* <div className="row text-center mt-5">
                <div className="col">
                    <h3>Ready to Make a Change?</h3>
                    <p>Sign up today and experience the convenience of our Institute Management System.</p>
                    <a href="/signup" className="btn btn-success btn-lg">Sign Up Now</a>
                </div>
            </div> */}
        </div>
    );
};

export default Home1;
