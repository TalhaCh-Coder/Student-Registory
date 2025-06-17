//App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import StudentListPage from "./pages/StudentListPage";
import AddStudentPage from "./pages/AddStudentPage";
import AboutPage from "./pages/AboutPage";

const students = [
  { id: 1, name: "Ali Raza", department: "Computer Science", gpa: 3.7 },
  { id: 2, name: "Sara Khan", department: "Software Engineering", gpa: 3.2 },
  { id: 3, name: "Ahsan Iqbal", department: "AI & Robotics", gpa: 3.9 },
  { id: 4, name: "Fatima Noor", department: "Data Science", gpa: 2.8 },
];

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/students"
          element={<StudentListPage students={students} />}
        />
        <Route path="/add" element={<AddStudentPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;