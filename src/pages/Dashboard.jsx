import { Link, Outlet } from "react-router-dom";

import students from "../data/students";

import "../styles/Dashboard.css";

function Dashboard() {

  const totalStudents = students.length;

  const averageCGPA =
    students.length > 0
      ? (
          students.reduce(
            (total, student) =>
              total + Number(student.cgpa),
            0
          ) / students.length
        ).toFixed(2)
      : "0.00";

  const cseStudents = students.filter(
    (student) => student.course === "CSE"
  ).length;

  const aiStudents = students.filter(
    (student) => student.course === "AI & ML"
  ).length;

  const eceStudents = students.filter(
    (student) => student.course === "ECE"
  ).length;

  const itStudents = students.filter(
    (student) => student.course === "IT"
  ).length;

  const firstYear = students.filter(
    (student) => student.year === "1st Year"
  ).length;

  const secondYear = students.filter(
    (student) => student.year === "2nd Year"
  ).length;

  const thirdYear = students.filter(
    (student) => student.year === "3rd Year"
  ).length;

  const fourthYear = students.filter(
    (student) => student.year === "4th Year"
  ).length;

  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome to your StudentHub administration panel.
          </p>
        </div>

        <Link
          to="/add"
          className="dashboard-add-btn"
        >
          + Add Student
        </Link>

      </div>

      {/* Statistics Cards */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">
            👨‍🎓
          </div>

          <div>
            <span>Total Students</span>

            <strong>
              {totalStudents}
            </strong>
          </div>

        </div>

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">
            ⭐
          </div>

          <div>
            <span>Average CGPA</span>

            <strong>
              {averageCGPA}
            </strong>
          </div>

        </div>

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">
            💻
          </div>

          <div>
            <span>CSE Students</span>

            <strong>
              {cseStudents}
            </strong>
          </div>

        </div>

        <div className="dashboard-stat-card">

          <div className="dashboard-stat-icon">
            🤖
          </div>

          <div>
            <span>AI & ML Students</span>

            <strong>
              {aiStudents}
            </strong>
          </div>

        </div>

      </div>

      {/* Main Dashboard Content */}

      <div className="dashboard-content">

        {/* Course Distribution */}

        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <h2>Course Distribution</h2>

              <p>
                Students enrolled in each course
              </p>
            </div>

          </div>

          <div className="course-list">

            <div className="course-item">

              <div>
                <span>CSE</span>
                <strong>{cseStudents}</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${totalStudents
                      ? (cseStudents / totalStudents) * 100
                      : 0}%`,
                  }}
                ></div>
              </div>

            </div>

            <div className="course-item">

              <div>
                <span>AI & ML</span>
                <strong>{aiStudents}</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${totalStudents
                      ? (aiStudents / totalStudents) * 100
                      : 0}%`,
                  }}
                ></div>
              </div>

            </div>

            <div className="course-item">

              <div>
                <span>ECE</span>
                <strong>{eceStudents}</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${totalStudents
                      ? (eceStudents / totalStudents) * 100
                      : 0}%`,
                  }}
                ></div>
              </div>

            </div>

            <div className="course-item">

              <div>
                <span>IT</span>
                <strong>{itStudents}</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${totalStudents
                      ? (itStudents / totalStudents) * 100
                      : 0}%`,
                  }}
                ></div>
              </div>

            </div>

          </div>

        </div>

        {/* Year Distribution */}

        <div className="dashboard-card">

          <div className="dashboard-card-header">

            <div>
              <h2>Year Distribution</h2>

              <p>
                Students by academic year
              </p>
            </div>

          </div>

          <div className="year-grid">

            <div className="year-box">
              <span>1st Year</span>
              <strong>{firstYear}</strong>
            </div>

            <div className="year-box">
              <span>2nd Year</span>
              <strong>{secondYear}</strong>
            </div>

            <div className="year-box">
              <span>3rd Year</span>
              <strong>{thirdYear}</strong>
            </div>

            <div className="year-box">
              <span>4th Year</span>
              <strong>{fourthYear}</strong>
            </div>

          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="quick-action-grid">

          <Link to="/students">
            <span>👨‍🎓</span>

            <div>
              <strong>View Students</strong>
              <small>
                Browse student directory
              </small>
            </div>
          </Link>

          <Link to="/add">
            <span>➕</span>

            <div>
              <strong>Add Student</strong>
              <small>
                Register a new student
              </small>
            </div>
          </Link>

          <Link to="/dashboard/statistics">
            <span>📊</span>

            <div>
              <strong>Statistics</strong>
              <small>
                View detailed statistics
              </small>
            </div>
          </Link>

          <Link to="/dashboard/settings">
            <span>⚙️</span>

            <div>
              <strong>Settings</strong>
              <small>
                Manage dashboard settings
              </small>
            </div>
          </Link>

        </div>

      </div>

      {/* Nested Routes */}

      <div className="dashboard-subsection">

        <Outlet />

      </div>

    </div>
  );
}

export default Dashboard;