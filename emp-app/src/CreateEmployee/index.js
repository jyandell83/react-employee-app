import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'semantic-ui-react';
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
                        <Input icon label='Name: ' placeholder='Name' type="text" name="name" onChange={this.updateEmployee}>
                            <input />
                            <Icon name='smile outline' /> 
                        </Input>
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
                    <Button inverted color="yellow" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CreateEmployee;