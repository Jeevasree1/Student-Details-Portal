// studentReducer.js
const initialState = {
    students: [
      // Sample initial data
      { rollno: 1, name: 'Akkshyaa', mark1: 80, mark2: 75, mark3: 85, mark4: 90 },
      { rollno: 2, name: 'Jeevasree', mark1: 70, mark2: 85, mark3: 90, mark4: 80 },
      { rollno: 3, name: 'Keerthi', mark1: 90, mark2: 85, mark3: 95, mark4: 88 },
      { rollno: 4, name: 'varshini', mark1: 85, mark2: 88, mark3: 92, mark4: 87 },
      { rollno: 5, name: 'Kavya', mark1: 78, mark2: 80, mark3: 75, mark4: 82 },
      { rollno: 6, name: 'Preethi', mark1: 92, mark2: 88, mark3: 90, mark4: 85 },
      { rollno: 7, name: 'Divya', mark1: 85, mark2: 90, mark3: 87, mark4: 92 },
    ],
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_STUDENT':
        return {
          ...state,
          students: [...state.students, action.payload],
        };
      case 'DELETE_STUDENT':
        return {
          ...state,
          students: state.students.filter(student => student.rollno !== action.payload),
        };
      case 'EDIT_STUDENT':
        return {
          ...state,
          students: state.students.map(student =>
            student.rollno === action.payload.rollno ? { ...action.payload } : student
          ),
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  