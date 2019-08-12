import React from 'react';
import { Button, Form } from 'semantic-ui-react'



const EditEmployee = (props)  =>  {
    const dateStr = props.employee.birthDate.substring(0,10);
    return(
        <div>
            <Form onSubmit={props.editEmpAndCloseModal}>
                    <Form.Field>
                        <label>Name:</label>
                        <input type="text" name="name" value={props.employee.name} onChange={props.handleEditFormChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Birth Date:</label>
                        <input type="date" name="birthDate" value={dateStr} onChange={props.handleEditFormChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Department:</label>
                        <input type="text" name="department" value={props.employee.department} onChange={props.handleEditFormChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Salary:</label>
                        <input type="text" name="annualSalary" value={props.employee.annualSalary} onChange={props.handleEditFormChange}/>
                    </Form.Field>
                    <Button type="submit">
                        Modify
                    </Button>
            </Form>
        </div>
    )
}

export default EditEmployee;