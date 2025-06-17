import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddStudentPage.css";

const AddStudentPage = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const studentToEdit = location.state || null;

   const [formData, setFormData] = useState({
      fullName: "",
      gender: "male",
      department: "",
      gpa: "",
   });

   useEffect(() => {
      if (studentToEdit) {
         setFormData({
            fullName: studentToEdit.fullName || "",
            gender: studentToEdit.gender || "male",
            department: studentToEdit.department || "",
            gpa: studentToEdit.gpa || "",
         });
      }
   }, [studentToEdit]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const url = studentToEdit
         ? `http://localhost:3001/students/${studentToEdit.id}`
         : "http://localhost:3001/students";

      const method = studentToEdit ? "PUT" : "POST";

      fetch(url, {
         method,
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((res) => {
            if (!res.ok) throw new Error("Failed to save student");
            return res.json();
         })
         .then(() => {
            alert(
               studentToEdit
                  ? "Student updated successfully!"
                  : "Student added successfully!"
            );
            navigate("/students");
         })
         .catch((error) => {
            console.error("Error saving student:", error);
            alert("Something went wrong while saving student.");
         });
   };

   return (
      <div className="form-container">
         <h2>{studentToEdit ? "Edit Student" : "Add Student"}</h2>
         <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
               type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               required
            />

            <label>Gender</label>
            <div className="gender-options">
               <label>
                  <input
                     type="radio"
                     name="gender"
                     value="male"
                     checked={formData.gender === "male"}
                     onChange={handleChange}
                  />
                  Male
               </label>
               <label>
                  <input
                     type="radio"
                     name="gender"
                     value="female"
                     checked={formData.gender === "female"}
                     onChange={handleChange}
                  />
                  Female
               </label>
            </div>

            <label>Department</label>
            <input
               type="text"
               name="department"
               value={formData.department}
               onChange={handleChange}
               required
            />

            <label>GPA</label>
            <input
               type="text"
               name="gpa"
               value={formData.gpa}
               onChange={handleChange}
               required
            />

            <button type="submit">
               {studentToEdit ? "Update Student" : "Add Student"}
            </button>
         </form>
      </div>
   );
};

export default AddStudentPage;
