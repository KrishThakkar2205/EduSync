

import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';



export default function Contact() {
    return (
        <>

            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
                        <h1 className="mb-4">Contact Us For Any Query</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mb-5">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <p>Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est eirmod eirmod amet.</p>
                            <div className="d-flex">
                                <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: "45px", height: "45px" }}></i>
                                <div className="pl-3">
                                    <h5>Address</h5>
                                    <p>123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: "45px", height: "45px" }}></i>
                                <div className="pl-3">
                                    <h5>Email</h5>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: "45px", height: "45px" }}></i>
                                <div className="pl-3">
                                    <h5>Phone</h5>
                                    <p>+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: "45px", height: "45px" }}></i>
                                <div className="pl-3">
                                    <h5>Opening Hours</h5>
                                    <strong>Sunday - Friday:</strong>
                                    <p className="m-0">08:00 AM - 05:00 PM </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* FAQs */}
            <div class="container my-5">
                <h2 class="text-center mb-4">Frequently Asked Questions (FAQs)</h2>

                <div class="accordion" id="faqAccordion">

                    {/* <!-- FAQ 1 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is the Institute Management System?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                The Institute Management System is a platform designed to manage all operations related to an educational institute, such as student admissions, teacher management, scheduling, and reporting.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 2 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do students enroll in classes?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                Students can enroll in classes through their student dashboard. After logging in, they can browse the available classes, select the ones they want to attend, and complete the registration process.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 3 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How are teachers managed in the system?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                Teachers can create and manage their own schedules, track student performance, and assign grades through their dedicated teacher dashboard. Administrators can add, update, or remove teacher profiles.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 4 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Can I track student attendance using the system?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                Yes, the system includes an attendance tracking feature where teachers can mark student attendance and generate reports for each class or student.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 5 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Is the system accessible from mobile devices?
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                Yes, the Institute Management System is fully responsive and can be accessed from mobile phones, tablets, and desktops, providing a seamless experience across devices.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 6 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                How secure is the data in the system?
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                The system uses modern encryption methods to ensure the security of all data, including sensitive information related to students, teachers, and staff.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 7 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSeven">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Can I generate reports for students and teachers?
                            </button>
                        </h2>
                        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                Yes, the system provides report generation features, allowing you to generate customized reports for student performance, attendance, teacher schedules, and more.
                            </div>
                        </div>
                    </div>

                    {/* <!-- FAQ 8 --> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingEight">
                            <button style={{fontSize: '20px',fontWeight: 'bolder'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                How do I contact support if I encounter issues?
                            </button>
                        </h2>
                        <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                If you face any issues, you can reach out to our support team via the contact form on the website or send an email to support@institutemanagementsystem.com. We aim to resolve issues promptly.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};
