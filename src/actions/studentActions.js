// studentActions.js
export const addStudent = (student) => {
    return {
      type: 'ADD_STUDENT',
      payload: student,
    };
  };
  
  export const deleteStudent = (rollno) => {
    return {
      type: 'DELETE_STUDENT',
      payload: rollno,
    };
  };
  
  export const editStudent = (student) => {
    return {
      type: 'EDIT_STUDENT',
      payload: student,
    };
  };
  