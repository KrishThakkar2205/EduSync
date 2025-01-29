import React from "react";

const Classes = () => {
  const classes = [
    { 
      id: 1, 
      name: "Advanced Mathematics", 
      description: "Explore advanced algebra, calculus, and analytical geometry tailored for engineering and science majors.", 
      time: "9:00 AM - 10:30 AM", 
      teacher: "Prof. John Doe",
      level: "Undergraduate", 
      capacity: "40 Students", 
      enrollment: "Open" 
    },
    { 
      id: 2, 
      name: "Applied Physics", 
      description: "Study the fundamental principles of mechanics, thermodynamics, and electromagnetism with practical applications.", 
      time: "11:00 AM - 12:30 PM", 
      teacher: "Dr. Jane Smith",
      level: "Undergraduate", 
      capacity: "35 Students", 
      enrollment: "Open" 
    },
    { 
      id: 3, 
      name: "Data Structures and Algorithms", 
      description: "Learn core concepts in data organization and manipulation, and optimize algorithms for real-world problems.", 
      time: "1:00 PM - 2:30 PM", 
      teacher: "Prof. Alice Johnson",
      level: "Undergraduate", 
      capacity: "45 Students", 
      enrollment: "Limited Spots" 
    },
    { 
      id: 4, 
      name: "Organic Chemistry", 
      description: "Delve into the world of carbon compounds, chemical reactions, and synthesis in this lab-intensive course.", 
      time: "3:00 PM - 4:30 PM", 
      teacher: "Dr. Robert Lee",
      level: "Undergraduate", 
      capacity: "30 Students", 
      enrollment: "Full" 
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">College Course Offerings</h2>
      <div className="row">
        {classes.map((classItem) => (
          <div key={classItem.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{classItem.name}</h5>
                <p className="card-text">{classItem.description}</p>
                <p className="card-text"><strong>Time:</strong> {classItem.time}</p>
                <p className="card-text"><strong>Teacher:</strong> {classItem.teacher}</p>
                <p className="card-text"><strong>Level:</strong> {classItem.level}</p>
                <p className="card-text"><strong>Class Capacity:</strong> {classItem.capacity}</p>
                <p className="card-text"><strong>Enrollment Status:</strong> <span className={classItem.enrollment === "Full" ? "text-danger" : "text-success"}>{classItem.enrollment}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
