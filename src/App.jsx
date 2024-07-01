// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import './App.css'; // Import your CSS file here

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <StudentForm />
        <StudentTable />
      </div>
    </Provider>
  );
};

export default App;

