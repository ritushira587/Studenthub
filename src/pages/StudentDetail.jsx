import { useParams, Link } from "react-router-dom";

import students from "../data/students";

import "../styles/StudentDetail.css";

function StudentDetail() {

  const { id } = useParams();

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Student Not Found
      </h2>
    );
  }

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-image">
          👨‍🎓
        </div>

        <h1>{student.name}</h1>

        <h3>{student.course}</h3>

        <div className="profile-info">

          <p>
            <strong>Student ID :</strong> {student.id}
          </p>

          <p>
            <strong>Course :</strong> {student.course}
          </p>

          <p>
            <strong>Year :</strong> {student.year}
          </p>

          <p>
            <strong>CGPA :</strong> {student.cgpa}
          </p>

          <p>
            <strong>Email :</strong> {student.email}
          </p>

        </div>

        <Link to="/students">
          <button className="back-btn">
            ← Back to Students
          </button>
        </Link>

      </div>

    </div>
  );
}

export default StudentDetail;