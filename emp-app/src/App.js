import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import EmployeeContainer from './EmployeeContainer'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Hive</h1>
      <EmployeeContainer />
    </div>
  );
}

export default App;
