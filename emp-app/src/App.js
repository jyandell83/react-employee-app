import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import AuthUser from './AuthUser';
import EmployeeContainer from './EmployeeContainer';


function App() {
  return (
    <div className="App">
      <AuthUser />
      <h1>Welcome to the Hive</h1>
      <EmployeeContainer />
    </div>
  );
}

export default App;
