import React from "react";
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

function Main() {
  const [editStudent, setEditStudent] = useState(null)
  return (
    <>
    <h3 className="text-center">Add Student</h3>
      <Form editStudent={editStudent} setEditStudent={setEditStudent} />
    <h3 className="text-center">Students Record</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Email</th>
            <th scope="col">Roll No</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <Table setEditStudent={setEditStudent} />
        </tbody>
      </table>
    </>
  );
}

export default Main;
