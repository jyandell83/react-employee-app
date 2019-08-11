import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';
import EmployeeList from '../EmployeeList';
import EditEmployee from '../EditEmployee';

class EmployeeContainer extends Component {
    state = {
        employees: [],
        isEditModalShowing: false,
        employeeToEdit: {
            _id: null,
            name: '',
            birthDate: '',
            department: '',
            salary: ''
        }
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
    addEmployee = async (employee) => {
        console.log(employee,' inside of addEmployee')
    
        try {
          const createEmployee = await fetch('http://localhost:9000/api/v1/employee',{
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          console.log(createEmployee, "<createEmployee fetch")
          if(createEmployee.status !== 200){
            throw Error('Resource not found')
          }
    
          const createEmployeeResponse = await createEmployee.json();
          console.log(createEmployeeResponse.data, ' createEmployeeResponse');
          this.setState({
            employees: [...this.state.employees, createEmployeeResponse.data]
          })
        } catch(err) {
          console.log(err, ' addEmployee');
          return err
        }
    }
    deleteEmployee = async (id) => {
        console.log('delete me', id);
        try {

            const deleteEmployee = await fetch('http://localhost:9000/api/v1/employee/' + id, {
              method: 'DELETE'
            });
      
            if(deleteEmployee.status !== 200){
              throw Error('Something happend on delete')
            }
      
            // const deleteEmployeeJson = await deleteEmployee.json();
      
            this.setState({
              employees: this.state.employees.filter((employee) => employee._id !== id)
            })
      
          } catch(err){
            console.log(err);
            return err
          }
    }
    showEditModal = async (employee) =>  {
        console.log('edit me', employee);
        this.setState({
            employeeToEdit: employee,
            isEditModalShowing: !this.state.isEditModalShowing
        })
    }
    render() {
        return(
            <div>
                <h2>This is the Employee Container</h2>
                <CreateEmployee addEmployee={this.addEmployee}/>
                <EmployeeList employees={this.state.employees} remove = {this.deleteEmployee} showEditModal={this.showEditModal}/>
                {this.state.isEditModalShowing ? <EditEmployee employee={this.state.employeeToEdit}/> : null}
            </div>
        );
    }
}

export default EmployeeContainer;