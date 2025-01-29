import React from "react";
import about1 from '../img/blog-1.jpg'

export default function About () {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={about1}  // Replace with your image URL
            alt="Institute Building" 
            className="img-fluid rounded" 
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-4">About Our Institute</h2>
          <p>
            Our institute is dedicated to providing world-class education and fostering innovation and creativity.
            We offer a diverse range of courses that cater to the needs of today’s competitive world. With a team 
            of highly qualified instructors and state-of-the-art facilities, we aim to equip students with the knowledge 
            and skills necessary to excel in their careers.
          </p>
          <p>
            We believe in holistic development and offer various extracurricular activities that allow students to explore 
            their passions beyond academics. Join us and be a part of a thriving community committed to excellence and success.
          </p>
        </div>
      </div>
    </div>
  );
};

