import React from "react";
import './Form.css'
import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../store/slices/addStudentSlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

function Form({ editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
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
  }, [editStudent]);
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
  const validation = async () => {
    const data = { name, fatherName, email, rollNo };
    try {
      await validationSchema.validate(data, { abortEarly: false });
      setName("");
      setFatherName("");
      setEmail("");
      setRollNo("");
      setErrors({});
      return true;
    } catch (error) {
      const validationError = {};
      error.inner.forEach((err) => {
        validationError[err.path] = err.message;
      });
      setErrors(validationError);
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validation();
    if (!isValid) {
      return;
    }
    if (!editStudent) {
      dispatch(addStudent({ name, fatherName, email, rollNo }));
    } else {
      dispatch(
        updateStudent({ id: editStudent.id, name, fatherName, email, rollNo }),
        setEditStudent(null)
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="fatherName">Father Name</label>
        <input
          type="text"
          placeholder="Father Name"
          id="fatherName"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        {errors.fatherName && <span>{errors.fatherName}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="rollNo">Roll No</label>
        <input
          type="text"
          placeholder="Roll No"
          id="rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        {errors.rollNo && <span>{errors.rollNo}</span>}
      </div>
      <button type="submit">{editStudent ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default Form;
