import React from 'react';

const EmployeeList = ({ employees }) =>  {
    console.log(employees, 'props in employee list');
    return (
        <div>
            {
                employees.map((emp,i) =>  {
                    return(
                    <div key={i}>{emp.name}</div>
                    )
                })
            }
        </div>
    )
}

export default EmployeeList;