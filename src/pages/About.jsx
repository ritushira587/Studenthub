import { Link } from "react-router-dom";

import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-badge">
            🎓 About StudentHub
          </span>

          <h1>
            Smarter way to
            <span> manage students.</span>
          </h1>

          <p>
            StudentHub is a modern student management
            frontend application built with React.
            It provides a clean and simple interface
            for viewing, adding and managing student
            information.
          </p>

          <div className="about-buttons">

            <Link
              to="/students"
              className="about-primary-btn"
            >
              Explore Students
            </Link>

            <Link
              to="/contact"
              className="about-secondary-btn"
            >
              Contact Us
            </Link>

          </div>

        </div>

        <div className="about-hero-card">

          <div className="about-big-icon">
            🎓
          </div>

          <h2>
            StudentHub
          </h2>

          <p>
            Student Management System
          </p>

          <div className="about-mini-stats">

            <div>
              <strong>React</strong>
              <span>Frontend</span>
            </div>

            <div>
              <strong>SPA</strong>
              <span>Architecture</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="about-section">

        <div className="about-section-heading">

          <span>
            WHAT WE OFFER
          </span>

          <h2>
            Everything you need to manage students
          </h2>

          <p>
            StudentHub combines useful student
            management features with a modern
            and responsive user interface.
          </p>

        </div>

        <div className="about-features">

          <div className="about-feature-card">

            <div className="feature-icon">
              👨‍🎓
            </div>

            <h3>
              Student Directory
            </h3>

            <p>
              Browse student records and view
              detailed individual profiles.
            </p>

          </div>

          <div className="about-feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Dashboard
            </h3>

            <p>
              Get an overview of students,
              courses, CGPA and academic data.
            </p>

          </div>

          <div className="about-feature-card">

            <div className="feature-icon">
              🔐
            </div>

            <h3>
              Protected Routes
            </h3>

            <p>
              Dashboard pages are protected
              using React Router authentication.
            </p>

          </div>

          <div className="about-feature-card">

            <div className="feature-icon">
              📱
            </div>

            <h3>
              Responsive Design
            </h3>

            <p>
              The interface adapts to desktops,
              tablets and mobile devices.
            </p>

          </div>

        </div>

      </section>

      {/* Technology */}

      <section className="about-tech-section">

        <div>

          <span className="about-tech-label">
            BUILT WITH MODERN TECHNOLOGY
          </span>

          <h2>
            React-based Student Management
          </h2>

          <p>
            StudentHub demonstrates practical use
            of React components, React Router,
            state management, route parameters,
            nested routes and responsive CSS.
          </p>

        </div>

        <div className="technology-list">

          <span>⚛️ React</span>

          <span>🧭 React Router</span>

          <span>🎨 CSS</span>

          <span>⚡ Vite</span>

        </div>

      </section>

    </div>
  );
}

export default About;