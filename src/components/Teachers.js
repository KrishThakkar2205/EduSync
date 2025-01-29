import React from "react";
// import team1 from '../img/team-1.jpg'
// import team2 from '../img/team-3.jpg'
// import team3 from '../img/team-3.jpg'
// import team4 from '../img/team-4.jpg'


const Teachers = () => {
  const teachers = [
    { 
      id: 1, 
      name: "Prof. John Doe", 
      subject: "Mathematics", 
      qualifications: "Ph.D. in Mathematics, 10+ years of teaching experience", 
      email: "johndoe@institute.edu", 
      phone: "(123) 456-7890", 
    //   image: '../img/team-1.jpg'  // Replace with teacher's image URL
    },
    { 
      id: 2, 
      name: "Dr. Jane Smith", 
      subject: "Physics", 
      qualifications: "Ph.D. in Physics, 8 years of research and teaching experience", 
      email: "janesmith@institute.edu", 
      phone: "(123) 456-7891", 
    //   image: {team2}  // Replace with teacher's image URL
    },
    { 
      id: 3, 
      name: "Prof. Alice Johnson", 
      subject: "Computer Science", 
      qualifications: "M.Sc. in Computer Science, 12+ years in the tech industry", 
      email: "alicejohnson@institute.edu", 
      phone: "(123) 456-7892", 
    //   image: {team3}  // Replace with teacher's image URL
    },
    { 
      id: 4, 
      name: "Dr. Robert Lee", 
      subject: "Chemistry", 
      qualifications: "Ph.D. in Chemistry, 15+ years of teaching experience", 
      email: "robertlee@institute.edu", 
      phone: "(123) 456-7893", 
    //   image: {team4}  // Replace with teacher's image URL
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Meet Our Faculty</h2>
      <div className="row">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={teacher.image} alt={teacher.name} className="card-img img-fluid rounded-circle" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{teacher.name}</h5>
                    <p className="card-text"><strong>Subject:</strong> {teacher.subject}</p>
                    <p className="card-text"><strong>Qualifications:</strong> {teacher.qualifications}</p>
                    <p className="card-text"><strong>Email:</strong> <a href={`mailto:${teacher.email}`}>{teacher.email}</a></p>
                    <p className="card-text"><strong>Phone:</strong> {teacher.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
