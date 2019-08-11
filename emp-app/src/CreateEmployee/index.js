import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './CreateEmployee.css';

class CreateEmployee extends Component {
    state = {
        name: '',
        birthDate: '',
        department: '',
        annualSalary: ''
    }
    updateEmployee = (e)  =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) =>  {
        e.preventDefault();
        this.props.addEmployee(this.state);
    }
    render() {
        return(
            <div className="addForm">
                <h3>Add another drone</h3>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={this.updateEmployee}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Birth Date:</label>
                        <input type="date" name="birthDate" onChange={this.updateEmployee}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Department:</label>
                        <input type="text" name="department" onChange={this.updateEmployee}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Salary:</label>
                        <input type="text" name="annualSalary" onChange={this.updateEmployee}/>
                    </Form.Field>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CreateEmployee;