// StudentForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../actions/studentActions';

const StudentForm = () => {
  const dispatch = useDispatch();

  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [mark1, setMark1] = useState('');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [mark4, setMark4] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new student object
    const newStudent = {
      rollno: parseInt(rollno),
      name: name,
      mark1: parseInt(mark1),
      mark2: parseInt(mark2),
      mark3: parseInt(mark3),
      mark4: parseInt(mark4),
    };

    // Dispatch action to add student
    dispatch(addStudent(newStudent));

    // Reset form fields after submission
    setRollno('');
    setName('');
    setMark1('');
    setMark2('');
    setMark3('');
    setMark4('');
  };

  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Roll No:
          <input type="text" value={rollno} onChange={(e) => setRollno(e.target.value)} required />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Mark 1:
          <input type="number" value={mark1} onChange={(e) => setMark1(e.target.value)} required />
        </label>
        <label>
          Mark 2:
          <input type="number" value={mark2} onChange={(e) => setMark2(e.target.value)} required />
        </label>
        <label>
          Mark 3:
          <input type="number" value={mark3} onChange={(e) => setMark3(e.target.value)} required />
        </label>
        <label>
          Mark 4:
          <input type="number" value={mark4} onChange={(e) => setMark4(e.target.value)} required />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
