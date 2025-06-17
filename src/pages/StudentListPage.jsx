//StudentListPage.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "../components/StudentCard";

const StudentListPage = ({ students }) => {
   return (
      <Container className="my-4">
         <h2 className="mb-4">🎓 All Students</h2>
         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {students.map((student) => (
               <Col key={student.id}>
                  <StudentCard student={student} />
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default StudentListPage;
