import students from "../data/students";
import "../styles/Statistics.css";

function Statistics() {

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

  const highestCGPA =
    totalStudents > 0
      ? Math.max(
          ...students.map(
            (student) => Number(student.cgpa)
          )
        ).toFixed(2)
      : "0.00";

  const lowestCGPA =
    totalStudents > 0
      ? Math.min(
          ...students.map(
            (student) => Number(student.cgpa)
          )
        ).toFixed(2)
      : "0.00";

  const courses = [
    "CSE",
    "AI & ML",
    "ECE",
    "IT",
  ];

  const courseData = courses.map((course) => ({
    course,
    count: students.filter(
      (student) => student.course === course
    ).length,
  }));

  const years = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
  ];

  const yearData = years.map((year) => ({
    year,
    count: students.filter(
      (student) => student.year === year
    ).length,
  }));

  return (
    <div className="statistics-page">

      {/* Header */}

      <div className="statistics-header">

        <div>
          <h1>Student Statistics</h1>

          <p>
            Analyze academic and enrollment data
            of StudentHub.
          </p>
        </div>

      </div>

      {/* Overview Cards */}

      <div className="statistics-cards">

        <div className="statistics-card">
          <span className="statistics-icon">
            👨‍🎓
          </span>

          <div>
            <p>Total Students</p>
            <h2>{totalStudents}</h2>
          </div>
        </div>

        <div className="statistics-card">
          <span className="statistics-icon">
            ⭐
          </span>

          <div>
            <p>Average CGPA</p>
            <h2>{averageCGPA}</h2>
          </div>
        </div>

        <div className="statistics-card">
          <span className="statistics-icon">
            🏆
          </span>

          <div>
            <p>Highest CGPA</p>
            <h2>{highestCGPA}</h2>
          </div>
        </div>

        <div className="statistics-card">
          <span className="statistics-icon">
            📚
          </span>

          <div>
            <p>Lowest CGPA</p>
            <h2>{lowestCGPA}</h2>
          </div>
        </div>

      </div>

      {/* Course Statistics */}

      <div className="statistics-section">

        <div className="statistics-section-header">
          <h2>Students by Course</h2>

          <p>
            Distribution of students across courses.
          </p>
        </div>

        <div className="statistics-list">

          {courseData.map((item) => {

            const percentage =
              totalStudents > 0
                ? (item.count / totalStudents) * 100
                : 0;

            return (
              <div
                className="statistics-list-item"
                key={item.course}
              >

                <div className="statistics-list-top">

                  <span>
                    {item.course}
                  </span>

                  <strong>
                    {item.count} students
                  </strong>

                </div>

                <div className="statistics-progress">

                  <div
                    className="statistics-progress-fill"
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>

                </div>

              </div>
            );

          })}

        </div>

      </div>

      {/* Year Statistics */}

      <div className="statistics-section">

        <div className="statistics-section-header">

          <h2>Students by Year</h2>

          <p>
            Number of students in each academic year.
          </p>

        </div>

        <div className="year-statistics">

          {yearData.map((item) => (

            <div
              className="year-stat-card"
              key={item.year}
            >

              <div className="year-stat-icon">
                🎓
              </div>

              <div>
                <p>{item.year}</p>

                <h3>
                  {item.count}
                </h3>

                <span>
                  Students
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Statistics;