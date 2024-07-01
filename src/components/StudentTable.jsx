
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, editStudent } from '../actions/studentActions';

const StudentTable = () => {
  const students = useSelector(state => state.student.students);
  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = useState('asc');
  const [editMode, setEditMode] = useState(null); // Track which student is being edited
  const [editedStudent, setEditedStudent] = useState({}); // Track changes for the edited student

  const handleDelete = (rollno) => {
    dispatch(deleteStudent(rollno));
  };

  const handleEdit = (student) => {
    setEditMode(student.rollno);
    setEditedStudent(student);
  };

  const handleSave = () => {
    dispatch(editStudent(editedStudent));
    setEditMode(null);
    setEditedStudent({});
  };

  const handleCancel = () => {
    setEditMode(null);
    setEditedStudent({});
  };

  const handleInputChange = (e, field) => {
    const value = field.includes('mark') ? parseInt(e.target.value, 10) : e.target.value;
    setEditedStudent({
      ...editedStudent,
      [field]: value,
    });
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedStudents = [...students].sort((a, b) => {
    const totalA = a.mark1 + a.mark2 + a.mark3 + a.mark4;
    const totalB = b.mark1 + b.mark2 + b.mark3 + b.mark4;

    if (sortOrder === 'asc') {
      return totalA - totalB;
    } else {
      return totalB - totalA;
    }
  });

  return (
    <div className="table-container">
      <center><h2>Student Details</h2></center>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Mark 3</th>
            <th>Mark 4</th>
            <th onClick={handleSort} style={{ cursor: 'pointer' }}>
              Total {sortOrder === 'asc' ? '↑' : '↓'}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.rollno}>
              <td>{student.rollno}</td>
              <td>{editMode === student.rollno ? (
                <input
                  type="text"
                  value={editedStudent.name || ''}
                  onChange={(e) => handleInputChange(e, 'name')}
                />
              ) : (
                student.name
              )}</td>
              <td>{editMode === student.rollno ? (
                <input
                  type="number"
                  value={editedStudent.mark1 || ''}
                  onChange={(e) => handleInputChange(e, 'mark1')}
                />
              ) : (
                student.mark1
              )}</td>
              <td>{editMode === student.rollno ? (
                <input
                  type="number"
                  value={editedStudent.mark2 || ''}
                  onChange={(e) => handleInputChange(e, 'mark2')}
                />
              ) : (
                student.mark2
              )}</td>
              <td>{editMode === student.rollno ? (
                <input
                  type="number"
                  value={editedStudent.mark3 || ''}
                  onChange={(e) => handleInputChange(e, 'mark3')}
                />
              ) : (
                student.mark3
              )}</td>
              <td>{editMode === student.rollno ? (
                <input
                  type="number"
                  value={editedStudent.mark4 || ''}
                  onChange={(e) => handleInputChange(e, 'mark4')}
                />
              ) : (
                student.mark4
              )}</td>
              <td>{student.mark1 + student.mark2 + student.mark3 + student.mark4}</td>
              <td>
                {editMode === student.rollno ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(student)}>Edit</button>
                )}
                <button onClick={() => handleDelete(student.rollno)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
