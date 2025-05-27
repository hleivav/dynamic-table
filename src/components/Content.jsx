import React from "react";

const studentData = [
  { id: 1, name: "Alice", subject: "Math", grade: "A" },
  { id: 2, name: "Bob", subject: "Science", grade: "B" },
  { id: 3, name: "Charlie", subject: "History", grade: "A-" },
  { id: 4, name: "Diana", subject: "English", grade: "B+" },
  { id: 5, name: "Edward", subject: "Math", grade: "C" },
];

const Content = () => { //defines a functional react component called Content
  return (
    <div className="container mt-5"> 
      <h2 className="text-center text-white bg-primary p-3 rounded">Student Grades</h2>
      <table className="table table-bordered table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td className={student.grade !== "C" ? "text-success" : "text-danger"}>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
