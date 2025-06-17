import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student, onDelete, onEdit }) => {
   const [showGPA, setShowGPA] = useState(false);

   return (
      <Card className="h-100 shadow-sm rounded">
         <Card.Body>
            <Card.Title>{student.fullName}</Card.Title>
            <Card.Subtitle className="mb-2">{student.gender}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
               {student.department}
            </Card.Subtitle>

            {showGPA && (
               <Card.Text>
                  GPA:{" "}
                  <span
                     style={{
                        color:
                           student.gpa >= 3.5
                              ? "green"
                              : student.gpa >= 3.0
                              ? "orange"
                              : "red",
                     }}
                  >
                     {student.gpa}
                  </span>
               </Card.Text>
            )}

            <Button
               className="btn btn-primary py-1 me-1"
               size="sm"
               onClick={() => setShowGPA(!showGPA)}
            >
               {showGPA ? "Hide GPA" : "Show GPA"}
            </Button>
            <button
               className="btn btn-danger mx-1 py-1"
               size="sm"
               onClick={() => {
                  onDelete(student.id);
               }}
            >
               Delete
            </button>
            <button
               className="btn btn-secondary mx-1 py-1"
               size="sm"
               onClick={() => {
                  onEdit(student);
               }}
            >
               Edit
            </button>
         </Card.Body>
      </Card>
   );
};

export default StudentCard;
