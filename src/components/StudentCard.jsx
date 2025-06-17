import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
   const [showGPA, setShowGPA] = useState(false);

   console.log("Rendering", student.name);

   return (
      <Card className="h-100 shadow-sm rounded">
         <Card.Body>
            <Card.Title>{student.name}</Card.Title>
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
               className="mt-2"
               variant="outline-primary"
               size="sm"
               onClick={() => setShowGPA(!showGPA)}
            >
               {showGPA ? "Hide GPA" : "Show GPA"}
            </Button>
         </Card.Body>
      </Card>
   );
};

export default StudentCard;
