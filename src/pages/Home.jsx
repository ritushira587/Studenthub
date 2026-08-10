import { Link } from "react-router-dom";

import students from "../data/students";

import "../styles/Home.css";

function Home() {

  const totalStudents = students.length;

  const averageCGPA =
    totalStudents > 0
      ? (
          students.reduce(
            (sum, student) =>
              sum + Number(student.cgpa),
            0
          ) / totalStudents
        ).toFixed(2)
      : "0.00";

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            Modern Student Management
          </div>

          <h1>
            Manage students.
            <br />

            <span>
              Simplify everything.
            </span>
          </h1>

          <p>
            StudentHub is a modern React-based
            student management system designed
            to make student information simple,
            organized and accessible.
          </p>

          <div className="hero-buttons">

            <Link
              to="/students"
              className="hero-primary-btn"
            >
              Explore Students
              <span>→</span>
            </Link>

            <Link
              to="/about"
              className="hero-secondary-btn"
            >
              Learn More
            </Link>

          </div>

          <div className="hero-trust">

            <span>✓ Easy to use</span>

            <span>✓ Responsive</span>

            <span>✓ React powered</span>

          </div>

        </div>

        {/* Dashboard Preview */}

        <div className="hero-preview">

          <div className="preview-window">

            <div className="preview-topbar">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="preview-title">
                StudentHub
              </span>

            </div>

            <div className="preview-body">

              <div className="preview-welcome">
                <div>
                  <small>
                    Welcome back
                  </small>

                  <h3>
                    Admin Dashboard
                  </h3>
                </div>

                <div className="preview-avatar">
                  A
                </div>
              </div>

              <div className="preview-stats">

                <div className="preview-stat">
                  <span>Students</span>

                  <strong>
                    {totalStudents}
                  </strong>

                  <small>
                    Total students
                  </small>
                </div>

                <div className="preview-stat">
                  <span>Average CGPA</span>

                  <strong>
                    {averageCGPA}
                  </strong>

                  <small>
                    Overall average
                  </small>
                </div>

              </div>

              <div className="preview-chart">

                <div className="chart-header">
                  <span>
                    Student Activity
                  </span>

                  <span className="chart-period">
                    This Year
                  </span>
                </div>

                <div className="chart-bars">

                  <span style={{ height: "35%" }}></span>
                  <span style={{ height: "55%" }}></span>
                  <span style={{ height: "45%" }}></span>
                  <span style={{ height: "70%" }}></span>
                  <span style={{ height: "60%" }}></span>
                  <span style={{ height: "85%" }}></span>
                  <span style={{ height: "75%" }}></span>

                </div>

              </div>

            </div>

          </div>

          <div className="floating-card floating-card-one">
            <span>🎓</span>
            <div>
              <strong>Students</strong>
              <small>Management</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>✦</span>
            <div>
              <strong>Smart</strong>
              <small>Dashboard</small>
            </div>
          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="home-stats">

        <div className="home-stat">

          <strong>
            {totalStudents}+
          </strong>

          <span>
            Students
          </span>

        </div>

        <div className="home-stat">

          <strong>
            {averageCGPA}
          </strong>

          <span>
            Average CGPA
          </span>

        </div>

        <div className="home-stat">

          <strong>
            4
          </strong>

          <span>
            Core Modules
          </span>

        </div>

        <div className="home-stat">

          <strong>
            100%
          </strong>

          <span>
            Responsive
          </span>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="home-features">

        <div className="home-section-heading">

          <span>
            WHY STUDENTHUB?
          </span>

          <h2>
            Everything organized in one place.
          </h2>

          <p>
            Designed to demonstrate how a modern
            React application can solve everyday
            student management tasks.
          </p>

        </div>

        <div className="feature-grid">

          <div className="home-feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="home-feature-icon">
              👨‍🎓
            </div>

            <h3>
              Student Directory
            </h3>

            <p>
              Browse student records and open
              detailed profiles using dynamic
              route parameters.
            </p>

            <Link to="/students">
              Explore →
            </Link>

          </div>

          <div className="home-feature-card featured">

            <div className="feature-number">
              02
            </div>

            <div className="home-feature-icon">
              📊
            </div>

            <h3>
              Smart Dashboard
            </h3>

            <p>
              View student statistics, course
              distribution and academic insights
              from one dashboard.
            </p>

            <Link to="/dashboard">
              Dashboard →
            </Link>

          </div>

          <div className="home-feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="home-feature-icon">
              ⚡
            </div>

            <h3>
              Simple Management
            </h3>

            <p>
              Add and manage student information
              through an intuitive and responsive
              interface.
            </p>

            <Link to="/add">
              Add Student →
            </Link>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div>

          <span>
            READY TO EXPLORE?
          </span>

          <h2>
            Your student data,
            <br />
            beautifully organized.
          </h2>

          <p>
            Explore StudentHub and discover
            a cleaner way to manage student
            information.
          </p>

        </div>

        <Link
          to="/students"
          className="cta-button"
        >
          Get Started
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default Home;