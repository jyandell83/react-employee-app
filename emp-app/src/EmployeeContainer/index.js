import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';


class EmployeeContainer extends Component {
    state = {
        employees: []
    }
    componentDidMount() {
        this.getEmployees();
    }
    getEmployees = async () =>  {
        try {
            const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employee');
            console.log(responseGetEmployees, 'responseGetEmployees in getEmployees app.js');
            if(responseGetEmployees.status !== 200){
                throw Error('404 from server');
            }
            const employeesResponse = await responseGetEmployees.json();
            console.log(employeesResponse, 'employees response after json');
            this.setState({
                employees: [...employeesResponse.data]
            });
        } catch(err) {
            console.log(err, 'err in getEmployees');
            return err;
        }
    }
    render() {
        return(
            <div>
                <h2>This is the Employee Container</h2>
                <CreateEmployee />
            </div>
        );
    }
}

export default EmployeeContainer;