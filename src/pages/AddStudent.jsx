import { useState } from "react";
import "../styles/AddStudent.css";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    year: "",
    cgpa: "",
    phone: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Student added successfully!");

    console.log("Student Data:", formData);

    setFormData({
      name: "",
      email: "",
      course: "",
      year: "",
      cgpa: "",
      phone: "",
      gender: "",
    });
  };

  return (
    <div className="add-page">

      <div className="add-container">

        <div className="add-header">
          <div className="add-icon">🎓</div>

          <h1>Add New Student</h1>

          <p>
            Add a new student to the StudentHub directory
          </p>
        </div>

        {message && (
          <div className="success-message">
            ✓ {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* Student Name */}

            <div className="form-group">
              <label>Student Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter student name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="student@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Course */}

            <div className="form-group">
              <label>Course</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Course
                </option>

                <option value="CSE">
                  Computer Science & Engineering
                </option>

                <option value="AI & ML">
                  Artificial Intelligence & Machine Learning
                </option>

                <option value="ECE">
                  Electronics & Communication
                </option>

                <option value="IT">
                  Information Technology
                </option>

                <option value="ME">
                  Mechanical Engineering
                </option>
              </select>
            </div>

            {/* Year */}

            <div className="form-group">
              <label>Year</label>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Year
                </option>

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="4th Year">
                  4th Year
                </option>
              </select>
            </div>

            {/* CGPA */}

            <div className="form-group">
              <label>CGPA</label>

              <input
                type="number"
                name="cgpa"
                placeholder="Enter CGPA"
                min="0"
                max="10"
                step="0.01"
                value={formData.cgpa}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter 10 digit phone number"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* Gender */}

          <div className="gender-section">

            <label>Gender</label>

            <div className="gender-options">

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />

                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />

                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />

                Other
              </label>

            </div>

          </div>

          {/* Buttons */}

          <div className="form-buttons">

            <button
              type="reset"
              className="reset-btn"
              onClick={() =>
                setFormData({
                  name: "",
                  email: "",
                  course: "",
                  year: "",
                  cgpa: "",
                  phone: "",
                  gender: "",
                })
              }
            >
              Clear Form
            </button>

            <button
              type="submit"
              className="submit-btn"
            >
              Add Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudent;