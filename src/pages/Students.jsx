import { useState } from "react";
import { Link } from "react-router-dom";
import studentsData from "../data/students";
import "../styles/Students.css";

function Students() {

  const [search,setSearch]=useState("");

  const filteredStudents = studentsData.filter((student)=>
      student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="students-page">

      <h1>Student Directory</h1>

      <input
      type="text"
      placeholder="Search Student..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="search-box"
      />

      <div className="student-grid">

      {
        filteredStudents.map((student)=>(
          <div className="student-card" key={student.id}>

            <h2>{student.name}</h2>

            <p><strong>Course :</strong> {student.course}</p>

            <p><strong>Year :</strong> {student.year}</p>

            <p><strong>CGPA :</strong> {student.cgpa}</p>

            <Link to={`/students/${student.id}`}>
              <button>View Profile</button>
            </Link>

          </div>
        ))
      }

      </div>

    </div>

  );
}

export default Students;