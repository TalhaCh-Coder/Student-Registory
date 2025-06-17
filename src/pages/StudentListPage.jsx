import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "../components/StudentCard";
import { useNavigate } from "react-router-dom";

const StudentListPage = () => {
   const [students, setStudents] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      fetch("http://localhost:3001/students")
         .then((res) => res.json())
         .then((data) => {
            setStudents(data);
            setLoading(false);
         })
         .catch((err) => {
            setError(err.message);
            setLoading(false);
         });
   }, []);

   const handleDelete = (id) => {
      fetch(`http://localhost:3001/students/${id}`, {
         method: "DELETE",
      })
         .then((res) => {
            if (!res.ok) throw new Error("Delete failed");
            setStudents((prev) => prev.filter((s) => s.id !== id));
         })
         .catch((err) => alert("Error deleting student", err));
   };

   const handleEdit = (student) => {
      // Navigate to edit page with student data
      navigate("/edit", { state: student });
   };

   if (loading) return <Container>Loading...</Container>;
   if (error) return <Container>Error: {error}</Container>;

   return (
      <Container className="my-4">
         <h2 className="mb-4">🎓 All Students</h2>
         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {students.map((student) => (
               <Col key={student.id}>
                  <StudentCard
                     student={student}
                     onDelete={handleDelete}
                     onEdit={handleEdit}
                  />
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default StudentListPage;
