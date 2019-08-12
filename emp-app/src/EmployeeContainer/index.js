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
    //Here is where we get employees from db
    componentDidMount() {
        this.getEmployees();
    }
    getEmployees = async () =>  {
        try {
            const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employee');
            if(responseGetEmployees.status !== 200){
                throw Error('404 from server');
            }
            const employeesResponse = await responseGetEmployees.json();
            this.setState({
                employees: [...employeesResponse.data]
            });
        } catch(err) {
            console.log(err, 'err in getEmployees');
            return err;
        }
    }
    //Here is where we create a new employee
    addEmployee = async (employee) => {
    
        try {
          const createEmployee = await fetch('http://localhost:9000/api/v1/employee',{
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if(createEmployee.status !== 200){
            throw Error('Resource not found')
          }
    
          const createEmployeeResponse = await createEmployee.json();
          this.setState({
            employees: [...this.state.employees, createEmployeeResponse.data]
          })
        } catch(err) {
          console.log(err, ' addEmployee');
          return err
        }
    }
    //Here is where we delete an employee
    deleteEmployee = async (id) => {
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
    //this shows edit modal to edit employee info
    showEditModal = async (employee) =>  {
        this.setState({
            employeeToEdit: employee,
            isEditModalShowing: !this.state.isEditModalShowing
        })
    }
    //form change handler inside EditEmployee
    handleEditFormChange = (e) =>  {
        this.setState({
            employeeToEdit: {
              ...this.state.employeeToEdit,
              [e.target.name]: e.target.value
            }
        })
    }
    //---edit - submit - close ---
    editEmpAndCloseModal = async (e) =>  {
        e.preventDefault();
        try {
            const editRequest = await fetch('http://localhost:9000/api/v1/employee/' + this.state.employeeToEdit._id, {
            method: 'PUT',
            body: JSON.stringify(this.state.employeeToEdit),
            headers: {
             'Content-Type': 'application/json'
        }
      })

      if(editRequest.status !== 200){
        throw Error('edit is not working')
      }
      const editResponse = await editRequest.json();

      const editedEmployeeArray = this.state.employees.map((employee) => {
        if(employee._id === editResponse.data._id){
          employee = editResponse.data
        }

        return employee
      });
      this.setState({
        employees: editedEmployeeArray,
        isEditModalShowing: false
      })
        } catch(err){
            console.log(err, ' error editEmpAndCloseModal');
            return err
          }
    }
    render() {
        return(
            <div>
                <CreateEmployee addEmployee={this.addEmployee}/>
                <h2>The Brood</h2>
                <EmployeeList employees={this.state.employees} remove = {this.deleteEmployee} showEditModal={this.showEditModal}/>
                {this.state.isEditModalShowing ? <EditEmployee employee={this.state.employeeToEdit} handleEditFormChange={this.handleEditFormChange} editEmpAndCloseModal={this.editEmpAndCloseModal}/> : null}
            </div>
        );
    }
}

export default EmployeeContainer;