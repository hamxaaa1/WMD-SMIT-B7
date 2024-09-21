import React from "react";

function Table(props) {
  const { id, propDelRow, propHandleEdit } = props;
  const handleClick = () => {
    propDelRow(id);
  };
  const handleEdit = () => {
    propHandleEdit(props);
  }
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>
        <td className="ps-5">{props.name}</td>
        <td>{props.fatherName}</td>
        <td className="ps-5">{props.email}</td>
        <td>{props.rollNo}</td>
        <td>
          <button
            onClick={handleEdit}
            type="button"
            className="btn btn-success"
            style={{marginRight: 13}}
          >
            Edit
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-danger"
            
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Table;
