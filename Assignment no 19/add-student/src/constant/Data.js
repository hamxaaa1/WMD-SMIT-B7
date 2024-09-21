import { useState } from "react";
const useStudentData = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      fatherName: "Robert Johnson",
      email: "alice.johnson@example.com",
      rollNo: "A101",
    },
    {
      id: 2,
      name: "Michael Smith",
      fatherName: "David Smith",
      email: "michael.smith@example.com",
      rollNo: "A102",
    },
    {
      id: 3,
      name: "Sophia Brown",
      fatherName: "James Brown",
      email: "sophia.brown@example.com",
      rollNo: "A103",
    }
  ]);
  return [students, setStudents];
};
export default useStudentData;
