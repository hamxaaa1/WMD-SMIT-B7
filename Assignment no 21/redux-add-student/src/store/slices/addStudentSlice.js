import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      name: "Alice Johnson",
      fatherName: "Robert Johnson",
      email: "alice.johnson@example.com",
      rollNo: "A101",
    },
  ],
};
export const addStudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const { name, fatherName, email, rollNo } = action.payload;
      const newStudent = {
        id: state.students.length + 1,
        name,
        fatherName,
        email,
        rollNo,
      };
      state.students.push(newStudent);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      const {id, name, fatherName, email, rollNo} = action.payload
      const existingStudent = state.students.find(student => student.id === id)
      if (existingStudent) {
        existingStudent.name = name
        existingStudent.fatherName = fatherName
        existingStudent.email = email
        existingStudent.rollNo = rollNo
      }
    }
  },
});

export const {addStudent, removeStudent, updateStudent} = addStudentSlice.actions;
export default addStudentSlice.reducer;