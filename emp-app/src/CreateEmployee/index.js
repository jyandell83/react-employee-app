import React, { Component } from 'react';
import { Button, Form, Input, Icon, Accordion } from 'semantic-ui-react';
import './CreateEmployee.css';

class CreateEmployee extends Component {
    state = {
        name: '',
        birthDate: '',
        department: '',
        annualSalary: '',
        activeIndex: 1 
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
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }
    
    render() {
        const { activeIndex } = this.state
        return(
            <Accordion className="addForm">
                 <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}><Icon name='dropdown' />Add another drone</Accordion.Title>
                 <Accordion.Content active={activeIndex === 0}>
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
                </Accordion.Content>
            </Accordion>
        )
    }
}

export default CreateEmployee;