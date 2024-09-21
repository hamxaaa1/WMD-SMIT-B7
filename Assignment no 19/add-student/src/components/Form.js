import React from "react";
import "../components/form.css";
import { useState, useEffect } from "react";
import * as Yup from "yup";

function Form({ student, setStudent, editStudent, resetEdit }) {               
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(()=> {
    if (editStudent) {
      setName(editStudent.name || "");
      setFatherName(editStudent.fatherName || "");
      setEmail(editStudent.email || "");
      setRollNo(editStudent.rollNo || "");
    } else {
      setName("");
      setFatherName("");
      setEmail("");
      setRollNo("");
    }
  }, [editStudent])

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    fatherName: Yup.string()
      .required("Father Name is required")
      .min(2, "Father Name must be at least 2 characters long"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    rollNo: Yup.number()
      .required("Roll No is required")
      .typeError("Roll No must be a number"),
  });
  // console.log(fathername, rollno)
  const validation = async () => {
    try {
      await validationSchema.validate({
        name,
        fatherName,
        email,
        rollNo
      }, {abortEarly: false})
      setErrors({});
      return true;
    } catch (err) {
      const newError = {}
      err.inner.forEach(error => {
        newError[error.path] = error.message;
      });
      setErrors(newError);
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validation()
    if (!isValid) {
      return;
    }
    if (editStudent) {
      const updatStudent = {...editStudent, name, fatherName, email, rollNo};
      const updatStudents = student.map(s => (s.id === editStudent.id ? updatStudent : s))
      setStudent(updatStudents);
      resetEdit();
    } else {
      const newStudent = {
        id: student.length + 1,
        name: name,
        fatherName: fatherName,
        email: email,
        rollNo: rollNo,
      };
      setName('')
      setFatherName('')
      setEmail('')
      setRollNo('')
      console.log(newStudent);
      setStudent([...student, newStudent]);
    }
    
  };
  return (
    <div className="formData">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="errorClass">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="fathername">Father Name: </label>
        <input
          type="text"
          placeholder="Father Name"
          id="fathername"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        {errors.fatherName && <div className="errorClass">{errors.fatherName}</div>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="errorClass">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="rollno">Roll No: </label>
        <input
          type="text"
          placeholder="Roll No"
          id="rollno"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        {errors.rollNo && <div className="errorClass">{errors.rollNo}</div>}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-primary mt-3"
      >
        {editStudent ? 'Update' : 'Add'}
      </button>
    </div>
  );
}

export default Form;
